import {LandingsType} from "../../types";

const PATH = `/api/landing`;

const getLandingById = async (landingId: string) => {
    const articleResponse = await fetch(`${PATH}?id=${landingId}`);
    let data = await articleResponse.json();
    return data['message'][0]
}

const addLanding = async (landingData: LandingsType, router: any) => {
    if (landingData._id != null || landingData.id === '' || landingData.id === 'new id') {
        alert(':(')
        return
    }
    landingData.creationDate = new Date();
    landingData.modificationDate = new Date();
    try {
        const res = await fetch(PATH,
            {
                method: 'POST',
                body: JSON.stringify(landingData)
            }
        );
        let data = await res.json();
        console.log(data);
        alert('Added');
        return router.push(`/editor/${landingData.id}`);
    } catch (error) {
        console.log(error)
        alert(error);
        return error;
    }
}

const updateLanding = async (landingData: LandingsType, router: any) => {
    landingData.modificationDate = new Date();
    try {
        const res = await fetch(PATH,
            {
                method: 'PUT',
                body: JSON.stringify(landingData)
            }
        );
        alert('Updated')
        return router.push(router.asPath);
    } catch (error) {
        console.log(error)
        alert(error)
        return error;
    }
}

const deleteLanding = async (id: string, router: any) => {
    let ok = confirm('Delete landing?');
    if (ok && id !== null) {
        try {
            await fetch(PATH, {
                method: 'DELETE',
                body: id,
            });
            alert('Deleted')
            return router.push('/editor');
        } catch (error) {
            console.log(error)
            alert(error)
            return error
        }
    }
};

export {
    getLandingById,
    addLanding,
    updateLanding,
    deleteLanding,
}
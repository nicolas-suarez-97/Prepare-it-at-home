import {getCollection} from "../mongodb";

const COLLECTION = "landing"

const getLanding = async (query: object) => {
    const course = await getCollection(COLLECTION, query);
    return course[0];
}

const getAllLandings = async () => {
    return await getCollection(COLLECTION, null);
}

export {
    getLanding,
    getAllLandings,
}
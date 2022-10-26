import {get} from "../mongodb";

const COLLECTION = "landing"

const getCourse = async (query: object) => {
    const course = await get(COLLECTION, query);
    return course[0];
}

const getAllCourse = async () => {
    return await get(COLLECTION, null);
}

export {
    getCourse,
    getAllCourse,
}
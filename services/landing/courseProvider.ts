import {getCollection} from "../mongodb";

const COLLECTION = "landing"

const getCourse = async (query: object) => {
    const course = await getCollection(COLLECTION, query);
    return course[0];
}

const getAllCourses = async () => {
    return await getCollection(COLLECTION, null);
}

export {
    getCourse,
    getAllCourses,
}
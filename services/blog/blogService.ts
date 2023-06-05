import { getCollection } from '../mongodb'

const COLLECTION = 'blog'

const getBlog = async (query: object) => {
  const blog = await getCollection(COLLECTION, query);
  return blog[0];
}

const getAllBlogs = async () => {
  return await getCollection(COLLECTION, null);
}

export {
  getBlog,
  getAllBlogs,
}
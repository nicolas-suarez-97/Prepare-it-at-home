import { getCollection } from '../mongodb'

const COLLECTION = 'recipe'

const getRecipe = async (query: object) => {
  const recipe = await getCollection(COLLECTION, query);
  return recipe[0];
}

const getAllRecipes = async () => {
  return await getCollection(COLLECTION, null);
}

export {
  getRecipe,
  getAllRecipes,
}
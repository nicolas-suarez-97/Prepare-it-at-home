export interface RecipePreviewType {
  author: string
  calories: string
  categories: string[]
  cookware: string[]
  creationDate: Date
  dateTime: string
  description: string
  difficulty: number
  imageAlt: string
  imageUrl: string
  ingredients: string[]
  modificationsDate: Date
  name: string
  path: string
  quantity: number
  relatedCourses: []
  relatedRecipes: []
  steps: Steps[]
  time: string
}

interface Steps {
  description: string
  imageUrl: string
  imageAlt: string
}
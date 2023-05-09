type ReviewItem = {
    author: string,
    authorPicture: string,
    review: string,
}

type ReviewsSectionType = {
    title: string,
    items: Array<ReviewItem>
}

export type {
    ReviewItem,
    ReviewsSectionType,
}
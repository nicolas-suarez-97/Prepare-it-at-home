type FaqItem = {
    question: string,
    answer: string,
}

type FaqSectionType = {
    title: string,
    items: Array<FaqItem>
}

export type {
    FaqItem,
    FaqSectionType,
}
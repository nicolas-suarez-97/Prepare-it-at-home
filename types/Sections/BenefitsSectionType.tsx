type BenefitItem = {
    icon: string,
    label: string,
}

type BenefitsSectionType = {
    benefitsList: Array<BenefitItem>,
    certificateUrl: string,
    title: string,
    warrantyUrl: string,
}


export type {
    BenefitItem,
    BenefitsSectionType,
}

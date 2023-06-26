import {
    AchievementsSectionType,
    BannerSectionType,
    BenefitsSectionType,
    FaqSectionType,
    GallerySectionType,
    GetStartedSectionType,
    HookSectionType,
    ModulesSectionType,
    PricingSectionType,
    ProducerSectionType,
    ReviewsSectionType
} from "./Sections";

type Links = {
    discount: number,
    url: string,
}

export type CourseType = {
    _id?: any,
    id: string,
    active: boolean,
    creationDate: Date,
    modificationDate: Date,
    description: string,
    achievement: AchievementsSectionType,
    banner: BannerSectionType,
    benefits: BenefitsSectionType,
    courseUrl: string,
    faq: FaqSectionType,
    gallery: GallerySectionType,
    getStarted: GetStartedSectionType,
    hook: HookSectionType,
    links: Array<Links>
    modules: ModulesSectionType,
    pageType: string,
    pricing: PricingSectionType,
    producer: ProducerSectionType,
    redirect: boolean,
    reviews: ReviewsSectionType,
    value: number,
    videoUrl: string,
}
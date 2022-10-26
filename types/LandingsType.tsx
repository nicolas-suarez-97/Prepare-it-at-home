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

export type LandingsType = {
    _id?: any,
    id: string,
    creationDate: string,
    modificationDate: string,
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
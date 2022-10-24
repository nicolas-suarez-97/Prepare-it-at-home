type AchievementItem = {
    label: string,
    icon: string,
}

type AchievementsSectionType = {
    title: string,
    items: Array<AchievementItem>

}

export type {
    AchievementItem,
    AchievementsSectionType,
}
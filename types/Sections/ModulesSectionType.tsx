type ModuleStep = {
    title: string,
    items: Array<string>
}

type ModulesSectionType = {
    title: string,
    itemsIcon: string,
    steps: Array<ModuleStep>,
}

export type {
    ModuleStep,
    ModulesSectionType
}

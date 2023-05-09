import {LandingsType} from "./LandingsType";

export type EditorProps = {
    data: LandingsType,
    setData: Function,
    original: LandingsType,
    focus: Function,
    iconSelector?: Function
}
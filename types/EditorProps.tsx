import {CourseType} from "./CourseType";

export type EditorProps = {
    data: CourseType,
    setData: Function,
    original: CourseType,
    focus: Function,
    iconSelector?: Function
}
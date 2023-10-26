import { CourseRow } from "./CourseRow";
import { StudentRow } from "./StudentRow";

export type ResultRow =
    {
        id?: number;
        course_id: number;
        course?: CourseRow
        student_id: number;
        student?: StudentRow
        score: string;
    }

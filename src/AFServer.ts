import { BaseServer } from "./BaseServer";
import { CourseRow } from "./rows/CourseRow";
import { ResultRow } from "./rows/ResultRow";
import { StudentRow } from "./rows/StudentRow";

export class AFServer extends BaseServer
{
    constructor()
    {
        super(process.env.REACT_APP_URL ?? "");
    }
    async getStudents(): Promise<StudentRow[]>
    {
        let { data } = await this.get("/student/all", {});
        return data;
    }
    async postStudent(row: StudentRow): Promise<StudentRow>
    {
        let { data } = await this.post("/student", {}, { name: row.name, family: row.family, birth_date: row.birth_date, email: row.email });
        return data;
    }
    async deleteStudent(id: number): Promise<void>
    {
        await this.delete("/student/" + id);
    }
    async getCourses(): Promise<CourseRow[]>
    {
        let { data } = await this.get("/course/all", {});
        return data;
    }
    async postCourse(row: CourseRow): Promise<CourseRow>
    {
        let { data } = await this.post("/course", {}, { name: row.name });
        return data;
    }
    async deleteCourse(id: number): Promise<void>
    {
        await this.delete("/course/" + id);
    }
    async getResults(): Promise<ResultRow[]>
    {
        let { data } = await this.get("/result/all", {});
        return data;
    }
    async postResult(row: ResultRow): Promise<ResultRow>
    {
        let { data } = await this.post("/result", {}, { student_id: row.student_id, course_id: row.course_id, score: row.score });
        return data;
    }
};
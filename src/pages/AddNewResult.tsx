import React from "react";
import Style from "./AddNewResult.module.css";
import AFSelectBox, { SelectBoxType } from "../components/AFSelectBox";
import AFButton from "../components/AFButton";
import AFTitle from "../components/AFTitle";
import { CourseRow } from "../rows/CourseRow";
import { StudentRow } from "../rows/StudentRow";
import { AFServer } from "../AFServer";

interface IProps { }

interface IState
{
    students: StudentRow[],
    courses: CourseRow[]
}
const option_score = [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
    { value: "C", label: "C" },
    { value: "D", label: "D" },
    { value: "E", label: "E" },
    { value: "F", label: "F" },
];

export default class AddNewResult extends React.Component<IProps, IState> {
    course = React.createRef<AFSelectBox>();
    student = React.createRef<AFSelectBox>();
    score = React.createRef<AFSelectBox>();
    constructor(props: IProps)
    {
        super(props);
        this.state = { students: [], courses: [] };
        this.onSubmit = this.onSubmit.bind(this);
    }
    override componentDidMount(): void
    {
        let server = new AFServer();
        server.getStudents().then(students =>
        {
            this.setState({ students });
        }).catch(e =>
        {
            alert(e);
        });
        server.getCourses().then(courses =>
        {
            this.setState({ courses });
        }).catch(e =>
        {
            alert(e);
        });
    }
    onSubmit(): void
    {
        let course_id = parseInt(this.course.current?.getValue() ?? "");
        let student_id = parseInt(this.student.current?.getValue() ?? "");
        let score = this.score.current?.getValue() ?? "";

        if (!course_id)
        {
            alert("Please select a course");
        }
        else if (!student_id)
        {
            alert("Please select a student");
        }
        else if (!score)
        {
            alert("Please select a score");
        }
        else
        {
            let server = new AFServer();
            server.postResult({ course_id, student_id, score }).then(() =>
            {
                alert("Result was successfully added");
                this.course.current?.setValue(null);
                this.student.current?.setValue(null);
                this.score.current?.setValue(null);
            }).catch(e =>
            {
                alert(e);
            });
        }
    }
    override render()
    {
        const option_coursename: SelectBoxType[] = this.state.courses.map(c => { return { value: c.id + "", label: c.name } });
        const option_studentname: SelectBoxType[] = this.state.students.map(c => { return { value: c.id + "", label: c.name } });
        return (
            <div className={Style.add_new_Result}>
                <AFTitle title="Add New result" />
                <AFSelectBox ref={this.course} onChange={() => { }} placeholder="Course" options={option_coursename} />
                <AFSelectBox ref={this.student} onChange={() => { }} placeholder="Student" options={option_studentname} />
                <AFSelectBox ref={this.score} onChange={() => { }} placeholder="Score" options={option_score} />
                <AFButton onClick={this.onSubmit} title="Submit" />
            </div>
        );
    }
}
import React from "react";
import Style from "./AddNewCourse.module.css";
import AFInput from "../components/AFInput";
import AFButton from "../components/AFButton";
import AFTitle from "../components/AFTitle";
import { AFServer } from "../AFServer";

interface IProps { }

interface IState { }

export default class AddNewCourse extends React.Component<IProps, IState> {
    name = React.createRef<AFInput>();
    constructor(props: IProps)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    private onSubmit(): void
    {
        let name: string = this.name.current?.getValue() ?? "";

        if (!name)
        {
            alert("Please enter name");
        }
        else
        {
            let server = new AFServer();
            server.postCourse({ name }).then(() =>
            {
                alert("Course was successfully added");
                this.name.current?.setValue("");
            }).catch(e =>
            {
                alert(e);
            });
        }
    }
    override render()
    {
        return (
            <div className={Style.add_new_course}>
                <AFTitle title="Add New Course" />
                <div className={Style.add_new_course_form}>
                    <AFInput title="Course name:" placeholder="Please enter Course name ..." type="" ref={this.name} />
                </div>
                <AFButton onClick={this.onSubmit} title="Submit" />
            </div>
        );
    }
}
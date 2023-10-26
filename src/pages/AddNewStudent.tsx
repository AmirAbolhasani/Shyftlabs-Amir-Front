import React from "react";
import Style from "./AddNewStudent.module.css";
import AFInput from "../components/AFInput";
import AFButton from "../components/AFButton";
import AFTitle from "../components/AFTitle";
import { AFServer } from "../AFServer";

interface IProps { }

interface IState { }

export default class AddNewStudent extends React.Component<IProps, IState> {
    name = React.createRef<AFInput>();
    family = React.createRef<AFInput>();
    birth_date = React.createRef<AFInput>();
    email = React.createRef<AFInput>();
    constructor(props: IProps)
    {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(): void
    {
        let name: string = this.name.current?.getValue() ?? "";
        let family: string = this.family.current?.getValue() ?? "";
        let birth_date: string = this.birth_date.current?.getValue() ?? "";
        let email: string = this.email.current?.getValue() ?? "";
        if (!name)
        {
            alert("Please enter first name");
        }
        else if (!family)
        {
            alert("Please enter family name");
        }
        else if (!birth_date)
        {
            alert("Please enter birth date");
        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm.test(email))
        {
            alert("Please enter a valid email");
        }
        else
        {
            let server = new AFServer();
            server.postStudent({ name, family, birth_date, email }).then(() =>
            {
                alert("Student was successfully added");
                this.name.current?.setValue("");
                this.family.current?.setValue("");
                this.birth_date.current?.setValue("");
                this.email.current?.setValue("");
            }).catch(e =>
            {
                alert(e);
            });
        }
    }
    override render()
    {
        return (
            <div className={Style.add_new_students}>
                <AFTitle title="Add New Students" />
                <div className={Style.add_new_students_form}>
                    <AFInput title="First name:" placeholder="Please enter First name ..." type="text" ref={this.name} />
                    <AFInput title="Family name:" placeholder="Please enter Family name ..." type="text" ref={this.family} />
                    <AFInput title="Date of birth:" placeholder="Please enter Date of birth ..." type="date" ref={this.birth_date} />
                    <AFInput title="Email address:" placeholder="Please enter Email address ..." type="email" ref={this.email} />
                </div>
                <AFButton onClick={this.onSubmit} title="Submit" />
            </div>
        );
    }
}
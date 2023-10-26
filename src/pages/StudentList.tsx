import React from "react";
import Style from "./StudentList.module.css";
import type { ColumnsType } from 'antd/es/table';
import { StudentRow } from "../rows/StudentRow";
import AFTable from "../components/AFTable";
import remove from "../assets/images/remove.png";
import AFTitle from "../components/AFTitle";
import { AFServer } from "../AFServer";

interface IProps { }

interface IState
{
    students: StudentRow[]
}

export default class StudentList extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = { students: [] };
        this.getColumns = this.getColumns.bind(this);
        this.reload = this.reload.bind(this);
        this.deleteStudent = this.deleteStudent.bind(this);
    }
    override componentDidMount(): void
    {
        this.reload();
    }
    reload(): void
    {
        let server = new AFServer();
        server.getStudents().then(students =>
        {
            this.setState({ students });
        }).catch(e =>
        {
            alert(e);
        });
    }
    private deleteStudent(id: number): void
    {
        let server = new AFServer();
        server.deleteStudent(id).then(() =>
        {
            this.reload();
        }).catch(e =>
        {
            alert(e);
        });
    }
    private getColumns(): ColumnsType<StudentRow>
    {
        return [
            {
                title: "Id",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "First name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Family name",
                dataIndex: "family",
                key: "family",
            },
            {
                title: "Date of birth",
                dataIndex: "birth_date",
                key: "birth_date",
                render: ((_, row) =>
                {
                    return row.birth_date.split("T")[0];
                }),
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Delete',
                dataIndex: 'delete',
                key: 'action',
                render: ((_, row) => <>
                    <div onClick={() => this.deleteStudent(row.id ?? 0)} >
                        <img src={remove} alt="remove" width="32px" />
                    </div>
                </>),
                width: 50,
            }
        ];
    }
    override render()
    {
        return (
            <div className={Style.students_list}>
                <AFTitle title="Students List" />
                <AFTable<StudentRow>
                    rowKey={"id"}
                    columns={this.getColumns()}
                    dataSource={this.state.students}
                />
            </div>
        );
    }
}
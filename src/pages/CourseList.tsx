import React from "react";
import Style from "./StudentList.module.css";
import type { ColumnsType } from 'antd/es/table';
import { CourseRow } from "../rows/CourseRow";
import AFTable from "../components/AFTable";
import remove from "../assets/images/remove.png";
import AFTitle from "../components/AFTitle";
import { AFServer } from "../AFServer";

interface IProps { }

interface IState
{
    courses: CourseRow[]
}

export default class CourseList extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = { courses: [] };
        this.getColumns = this.getColumns.bind(this);
        this.reload = this.reload.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }
    override componentDidMount(): void
    {
        this.reload();
    }
    reload(): void
    {
        let server = new AFServer();
        server.getCourses().then(courses =>
        {
            this.setState({ courses });
        }).catch(e =>
        {
            alert(e);
        });
    }
    deleteCourse(id: number): void
    {
        let server = new AFServer();
        server.deleteCourse(id).then(() =>
        {
            this.reload();
        }).catch(e =>
        {
            alert(e);
        });
    }
    getColumns(): ColumnsType<CourseRow>
    {
        return [
            {
                title: "Id",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "Name",
                dataIndex: "name",
                key: "name",
            },
            {
                title: 'Delete',
                dataIndex: 'delete',
                key: 'action',
                render: ((_, row) => <>
                    <div onClick={() => this.deleteCourse(row.id ?? 0)} >
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
            <div className={Style.courses_list}>
                <AFTitle title="Courses List" />
                <AFTable<CourseRow>
                    rowKey={"id"}
                    columns={this.getColumns()}
                    dataSource={this.state.courses}
                />
            </div>
        );
    }
}
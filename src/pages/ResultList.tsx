import React from "react";
import Style from "./StudentList.module.css";
import type { ColumnsType } from 'antd/es/table';
import { ResultRow } from "../rows/ResultRow";
import AFTable from "../components/AFTable";
import AFTitle from "../components/AFTitle";
import { AFServer } from "../AFServer";

interface IProps { }

interface IState
{
    results: ResultRow[]
}

export default class ResultList extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = { results: [] };
        this.getColumns = this.getColumns.bind(this);
        this.reload = this.reload.bind(this);
    }
    override componentDidMount(): void
    {
        this.reload();
    }
    reload(): void
    {
        let server = new AFServer();
        server.getResults().then(results =>
        {
            this.setState({ results });
        }).catch(e =>
        {
            alert(e);
        });
    }
    getColumns(): ColumnsType<ResultRow>
    {
        return [
            {
                title: "Id",
                dataIndex: "id",
                key: "id",
            },
            {
                title: "Course",
                dataIndex: "course",
                key: "course",
                render: ((_, row) =>
                {
                    return row.course?.name ?? row.course_id;
                }),
            },
            {
                title: "Student",
                dataIndex: "student",
                key: "student",
                render: ((_, row) =>
                {
                    if (row.student)
                        return row.student.name + " " + row.student.family;
                    return row.student_id;
                }),
            },
            {
                title: "Score",
                dataIndex: "score",
                key: "score",
            },

        ];
    }
    override render()
    {
        return (
            <div className={Style.results_list}>
                <AFTitle title="Results List" />
                <AFTable<ResultRow>
                    rowKey={"id"}
                    columns={this.getColumns()}
                    dataSource={this.state.results}
                />
            </div>
        );
    }
}
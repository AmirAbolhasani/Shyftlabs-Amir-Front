import React from "react";
import { Layout } from 'antd';
import Style from "./AFBaseLayout.module.css";
import { Link } from "react-router-dom";
import { Routes } from "../Routes";
const { Content, Sider } = Layout;

interface IProps
{
    children: JSX.Element | JSX.Element[]
}

interface IState { }

export default class AFBaseLayout extends React.Component<IProps, IState> {
    override render()
    {
        return (
            <>
                <Layout>
                    <Content>
                        <Layout>
                            <Sider width={200}>
                                <ul className={Style.af_base_layout_list_pages}>
                                    <li><Link to={Routes.Home}>Home</Link></li>
                                    <li><Link to={Routes.AddNewStudent}>Add New Students</Link></li>
                                    <li><Link to={Routes.StudentList}>Students List</Link></li>
                                    <li><Link to={Routes.AddNewCourse}>Add New Courses</Link></li>
                                    <li><Link to={Routes.CourseList}>Courses List</Link></li>
                                    <li><Link to={Routes.AddNewResult}>Add New Results</Link></li>
                                    <li><Link to={Routes.ResultList}>Results List</Link></li>
                                </ul>
                            </Sider>
                            <Content style={{ padding: '24px', minHeight: 280, background: "#f7faff" }}>{this.props.children}</Content>
                        </Layout>
                    </Content>
                </Layout>
            </>
        );
    }
}
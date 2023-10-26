import React from "react";
import { Routes } from "./Routes";
import Home from "./pages/Home";
import AddNewStudent from "./pages/AddNewStudent";
import AddNewCourse from "./pages/AddNewCourse";
import AddNewResult from "./pages/AddNewResult";
import StudentList from "./pages/StudentList";
import CourseList from "./pages/CourseList";
import ResultList from "./pages/ResultList";
import AFBaseLayout from "./components/AFBaseLayout";
import { BrowserRouter, Route } from "react-router-dom";

interface IProps { }

export default class AFRouter extends React.Component<IProps>
{
    override componentDidMount(): void
    {
    }
    override render()
    {
        return (
            <BrowserRouter>
                <AFBaseLayout>
                    <Route exact path={Routes.Home} component={Home} />
                    <Route exact path={Routes.StudentList} component={StudentList} />
                    <Route exact path={Routes.AddNewStudent} component={AddNewStudent} />
                    <Route exact path={Routes.CourseList} component={CourseList} />
                    <Route exact path={Routes.AddNewCourse} component={AddNewCourse} />
                    <Route exact path={Routes.ResultList} component={ResultList} />
                    <Route exact path={Routes.AddNewResult} component={AddNewResult} />
                </AFBaseLayout>
            </BrowserRouter>
        )
    }
}
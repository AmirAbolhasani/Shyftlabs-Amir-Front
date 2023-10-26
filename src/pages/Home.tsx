import React from "react";
import Style from "./Home.module.css";
import AFTitle from "../components/AFTitle";

interface IProps { }

interface IState { }

export default class Home extends React.Component<IProps, IState> {
    override render()
    {
        return (
            <div className={Style.home}>
                <AFTitle title="Home Page" />
                <h3 >
                    Amir Abolhasani
                </h3>
                <h3 >
                    Shyftlabs
                </h3>
                <p>Please find the <a href="https://github.com/AmirAbolhasani/Shyftlabs-Amir-Front">Github Frontend Project</a></p>
                <p>Please find the <a href="https://github.com/AmirAbolhasani/Shyftlabs-Amir-Back">Github Backend Project</a></p>
                <p>Please find the <a href="https://mega.nz/file/Fa8l0A6Z#yir6pewhfh6un1uVmDYI5Xcjbp2MHQXBpC41WFfFdis">Desciption Video</a></p>
            </div>
        );
    }
}
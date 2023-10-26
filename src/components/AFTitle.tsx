import React from "react";
import Style from "./AFTitle.module.css";

interface IProps
{
    title: string;
}

interface IState { }

export default class AFTitle extends React.Component<IProps, IState> {
    override render()
    {
        return (
            <header className={`${Style.title_container}`}>
                <h2 className={Style.title}>
                    {this.props.title}
                </h2>
            </header>
        );
    }
}
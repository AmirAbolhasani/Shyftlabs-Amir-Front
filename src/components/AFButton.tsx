import React from "react";
import Style from "./AFButton.module.css";

interface IProps
{
    title: string;
    onClick: () => void;
}

interface IState { }

export default class AFButton extends React.Component<IProps, IState>
{
    override  render()
    {
        return <button onClick={this.props.onClick} className={Style.af_button}>{this.props.title}</button>;
    }
}
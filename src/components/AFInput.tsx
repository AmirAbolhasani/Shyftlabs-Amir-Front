import React from "react";
import Style from "./AFInput.module.css";

interface IProps
{
    title: string;
    type: string;
    placeholder: string;
}

interface IState
{
    value: string;
}

export default class AFInput extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            value: ""
        };
        this.onChange = this.onChange.bind(this);
        this.setValue = this.setValue.bind(this);
        this.getValue = this.getValue.bind(this);
        this.setDefaultValue = this.setDefaultValue.bind(this);
    }
    private onChange(e: React.ChangeEvent<HTMLInputElement>): void
    {
        this.setValue(e.target.value);
    }
    setValue(value: string): void
    {
        this.setState({ value });
    }
    setDefaultValue(value: string): void
    {
        this.setState({ value });
    }
    getValue(): string
    {
        return this.state.value;
    }
    override render()
    {
        return (
            <div className={Style.af_input_form}>
                <span className={Style.af_input_title}>{this.props.title}</span>
                <input
                    value={this.state.value}
                    onChange={this.onChange}
                    type={this.props.type}
                    className={Style.af_input}
                    placeholder={this.props.placeholder}
                />
            </div>
        );
    }
}
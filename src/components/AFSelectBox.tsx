import React from "react";
import Style from "./AFSelectBox.module.css";
import { Select } from "antd";

interface IProps
{
    placeholder: string;
    options: SelectBoxType[];
    onChange: () => void;
}
interface IState
{
    selected: SelectBoxType | null;
}
export interface SelectBoxType
{
    value: string;
    label: string;
}
export default class JASelectBox extends React.Component<IProps, IState> {
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            selected: this.getOption(this.props.placeholder),
        };
        this.setValue = this.setValue.bind(this);
    }
    setValue(selected: SelectBoxType | null): void
    {
        if (selected)
            this.setState({ selected }, this.props.onChange);
        else
            this.setState({ selected: null }, this.props.onChange);
    }
    getValue(): string
    {
        return this.state.selected?.value ?? "";
    }
    getOption(value: string): SelectBoxType | null
    {
        for (let option of this.props.options)
            if (option.value === value)
                return option
        return null
    }
    override render()
    {
        return (
            <div>
                <Select
                    className={Style.ja_select_box}
                    labelInValue={true}
                    placeholder={this.props.placeholder}
                    options={this.props.options}
                    value={this.state.selected}
                    onChange={this.setValue}
                >
                </Select>
            </div>
        );
    }
}
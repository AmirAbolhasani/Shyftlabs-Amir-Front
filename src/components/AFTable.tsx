import React from "react";
import { Table } from "antd";
import Style from "./AFTable.module.css";
import type { ColumnsType } from 'antd/es/table';
import { AnyObject } from "antd/es/_util/type";
import { GetComponentProps } from "rc-table/lib/interface";

interface IProps<RecordType> 
{
    columns: ColumnsType<RecordType>;
    rowKey: string;
    dataSource: RecordType[];
    rowClassName?: (record: RecordType) => string;
    onRowClick?: GetComponentProps<RecordType>;
}

interface IState { }

export default class AFTable<RecordType extends AnyObject> extends React.Component<IProps<RecordType>, IState> {
    override render()
    {
        return (
            <div>
                <Table<RecordType>
                    rowKey={this.props.rowKey}
                    className={Style.ja_table}
                    columns={this.props.columns}
                    dataSource={this.props.dataSource}
                    onRow={this.props.onRowClick}
                    scroll={{ x: true }}
                    sortDirections={["ascend", "descend"]}
                    rowClassName={this.props.rowClassName}
                />
            </div>
        );
    }
}
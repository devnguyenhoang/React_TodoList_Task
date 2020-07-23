import React, { Component } from 'react';

class TaskItem extends Component {
    render() {
        let { task, index} = this.props;
        return (
            <tr>
                <td>{index}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span 
                    className={ task.status ? 'badge badge-danger' : 'badge badge-primary' }
                    >{ task.status ? 'Kich hoat' : 'an' }</span>
                </td>
                <td className="text-center">
                    <button type="button" className="btn btn-warning">Sửa</button>  &nbsp;
                            <button type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    };
}

export default TaskItem;

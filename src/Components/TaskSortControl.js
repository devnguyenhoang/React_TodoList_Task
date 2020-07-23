import React, { Component } from 'react';

class TaskSortControl extends Component {
    render() {
        return (
            <div className="btn-group">
                <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sắp xếp
                            </button>
                <div className="dropdown-menu">
                    <p className="dropdown-item" href="#">Tên A-Z</p>
                    <p className="dropdown-item" href="#">Tên Z-A</p>
                    <div className="dropdown-divider"></div>
                    <p className="dropdown-item" href="#">trạng thái kích hoạt</p>
                    <p className="dropdown-item" href="#">trạng thái Ẩn</p>
                </div>
            </div>
        );
    };
}

export default TaskSortControl;

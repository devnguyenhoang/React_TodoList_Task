import React, { Component } from 'react';

class TaskSearchControl extends Component {
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Nhập từ khoá" aria-describedby="button-addon2" />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2"><i className="fa fa-search" aria-hidden="true"></i> Tìm</button>
                </div>
            </div>
        );
    };
}

export default TaskSearchControl;

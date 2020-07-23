import React, { Component } from 'react';
import '../css_task/style.css';

class TaskForm extends Component {
   render() {
      return (
         <div className="card" >
            <div className="card-header">
               Thêm Công Việc
                        <span className="fas fa-times-circle text-right-close"></span>
            </div>
            <ul className="list-group list-group-flush">
               <li className="list-group-item">
                  <form>
                     <div className="form-group row">
                        <label className="col-sm-12 col-form-label">Tên:</label>
                        <div className="col-sm-12">
                           <input type="text" className="form-control" name="inputName" id="inputName" placeholder="" />
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="col-sm-12">
                           <label >Trạng thái : </label>
                           <select className="form-control">
                              <option>Kích hoạt</option>
                              <option>Ẩn</option>
                           </select>
                        </div>
                     </div>
                     <div className="form-group row">
                        <div className="col-sm-12 text-center">
                           <button type="submit" className="btn btn-success btn_edit">Lưu Lại</button>
                           <button type="submit" className="btn btn-primary btn_edit">Huỷ Bỏ</button>
                        </div>
                     </div>
                  </form>
               </li>
            </ul>
         </div>
      );
   };
}

export default TaskForm;

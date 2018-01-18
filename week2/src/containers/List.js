import React from 'react';
import {Link} from 'react-router-dom';
export default class List extends React.Component {
  render(){
    let userList = JSON.parse(localStorage.getItem('users'))||[];
    return <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>id</th>
            <th>用户名</th>
          </tr>
        </thead>
        <tbody>
        {userList.map((item,index)=>(
          <tr key={index}>
            <td>{item.id}</td>
            <td><Link to={{pathname:`/detail/${item.id}`}}>{item.username}</Link></td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  }
}

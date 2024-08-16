import React from 'react';
import BasicButtons from './editbutton';

function Table({ data }) {
  return (
    <table className="table table-bordered table-hover mt-4 " style={{borderColor: "rgb(0 0 0);"}}>
      <thead className="thead-dark">
        <tr>
          <th scope="col" style={{backgroundColor:"rgb(0, 0, 0)",color:"rgb(255 255 255)"}}>#</th>
          <th scope="col" >Team Member</th>
          <th scope="col" style={{backgroundColor:"rgb(0 0 0)",color:"rgb(255 255 255)"}}>Time Given</th>
          <th scope="col">Action</th>
          <th scope="col" style={{backgroundColor:"rgb(0 0 0)",color:"rgb(255 255 255)"}}>Date</th>
          <th scope="col">Edit</th>
          <th scope="col" style={{backgroundColor:"rgb(0 0 0)",color:"rgb(255 255 255)"}}>Status</th>
          
        
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th>
            <td>{item.teamMember}</td>
            <td>{item.timeGiven}</td>
            <td>{item.action}</td>
            <td>{item.date}</td>
            <td><BasicButtons Edit={item.Edit}/></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;

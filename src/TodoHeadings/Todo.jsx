import React from "react";
import ListIcon from "@mui/icons-material/List";
import Tasks from "./Tasks";
import Table from "./table";
import { blue } from "@mui/material/colors";
function Todo() {
  const tableData = [
    { teamMember: 'John Doe 2', timeGiven: '4 hours', action: 'Completed', date: '2024-08-14' },
    { teamMember: 'Jane Smith', timeGiven: '3 hours', action: 'In Progress', date: '2024-08-15' },
    // Add more data as needed
  ];
  return (
    <div>
      <div className="flex font-bold text-2xl m-4 " >
        <ListIcon fontSize="large mr-4 mt-2"/>
        <p>Task List</p>
      </div>
      <Table data={tableData} />
    </div>

  );
}

export default Todo;

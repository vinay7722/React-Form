import React, { useEffect, useState } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const Homepage = () => {
  const [data, setData] = useState([]);
  let actualdata;

  const getData = () => {
    actualdata = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        
        setData(myJson);
      });
  };

  useEffect(() => {
    getData();
  });

  return (
<TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Completed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((curElem, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {curElem.id}
              </TableCell>
              <TableCell>{curElem.title}</TableCell>
              <TableCell>{curElem.completed}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Homepage;

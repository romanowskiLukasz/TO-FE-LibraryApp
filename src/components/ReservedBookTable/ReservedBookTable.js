import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "./ReservedBookTable.css";

const columns = [
  { id: "title", label: "Tytuł", minWidth: 170 },
  { id: "author", label: "Autor", minWidth: 100 },
  {
    id: "bookBorrowDate",
    label: "Data wpożyczenia",
    minWidth: 170,
    align: "right",
  },
  {
    id: "bookReturnDate",
    label: "Data oddania",
    minWidth: 170,
    align: "right",
  },
];

function createData(title, author, bookBorrowDate, bookReturnDate) {
  return { title, author, bookBorrowDate, bookReturnDate };
}

const rows = [
  createData("Kubuś puchatek", "Walt Disney", "20-11-2021", "27-11-2021"),
  createData("The Namesake", "Jhumpa Lahiri", "11-12-2021", "19-12-2021"),
  createData("Life of Pi", "Yann Martel", "10-12-2021", "20-12-2021"),
  createData("Water for Elephants", " Sara Gruen", "10-12-2021", "25-12-2021"),
];

export default function ReservedBookTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div style={{ width: "50%" }}>
        <h1 className="table_title">Obecnie wypożyczone</h1>
        <Paper sx={{ overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}

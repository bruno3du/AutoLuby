import { useEffect, useState } from "react";
import { formatToMoney } from "../../utils/formatDatas";
import { cpf as formatCpf } from "magic-masks";
import { useTableData } from "../../hooks/useTableData";

import Header from "../../components/Header";
import { Container, HeaderSession } from "./styles";
import Search from "../../components/Search/Index";
import Pagination from "../../components/Pagination";

import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";
import Typography from "@mui/material/Typography";
import TableToolBar from "../../components/TableToolBar";
import TableHeadCustom from "../../components/TableHeadCustom";
import TableBodyCustom from "../../components/TableBody";

interface EmployeesData {
  name: string;
  email: string;
  cpf: string;
  salary: number;
  bio: string;
}

interface HeadCell {
  id: string;
  label: string;
}

export default function Employees() {
  const [offset, setOffset] = useState(0);
  const { getEmployeesData, tableEmployees } = useTableData();
  const [rows, setRows] = useState([] as (string | number)[][]);
  const headCells: HeadCell[] = [
    {
      id: "Nome",
      label: "Nome",
    },
    {
      id: "email",
      label: "email",
    },
    {
      id: "cpf",
      label: "cpf",
    },
    {
      id: "valor",
      label: "valor",
    },
    {
      id: "bio",
      label: "bio",
    },
  ];

  useEffect(() => {
    getEmployeesData();
  }, [getEmployeesData]);

  useEffect(() => {
    function createTableDataEmployee(tableEmployees: EmployeesData[]) {
      const newRows = tableEmployees.map((data) => {
        return [
          data.name,
          data.email,
          formatCpf(data.cpf),
          formatToMoney(data.salary),
          data.bio,
        ];
      });

      setRows(newRows);
    }
    if (tableEmployees.employees) {
      createTableDataEmployee(tableEmployees.employees);
    }
  }, [tableEmployees.employees]);

  return (
    <Container>
      <Header />
      <Typography
        variant="h4"
        sx={{
          width: "90%",
          maxWidth: "1180px",
          m: "0 auto",
          mt: 5,
          fontFamily: "Poppins",
          fontWeight: 600,
          color: "#495057",
        }}
      >
        Funcionários
      </Typography>
      <Box
        sx={{
          width: "90%",
          maxWidth: "1180px",
          m: "0 auto",
          mt: 5,
          boxShadow: "0px 0px 6px rgba(162, 162, 162, 0.25)",
          pb: "10px",
          borderRadius: "3px",
          background: "var(--color-white)",
        }}
      >
        <Box sx={{ m: "0 auto", mb: 2, width: "98%" }}>
          <HeaderSession>
            <TableToolBar title="Listagem de funcionários da empresa" />
            <div>
              <Pagination
                limit={tableEmployees.perPage}
                offset={offset}
                total={tableEmployees.totalRecords}
                setOffset={setOffset}
                current={tableEmployees.currentPage}
              />
              <Search width="200px" />
            </div>
          </HeaderSession>
          <TableContainer>
            <Table>
              <TableHeadCustom headCells={headCells} />
              {tableEmployees && <TableBodyCustom rows={rows} />}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}

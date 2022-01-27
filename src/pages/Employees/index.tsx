import Header from "../../components/Header";
import { Container, HeaderSession } from "./styles";
import { cpf as formatCpf } from "magic-masks";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";

import TableToolBar from "../../components/TableToolBar";
import TableHeadCustom from "../../components/TableHeadCustom";
import TableBodyCustom from "../../components/TableBody";
import Pagination from "../../components/Pagination";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Index";
import { useTableData } from "../../hooks/useTableData";
import { formatToMoney } from "../../utils/formatDatas";

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
      <Box
        sx={{
          width: "80%",
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
            <TableToolBar title="Listagem de veículos reservados e vendidos" />
            <div>
              <Pagination
                limit={5}
                offset={offset}
                total={120}
                setOffset={setOffset}
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

import Header from "../../components/Header";
import { Container, HeaderSession } from "./styles";
import Table from "@mui/material/Table";
import Box from "@mui/material/Box";
import TableContainer from "@mui/material/TableContainer";

import TableToolBar from "../../components/TableToolBar";
import TableHeadCustom from "../../components/TableHeadCustom";
import TableBodyCustom from "../../components/TableBody";
import Pagination from "../../components/Pagination";
import { useState } from "react";
import Search from "../../components/Search/Index";

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return [name, calories, fat, carbs, protein];
}

interface HeadCell {
  id: string;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: "Marca",
    label: "Marca",
  },
  {
    id: "calories",
    label: "modelo",
  },
  {
    id: "Ano",
    label: "Ano",
  },
  {
    id: "km",
    label: "km",
  },
  {
    id: "cor",
    label: "cor",
  },
  {
    id: "status",
    label: "status",
  },
  {
    id: "chassi",
    label: "chassi",
  },
  {
    id: "valor",
    label: "valor",
  },
];

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function Employees() {
  const [offset, setOffset] = useState(0);
  return (
    <Container>
      <Header />
      <Box
        sx={{
          width: "80%",
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
              <TableBodyCustom rows={rows} />
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}

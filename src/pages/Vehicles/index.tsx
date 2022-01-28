import { Box, Table, TableContainer, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import Search from "../../components/Search/Index";
import TableBodyCustom from "../../components/TableBody";
import TableHeadCustom from "../../components/TableHeadCustom";

import TableToolBar from "../../components/TableToolBar";
import { useTableData } from "../../hooks/useTableData";
import { formatThreeDigits, formatToMoney } from "../../utils/formatDatas";
import { Container, HeaderSession, Status } from "./styles";

interface HeadCell {
  id: string;
  label: string;
}

interface VehiclesType {
  brand: string;
  chassi: string;
  color: string;
  km: number;
  model: string;
  status: string;
  value: number;
  yer: string;
}

export default function Vehicles() {
  const [offset, setOffset] = useState(0);
  const [rows, setRows] = useState([] as (string | number | JSX.Element)[][]);
  const { getVehiclesData, allVehicles } = useTableData();

  useEffect(() => {
    getVehiclesData();
  }, [getVehiclesData]);

  useEffect(() => {
    function createTableDataEmployee(vehicles: VehiclesType[]) {
      const newRows = vehicles.map((data) => {
        const verifyCase = data.status.toUpperCase();
        const status = <Status color={verifyCase}>{data.status}</Status>;
        return [
          data.brand,
          data.model,
          data.yer,
          formatThreeDigits(data.km),
          data.color,
          status,
          data.chassi,
          formatToMoney(data.value),
        ];
      });

      setRows(newRows);
    }
    if (allVehicles.vehicles) {
      createTableDataEmployee(allVehicles.vehicles);
    }
  }, [allVehicles.vehicles]);

  const headCells: HeadCell[] = [
    {
      id: "Marca",
      label: "Marca",
    },
    {
      id: "modelo",
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
        Todos Veículos
      </Typography>
      <Box
        sx={{
          width: "90%",
          maxWidth: "1180px",
          m: "0 auto",
          mt: 5,
          boxShadow: "0px 0px 6px rgba(162, 162, 162, 0.25)",
          pb: "0.625rem",
          borderRadius: "3px",
          background: "var(--color-white)",
        }}
      >
        <Box sx={{ m: "0 auto", mb: 2, width: "98%" }}>
          <HeaderSession>
            <TableToolBar title="Listagem geral de veículos" />
            <div>
              <Pagination
                limit={allVehicles.perPage}
                offset={offset}
                total={allVehicles.totalRecords}
                setOffset={setOffset}
                current={allVehicles.currentPage}
              />
              <Search width="200px" />
            </div>
          </HeaderSession>
          <TableContainer>
            <Table>
              <TableHeadCustom headCells={headCells} />
              {rows && <TableBodyCustom rows={rows} />}
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Container>
  );
}

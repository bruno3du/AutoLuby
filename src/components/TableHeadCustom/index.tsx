import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

interface HeadCell {
  id: string;
  label: string;
}

interface TableHeadProps {
  headCells: readonly HeadCell[];
}

export default function TableHeadCustom({ headCells }: TableHeadProps) {
  return (
    <TableHead sx={{ background: "#F9F9F9" }}>
      <TableRow >
        {headCells.map((headCell) => (
          <TableCell
            sx={{
              fontWeight: 600,
              color: "#858585",
              fontFamily: "Poppins",
              border: "none",
              borderRadius: "3px",
              fontSize: "13px"
            }}
            key={headCell.id}
          >
            {headCell.label.toUpperCase()}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// import { Container } from "./styles";
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
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell key={headCell.id}>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

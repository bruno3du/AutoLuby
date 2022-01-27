// import { Container } from "./styles";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

// interface TableBodyCustomProps {
//   rows: {
//     name: string;
//     calories: number;
//     fat: number;
//     carbs: number;
//     protein: number;
//     price: number;
//   }[];
// }

interface TableBodyCustomProps {
  rows: (string | number)[][];
}

export default function TableBodyCustom({ rows }: TableBodyCustomProps) {
  return (
    <TableBody>
      {rows.map((row, index) => (
        <TableRow key={index} hover>
          {row.map((cell, i) => (
            <TableCell sx={{ fontWeight: 500, color: "#495057", fontFamily: 'Poppins', border: "none", }}  key={`cell ${i}`}>{cell}</TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
}

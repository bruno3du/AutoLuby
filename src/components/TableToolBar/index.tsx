// import { Container } from "./styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

interface TableToolBarProps {
  title: string;
}

export default function TableToolBar({ title }: TableToolBarProps) {
  return (
    <>
      <Toolbar
        sx={{
          ml: 0,
          pr: { xs: 1, sm: 1 },
        }}
      >
        <Typography
          sx={{
            flex: "1",
            fontWeight: 600,
            color: "#495057",
            fontFamily: "Poppins",
          }}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          {title}
        </Typography>
      </Toolbar>
    </>
  );
}

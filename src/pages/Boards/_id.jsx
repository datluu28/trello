// Boards Details
import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/pages/Boards/BoardBar/BoardBar"
import Contents from "~/pages/Boards/Contents/Contents"

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColors: "primary.main" }}
    >
      <AppBar />
      <BoardBar />
      <Contents />
    </Container>
  );
}

export default Board;

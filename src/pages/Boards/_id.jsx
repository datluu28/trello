// Boards Details
import Container from "@mui/material/Container";
import AppBar from "~/components/AppBar/AppBar";
import BoardBar from "~/pages/Boards/BoardBar/BoardBar"
import Contents from "~/pages/Boards/Contents/Contents"
import { mockData } from "~/apis/mock-data"
import { Box } from "@mui/material";

function Board() {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColors: "primary.main" }}
    >
      <AppBar />
      <BoardBar board={mockData?.board} />
      <Contents board={mockData?.board} />
    </Container>
  );
}

export default Board;

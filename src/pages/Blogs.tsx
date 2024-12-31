import CustomNavbar from "../components/CustomNavbar.tsx";
import { Container, Divider, Typography } from "@mui/material";

function Blogs() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Typography variant="h1" gutterBottom>
          Blogs
        </Typography>
        <Divider sx={{ mb: 4 }} />
      </Container>
    </>
  );
}

export default Blogs;

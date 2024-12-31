import CustomNavbar from "../components/CustomNavbar.tsx";
import { Container, Divider, Typography } from "@mui/material";
import Blog from "./Blog.tsx";

function Blogs() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Typography variant="h1" gutterBottom>
          Blogs
        </Typography>
        <Divider sx={{ mb: 4 }} />
        <Blog title={"First Blog"} src={"content/blogs/BlogFirst.md"} />
      </Container>
    </>
  );
}

export default Blogs;

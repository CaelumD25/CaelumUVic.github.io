import CustomNavbar from "../components/CustomNavbar.tsx";
import {Container, Divider, Typography} from "@mui/material";
import Blog from "./Blog.tsx";
import Background from "../components/Background.tsx";

function Blogs() {
  return (
    <>
      <CustomNavbar/>
      <Container className={"blogs-page"}>
        <Typography variant="h1" gutterBottom>
          Blogs
        </Typography>
        <Divider sx={{mb: 4}}/>
        <Blog title={"First Blog"} src={"content/blogs/BlogFirst.md"}/>
      </Container>
      <Background/>
    </>
  );
}

export default Blogs;

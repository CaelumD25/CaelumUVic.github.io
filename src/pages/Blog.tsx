import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import { Container, Typography } from "@mui/material";
import { useState } from "react";

export type props = {
  title: string;
  src: string;
};

function Blog({ title, src }: props) {
  const [expanded, setExpanded] = useState<boolean>();
  return (
    <Container
      onClick={() => setExpanded(!expanded)}
      sx={{
        borderRadius: "1em",
        padding: "1em",
        cursor: "pointer",
        boxShadow: "10px 0 20px #00000033",
        border: "10px black",
        "@media (min-width: 835px)": {
          mx: 0,
        },
      }}
    >
      <Typography variant="h3">{title}</Typography>
      <MarkdownToHTML src={src} shortened={expanded} />
    </Container>
  );
}

export default Blog;

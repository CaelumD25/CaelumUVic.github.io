import ReactMarkdown from "react-markdown";
import {useEffect, useState} from "react";
import {Typography, Box, List, ListItem} from "@mui/material";

export interface Props {
  src: string;
  shortened?: boolean;
}

const MarkdownToHTML = ({src, shortened}: Props) => {
  const [markdown, setMarkdown] = useState<string>();
  const [error, setError] = useState<string>();

  useEffect(() => {
    const getMarkdown = async () => {
      try {
        // Construct the correct URL by combining the base URL with the src
        const baseUrl = import.meta.env.BASE_URL;
        const fullPath = `${baseUrl.replace(/\/$/, "")}/${src.replace(/^\//, "")}`;

        const response = await fetch(fullPath);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch markdown: ${response.status} ${response.statusText}`,
          );
        }

        const text = await response.text();
        setMarkdown(text);
        setError(undefined);
      } catch (e) {
        const errorMessage =
          e instanceof Error ? e.message : "Unknown error occurred";
        console.error("Error loading markdown:", errorMessage);
        setError(errorMessage);
        setMarkdown(undefined);
      }
    };

    getMarkdown();
  }, [src]);

  if (error) {
    return (
      <Typography color="error" variant="body1">
        Error loading markdown: {error}
      </Typography>
    );
  }

  if (!markdown) {
    return <Typography variant="body1">Loading...</Typography>;
  }

  const getShortened = (markdownString: string): string => {
    if (markdownString.length > 128) {
      const firstParagraph = markdownString.split("\n")[0];
      return firstParagraph.slice(0, 128) + "...";
    } else {
      return markdownString;
    }
  };

  return (
    <Box component="div">
      <ReactMarkdown
        components={{
          p: ({children}) => (
            <Typography variant="body1" paragraph>
              {children}
            </Typography>
          ),
          h1: ({children}) => (
            <Typography variant="h1" gutterBottom>
              {children}
            </Typography>
          ),
          h2: ({children}) => (
            <Typography variant="h2" gutterBottom>
              {children}
            </Typography>
          ),
          h3: ({children}) => (
            <Typography variant="h3" gutterBottom>
              {children}
            </Typography>
          ),
          h4: ({children}) => (
            <Typography variant="h4" gutterBottom>
              {children}
            </Typography>
          ),
          h5: ({children}) => (
            <Typography variant="h5" gutterBottom>
              {children}
            </Typography>
          ),
          h6: ({children}) => (
            <Typography variant="h6" gutterBottom>
              {children}
            </Typography>
          ),
          ul: ({children}) => (
            <List sx={{listStyleType: "disc", pl: 4}}>{children}</List>
          ),
          ol: ({children}) => (
            <List sx={{listStyleType: "decimal", pl: 4}}>{children}</List>
          ),
          li: ({children}) => (
            <ListItem
              sx={{
                display: "list-item",
                pl: 0,
                py: 0.5,
              }}
            >
              <Typography variant="body1">{children}</Typography>
            </ListItem>
          ),
        }}
      >
        {shortened ? getShortened(markdown) : markdown}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownToHTML;

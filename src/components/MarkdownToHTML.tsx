import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";

export interface Props {
  src: string;
}

const MarkdownToHTML = ({ src }: Props) => {
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
        console.log("Markdown content loaded:", text.substring(0, 100) + "..."); // Log first 100 chars
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
    return <div className="text-red-500">Error loading markdown: {error}</div>;
  }

  if (!markdown) {
    return <div>Loading...</div>;
  }

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};

export default MarkdownToHTML;

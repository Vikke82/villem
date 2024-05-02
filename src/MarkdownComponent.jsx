import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import "katex/dist/katex.min.css"; // Katex CSS
import styles from "./styles/Home.module.css";

function MarkdownComponent({ path }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch(path);
        const text = await response.text();
        setMarkdown(text);
      } catch (error) {
        console.error("Error loading the markdown file:", error);
      }
    };

    fetchMarkdown();
  }, [path]); // Lisätty 'path' riippuvuuslistaan varmistamaan, että se lataa uudelleen jos polku muuttuu.

  return (
    <div className={styles.markdownContainer}>
      <ReactMarkdown
        rehypePlugins={[rehypeRaw, rehypeKatex]}
        remarkPlugins={[remarkMath]}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownComponent;

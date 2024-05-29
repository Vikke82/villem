import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";

const ScrollableText = ({ path }) => {
  const [text, setText] = useState("Ladataan tekstiä...");

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((data) => setText(data))
      .catch((error) => {
        console.error("Error loading text:", error);
        setText("Virhe ladattaessa tekstiä.");
      });
  }, []);

  return (
    <div
      style={{
        overflow: "auto",
        height: "200px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <pre style={{ whiteSpace: "pre-wrap" }}>
        <ReactMarkdown rehypePlugins={[rehypeKatex]}>{text}</ReactMarkdown>
      </pre>
    </div>
  );
};

export default ScrollableText;

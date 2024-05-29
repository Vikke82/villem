import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <Card style={{ maxWidth: "100%", margin: "1rem auto" }}>
      <Card.Body style={{ overflow: "auto", height: "200px" }}>
        <pre style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
          <ReactMarkdown rehypePlugins={[rehypeKatex]}>{text}</ReactMarkdown>
        </pre>
      </Card.Body>
    </Card>
  );
};

export default ScrollableText;

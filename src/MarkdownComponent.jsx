import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

function MarkdownComponent({ path }) {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(path)
      .then((response) => response.text())
      .then((text) => setMarkdown(text))
      .catch((error) =>
        console.error("Error loading the markdown file:", error)
      );
  }, []); // Tyhjä riippuvuuslista, jotta koodi suoritetaan vain kerran komponentin mountauksen yhteydessä

  return <ReactMarkdown>{markdown}</ReactMarkdown>;
}

export default MarkdownComponent;

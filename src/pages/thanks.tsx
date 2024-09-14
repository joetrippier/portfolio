import * as React from "react";
import { Link, HeadFC, PageProps } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

const ThanksPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>Thanks</h1>
      <p style={paragraphStyles}>
        Thanks for submiting the form.
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default ThanksPage;

export const Head: HeadFC = () => <title>Not found</title>;
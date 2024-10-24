import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

function Table({ data }: { data: { headers: string[]; rows: string[][] } }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props: any) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// This replaces rehype-slug
function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: React.ReactNode }) => {
    let slug = slugify(children as string);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };
  Heading.displayName = `Heading${level}`;
  return Heading;
}

// Syntax highlighter component
const codeBlock = ({ language, value }: { language: string; value: string }) => {
  return (
    <SyntaxHighlighter
      language={language}
      style={solarizedlight}
      swowLines={false}
      >
      {value}
    </SyntaxHighlighter>
  );
};

export const globalComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Table,
  code: codeBlock,
};

import React from "react";

/** Renders one or more schema.org objects as JSON-LD. */
export const JsonLd: React.FC<{ data: object | object[] }> = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);

export default JsonLd;

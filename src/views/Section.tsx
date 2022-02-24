import React from "react";

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div style={{ margin: "0 auto" }}>{children}</div>;
}

export default Section;

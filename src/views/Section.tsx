import React from "react";

type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div style={{ margin: "0 auto", marginTop: "50px" }}>{children}</div>;
}

export default Section;

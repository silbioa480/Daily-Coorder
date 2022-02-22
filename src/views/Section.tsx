type Props = {
  children: React.ReactNode;
};

function Section({ children }: Props) {
  return <div>{children}</div>;
}

export default Section;

interface Props {
  color?: string;
  onClick: () => void;
  // sayHi(address: string): string;
  children?: React.ReactNode;
}

const Child = ({ color = "red", onClick, children }: Props): JSX.Element => {
  return (
    <div>
      {color}
      <button onClick={onClick}>click me</button>
      {children}
    </div>
  );
};

export default Child;

import Child from "./Child";

const Parent = () => {
  const onClick = () => console.log("hello");

  return <Child onClick={onClick}>i am children</Child>;
};
export default Parent;

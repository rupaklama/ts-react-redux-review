import { useEffect, useRef, useState } from "react";

const users = [
  { id: 1, name: "sarah", age: 20 },
  { id: 2, name: "robin", age: 20 },
  { id: 3, name: "amrit", age: 20 },
  { id: 4, name: "rupak", age: 20 },
];

// <{ id: number; name: string; age: number } | undefined>
interface User {
  id: number;
  name: string;
  age: number;
}

const UserSearch = (): JSX.Element => {
  const [name, setName] = useState("");

  // note - Object is 'undefined' on initial render
  const [user, setUser] = useState<User | undefined>();

  // note - Element is 'null' on initial render
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();

    // only on having input element
    // if (inputRef.current) {
    //   inputRef.current.focus();
    // }
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const foundUser = users.find(user => user.name === name);

    setUser(foundUser);

    setName("");
  };
  return (
    <div>
      <h2>User Search</h2>
      <input ref={inputRef} type="text" value={name} onChange={onChange} />
      <button onClick={onClick}>Find User</button>
      {user && user.name}
    </div>
  );
};
export default UserSearch;

import { useState } from "react";

const GuestList = (): JSX.Element => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onClick = () => {
    setGuests([...guests, name]);

    setName("");
  };

  return (
    <div>
      <h3>Guest List</h3>

      <input type="text" value={name} onChange={onChange} />
      <button onClick={onClick}>Add Guest</button>

      <ul>
        {guests.map((item, i) => (
          <li key={"item" + i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default GuestList;

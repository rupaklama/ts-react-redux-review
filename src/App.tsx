import React from "react";
import Parent from "./props-demo/Parent";
import GuestList from "./state-demo/GuestList";
import UserSearch from "./state-demo/UserSearch";
import RepositoriesList from "./components/RepositoriesList";
import UserSearchClass from "./classes/UserSearchClass";

const users = [
  { id: 1, name: "sarah", age: 20 },
  { id: 2, name: "robin", age: 20 },
  { id: 3, name: "amrit", age: 20 },
  { id: 4, name: "rupak", age: 20 },
];

function App() {
  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("Dragged!!!!!");
  };

  return (
    <div>
      <h2>Redux Thunk</h2>
      <RepositoriesList />

      <h3>Review for ts....</h3>
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>

      <Parent />
      <GuestList />
      <UserSearch />

      <br />
      <br />
      <UserSearchClass users={users} />
    </div>
  );
}

export default App;

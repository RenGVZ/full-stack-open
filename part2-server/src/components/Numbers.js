import React from "react";

const Numbers = ({ usePeople, deleteOne }) => {
  const handleDelete = (id) => {
    deleteOne(id)
  }
  return (
    <>
      <ul style={{ listStyle: "none" }}>
        {usePeople.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
            <button onClick={() => handleDelete(person.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Numbers;

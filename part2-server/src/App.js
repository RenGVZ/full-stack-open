import "./styles.css";
import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import Phonebook from "./components/Phonebook";
import Numbers from "./components/Numbers";
import services from './services/persons'

export default function App() {
  const [usePeople, setPeople ] = useState([]);
  const [newName, setName] = useState("");
  const [newNumber, setNumber] = useState("");
  const [useSearch, setSearch] = useState("");
  const [useSearchResults, setSearchResults] = useState([]);

  const getPeople = () => {
    services.getAll()
     .then(people => {
        console.log(people);
        setPeople(people);
      });
  };

  const postPeople = (name, number) => {
    const id = usePeople.length - 1;
    services.createNew(name, number, id)
  }

  const deleteOne = (id) => {
    services.deletePerson(id);
    getPeople();
  }

  useEffect(getPeople, [])

  const addPerson = (e) => {
    e.preventDefault();
    const filtered = usePeople.some((person) => person.name === newName);
    if (!filtered) {
      postPeople(newName, newNumber);
      getPeople();
      setName("");
      setNumber("");
    }
  };

  const getResults = () => {
    const searchNames = usePeople.filter((person) => {
      return person.name.toLowerCase().includes(useSearch.toLowerCase());
    });
    setSearchResults(searchNames);
  };

  return (
    <div className="App">
      <h2>Name search</h2>
      <Search
        getResults={getResults}
        useSearch={useSearch}
        setSearch={setSearch}
        useSearchResults={useSearchResults}
      ></Search>

      <h2>Phonebook</h2>
      <Phonebook
        newName={newName}
        setName={setName}
        newNumber={newNumber}
        setNumber={setNumber}
        addPerson={addPerson}
      ></Phonebook>

      <h2>Numbers</h2>
      <Numbers usePeople={usePeople} deleteOne={deleteOne}></Numbers>
    </div>
  );
}

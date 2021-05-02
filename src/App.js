import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function AddPersonForm(props) {
  const [person,setPerson] = useState('');

  function handleChange(e) {
    setPerson(e.target.value)
  }

  function handleSubmit(e) {
      props.handleSubmit(person);
      setPerson('');
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type='text' class="p-1 rounded border-solid border-2" placeholder="Entrer le nom" value={person} />
      <button type="submit" class="border-2 p-2 bg-gray-400 ml-4 rounded font-bold ">Add</button>
    </form>
  )

}

function PeopleList(props) {
    const arr = props.data;
    const  listItems = arr.map((val,index) => <li key={index}>{val}</li>);
    return <ul>{listItems}</ul>
}

function ContactManger(props) {
    const [contacts,setContacts] = useState(props.data);

    function addPerson(name) {
        setContacts([...contacts,name]);
    }

    return (
        <div className="pt-5">
            <AddPersonForm handleSubmit={addPerson} />
            <PeopleList  data={contacts}/>
        </div>
    )
}

const contacts = ['James Smith','Thomas Anderson','Bruce Wayne']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Thanks MSUS</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <ContactManger data={contacts} />
    </div>
  );
}

export default App;

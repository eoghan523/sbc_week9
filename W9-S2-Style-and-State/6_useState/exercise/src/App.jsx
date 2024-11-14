import {useEffect, useState} from 'react';
import './App.css';
import BusinessCard from './components/BusinessCard';

// Import contacts from JSON file
import contacts from './data/contacts.json';

function App() {

  const [contactList, setContactList] = useState(contacts);
  const [newContact, setNewContact] = useState({});

  useEffect(() => {
    console.log('This loads only once on component mount');
  }, []);

  useEffect(() => {
    console.log('This loads every time the contactList changes');
  }, [contactList]);

  const onSort = (sortType) => {
    const sorted = [...contactList].sort((a, b) => a[sortType].localeCompare(b[sortType]));
    setContactList(sorted);
  }
  const onAddContact = () => {

    const newContactList = [...contactList, newContact];
    setContactList(newContactList);
  }

  const onFieldChange = (e) => {
    setNewContact({
      ...newContact,
      [e.target.id]: e.target.value
    });
  }

  // TODO: Implement form validation

  // TODO: BONUS: implement a timer that hides the error message after 5 seconds

  // TODO: BOSS LEVEL: implement a search bar that filters the contacts by name

  return (
    <>
      <div className="app">
        <div className="new-contact-container">
          <h2>Add a new contact</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Name" id="name" value={newContact?.name} onChange={onFieldChange} />
            <input type="text" placeholder="Position" id="position" value={newContact?.position} onChange={onFieldChange} />
            <input type="text" placeholder="Company" id="company" value={newContact?.company} onChange={onFieldChange} />
            <input type="text" placeholder="Email" id="email" value={newContact?.email} onChange={onFieldChange} />
            <input type="text" placeholder="Phone" id="phone" value={newContact?.phone} onChange={onFieldChange} />
            <input type="text" placeholder="Website" id="website" value={newContact?.website} onChange={onFieldChange} />
            <button onClick={()=>onAddContact()}>Add Contact</button>
          </form>
          {/* Add a div/p here that display an error message  */}
          <div className="button-container">
            <button onClick={() => onSort('name')}>Sort by Name</button>
            <button onClick={() => onSort('position')}>Sort by position</button>
          </div>
        </div>
        <div className="card-container">
          {contactList.map((contact, index) => (
            <BusinessCard key={index} contact={contact} />
          )) }
        </div>
      </div>
    </>
  );
}

export default App;

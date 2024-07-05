import './App.css';
import { useState,useEffect } from 'react';
import Header from './Header.js';
import Keeper from './Keeper.js';
import Footer from './Footer.js';
import Createarea from './Createarea.js';
function App() {
  const [notes, setNotes] = useState(() => {
    // Retrieve notes from localStorage, or return an empty array if none are found
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  useEffect(() => {
    // Save notes to localStorage whenever the notes array changes
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }
  function deletenote(id){
    setNotes(prevNotes=>{
      return prevNotes.filter((noteItem,index)=>{
            return index !== id;
      })
    })
  }
  return (
    <div className="App">
      <Header />
      <Createarea onAdd={addNote} />
      {notes.map((noteItem, index) => (
        <Keeper key={index} id={index}
         title={noteItem.part1}
          content={noteItem.part2}
          onDelete={deletenote}
          />
      ))}
      <Footer />
    </div>
  );
}
export default App;

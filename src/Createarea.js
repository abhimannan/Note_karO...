import React, { useState } from 'react';
import styles from './Createarea.module.css';

const Createarea = (props) => {
  const [note, setNote] = useState({
    part1: "",
    part2: ""
  });

  function handlechange(event) {
    const { name, value } = event.target;

    setNote(prevnote => {
      return {
        ...prevnote,
        [name]: value 
      }
    });
  }
 function submitNote(event){
    props.onAdd(note);
    setNote({
      part1: "",
      part2: ""
    });
  event.preventDefault();
 }
  return (
    <div className={styles.design}>
      <input 
        type="text" 
        name="part1"
        value={note.part1} 
        onChange={handlechange} 
        placeholder="Title" 
        className={styles.input}
      />
      <textarea 
        name="part2"
        onChange={handlechange}
        value={note.part2} 
        placeholder="Take a Note..." 
        rows="3"
        className={styles.textarea}
      />
      <button onClick={submitNote} className={styles.button}>Add</button>
    </div>
  );
}

export default Createarea;

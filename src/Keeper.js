import React from 'react'
import styles from './Keeper.module.css';
const Keeper = (props) => {
 function handledelete(){
   props.onDelete(props.id);
 }
 return (
  <div className={styles.note}>
   <h2>{props.title}</h2>
   <p>{props.content}</p>
   <button onClick={handledelete} className={styles.button}>Delete</button>
  </div>
 );
}

export default Keeper
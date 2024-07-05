import React from 'react'
import styles from './Footer.module.css';

const Footer = () => {
 const date = new Date();
 const year = date.getFullYear();
 return (
  <div className={styles.container}>
   <p className={styles.footer}>Copyright © {year}</p>

  </div>
 )
}
export default Footer;
import React from 'react';
import styles from './header.module.css'
const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.headerName}>Madison</h1>
            <p className={styles.headerName}>오늘은 어떤 옷을 입어야 할까?</p>
        </div>
    )
}

export default Header;
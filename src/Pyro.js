import React, { Component } from 'react';
import styles from './pyro.css';

class Pyro extends Component {
    state={
            matchesFound: this.props.matchesFound,
    };

    render(props) {
        return(
            <div 
            className={styles.pyro}
            id="pyro"
            style={{
                zIndex: 0,
                display: 'block',
                width: '100%',
                height: '100vh',
                position: 'fixed',
                top: 0
            }}>
                <div className={styles.before}></div>
                <div className={styles.after}></div>
            </div>
        )
    }
}

export default Pyro;
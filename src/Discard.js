import React, { Component } from 'react';
import styles from './card.css';
import Ace1 from './media/Ace1.png';
import King1 from './media/King1.png';
import Queen1 from './media/Queen1.png';
import Jack1 from './media/Jack1.png';
import Ten1 from './media/Ten1.png';
import Nine1 from './media/Nine1.png';
import Eight1 from './media/Eight1.png';
import Seven1 from './media/Seven1.png';
import Six1 from './media/Six1.png';
import Five1 from './media/Five1.png';

class Discard extends Component {

    render(props) {
        return(
            <div  id="discard" style={{ height: '10vh' }}>
                    <div className={styles.discardHolder}>
                    <img style={{ visibility: 'hidden' }}
                    src={Ace1}
                    alt=''
                    className={styles.discarded}
                    id='aceDiscarded'
                    />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Five1}
                    alt=''
                    className={styles.discarded}
                    id='fivDiscarded'
                    />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Six1}
                    alt=''
                    className={styles.discarded}
                    id='sixDiscarded'
                    />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Seven1}
                    alt=''
                    className={styles.discarded}
                    id='sevDiscarded'
                    />
                />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Eight1}
                    alt=''
                    className={styles.discarded}
                    id='eigDiscarded'
                    />
                />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Nine1}
                    alt=''
                    className={styles.discarded}
                    id='ninDiscarded'
                    />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Ten1}
                    alt=''
                    className={styles.discarded}
                    id='tenDiscarded'
                    />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Jack1}
                    alt=''
                    className={styles.discarded}
                    id='jacDiscarded'
                    />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={Queen1}
                    alt=''
                    className={styles.discarded}
                    id='queDiscarded'
                    />
                />
                </div>
                <div className={styles.discardHolder}>
                <img style={{ visibility: 'hidden' }}
                    src={King1}
                    alt=''
                    className={styles.discarded}
                    id='kinDiscarded'
                    />
                </div>

            </div>
        )
    }
}

export default Discard;
import React, { Component } from 'react';
import './card.css';
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
                    <div className="discardHolder">
                    <img style={{ visibility: 'hidden' }}
                    src={Ace1}
                    alt=''
                    className='discarded'
                    id='game/static/media/AceDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Five1}
                    alt=''
                    className='discarded'
                    id='game/static/media/FiveDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Six1}
                    alt=''
                    className='discarded'
                    id='game/static/media/SixDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Seven1}
                    alt=''
                    className='discarded'
                    id='game/static/media/SevenDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Eight1}
                    alt=''
                    className='discarded'
                    id='game/static/media/EightDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Nine1}
                    alt=''
                    className='discarded'
                    id='game/static/media/NineDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Ten1}
                    alt=''
                    className='discarded'
                    id='game/static/media/TenDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Jack1}
                    alt=''
                    className='discarded'
                    id='game/static/media/JackDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={Queen1}
                    alt=''
                    className='discarded'
                    id='game/static/media/QueenDiscarded'
                />
                </div>
                <div className="discardHolder">
                <img style={{ visibility: 'hidden' }}
                    src={King1}
                    alt=''
                    className='discarded'
                    id='game/static/media/KingDiscarded'
                />
                </div>

            </div>
        )
    }
}

export default Discard;
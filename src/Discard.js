import React, { Component } from "react";
import styles from "./card.css";
import Ace1 from "./media/Ace1.png";
import King1 from "./media/King1.png";
import Queen1 from "./media/Queen1.png";
import Jack1 from "./media/Jack1.png";
import Ten1 from "./media/Ten1.png";
import Nine1 from "./media/Nine1.png";
import Eight1 from "./media/Eight1.png";
import Seven1 from "./media/Seven1.png";
import Six1 from "./media/Six1.png";
import Five1 from "./media/Five1.png";

class Discard extends Component {
  render(props) {
    return (
      <div id="discard" className={styles.discardRow}>
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Ace1}
          alt=""
          className={styles.discarded}
          id="aceDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Five1}
          alt=""
          className={styles.discarded}
          id="fivDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Six1}
          alt=""
          className={styles.discarded}
          id="sixDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Seven1}
          alt=""
          className={styles.discarded}
          id="sevDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Eight1}
          alt=""
          className={styles.discarded}
          id="eigDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Nine1}
          alt=""
          className={styles.discarded}
          id="ninDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Ten1}
          alt=""
          className={styles.discarded}
          id="tenDiscarded"
        />
        <img
          style={{ visibility: "hidden", float: "none !important" }}
          src={Jack1}
          alt=""
          className={styles.discarded}
          id="jacDiscarded"
        />
        <img
          style={{ visibility: "hidden" }}
          src={Queen1}
          alt=""
          className={styles.discarded}
          id="queDiscarded"
        />
        <img
          style={{ visibility: "hidden" }}
          src={King1}
          alt=""
          className={styles.discarded}
          id="kinDiscarded"
        />
      </div>
    );
  }
}

export default Discard;

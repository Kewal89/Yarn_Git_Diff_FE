import React from "react"
import { observer } from "mobx-react"
import styles from "./Header.module.css"
import ProPic from "../../assets/ProPic.svg"

const Header = () => {
  return <header className={styles.HeaderContainer}>
    <div className={styles.LeftContainer}>
      <div className={styles.ProfileSection}>
        <img src={ProPic} alt="Profile Pic" width={51} height={51} />
      </div>
      <div className={styles.InfoSection}>

      </div>
    </div>
    <div className={styles.RightContainer}>

    </div>
  </header>
}

export default observer(Header)

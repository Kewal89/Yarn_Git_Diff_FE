import React from "react"
import { observer } from "mobx-react"
import styles from "./Header.module.css"
import ProPic from "../../assets/ProPic.svg"
import AppStore from "../../Stores/AppStore"
import { formatTimeDifference } from "../Common/CommonFunctions"
import { toJS } from "mobx"

const Header = () => {
  const data = toJS(AppStore.userInfo)
  console.info("Data :", data)

  return (
    <header className={styles.HeaderContainer}>
      {Object.keys(data).length > 0 && (
        <>
          <div className={styles.LeftContainer}>
            <div className={styles.ProfileSection}>
              <img src={data.author.avatar ?? ProPic} alt="Profile Pic" width={51} height={51} />
            </div>
            <div className={styles.InfoSection}>
              <div className={styles.Message}>{data.message}</div>
              <div className={styles.Author}>
                {"Authored by"}
                <span>{data.author.username ?? data.author.name}</span>
                {formatTimeDifference(data.author.date)}
              </div>
              <div className={styles.ExtraInfo}>{"This is body text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ipsum massa egestas id pellentesque volutpat maecenas amet."}</div>
            </div>
          </div>
          <div className={styles.RightContainer}>
            {data.author.name !== data.committer.name && (
              <div className={styles.CommitedBy}>
                {"Commited by"}
                <span>{data.committer.name}</span>
                {formatTimeDifference(data.committer.date)}
              </div>
            )}
            <div className={styles.Commit}>
              {"Commit "}
              <span>{data.oid}</span>
            </div>
            <div className={styles.Parent}>
              {"Parent "}
              <span>{data.pid}</span>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

export default observer(Header)

import React from "react"
import { observer } from "mobx-react"
import styles from "./Main.module.css"

const Main = (props: any) => {
  const { children } = props
  return (
    <>
      <main className={styles.MainContainer}>{children}</main>
    </>
  )
}

export default observer(Main)

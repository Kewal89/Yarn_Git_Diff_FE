import { observer } from "mobx-react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import AppStore from "../../Stores/AppStore"
import styles from "./Main.module.css"

// const oid = `03a7ab5ce162cb1b27d2e46714188286e6c9aa3f`
// const owner = `Kewal89`
// const repoName = `multiselect-pure-js`

const Main = (props: any) => {
  const { children } = props

  const { owner, repoName, commitId } = useParams()

  useEffect(() => {
    getCommitById()
    getDiffOfCommit()
  }, [])

  const getCommitById = async () => {
    fetch(`http://localhost:5000/repositories/${owner}/${repoName}/commits/${commitId}`)
      .then((res) => res.json())
      .then((result) => {
        AppStore.setUserInfo(result[0])
      })
      .catch((err) => {
        AppStore.setUserInfo({})
      })
  }

  const getDiffOfCommit = async () => {
    fetch(`http://localhost:5000/repositories/${owner}/${repoName}/commits/${commitId}/diff`)
      .then((res) => res.json())
      .then((result) => {
        AppStore.setCommitInfo(result)
      })
      .catch((err) => {
        AppStore.setCommitInfo([])
      })
  }

  return (
    <>
      <main className={styles.MainContainer}>
        <div className={styles.MainChildren}>{children}</div>
      </main>
    </>
  )
}

export default observer(Main)

import React, { useEffect, useState } from "react"
import { observer } from "mobx-react"
import AppStore from "../../Stores/AppStore"
import styles from "./Difference.module.css"
import { toJS } from "mobx"
import Chevron from "../../assets/Chevron.svg"

const CodeDiffComponent = ({ changes }: any) => {
  const [expandedFiles, setExpandedFiles] = useState<any>([])

  useEffect(() => {
    if (expandedFiles.length === 0 && changes.length !== 0) setExpandedFiles(changes.map((change: any) => change.headFile.path))
  }, [changes])

  const toggleFile = (filePath: any) => {
    if (expandedFiles.includes(filePath)) {
      setExpandedFiles(expandedFiles.filter((file: any) => file !== filePath))
    } else {
      setExpandedFiles([...expandedFiles, filePath])
    }
  }

  return (
    <div className={styles.CodeContainer}>
      {changes.length > 0 && (
        <>
          {changes.map((change: any, index: number) => {
            const isExpanded = expandedFiles.includes(change.headFile.path)
            return (
              <div key={`CodeDiff_${index}`} className={styles.ListItem}>
                <div className={`${styles.FileNameWrapper} ${isExpanded ? styles.Expanded : ""}`} onClick={() => toggleFile(change.headFile.path)}>
                  <img src={Chevron} alt="Expand" width={20} height={20} />

                  <h2 className={styles.FileName}>{change.headFile.path}</h2>
                </div>
                {isExpanded && (
                  <div className={styles.DifferenceContainer}>
                    {change.hunks.map((hunk: any, hunkIndex: number) => (
                      <div key={`Hunk_${hunkIndex}`} className={styles.HunkItem}>
                        <div className={styles.HunkHeader}>{hunk.header}</div>
                        <div className={styles.HunkLineContainer}>
                          {hunk.lines.map((line: any, lineIndex: number) => {
                            const isRed = lineIndex + 1 < hunk.lines.length ? line.headLineNumber === hunk.lines[lineIndex + 1].headLineNumber : false
                            const isGreen = lineIndex + 1 < hunk.lines.length ? line.baseLineNumber === hunk.lines[lineIndex + 1].baseLineNumber : false
                            return (
                              <div key={lineIndex} className={styles.HunkLineItem} style={{ backgroundColor: isRed ? "#FFE4E9" : isGreen ? "#D8FFCB" : "#fff" }}>
                                {<span className={`${styles.LineNumber} ${isRed || isGreen ? "" : styles.BaseLine}`}>{!isGreen ? `${line.baseLineNumber}` : ""}</span>}
                                {<span className={`${styles.LineNumber} ${isRed || isGreen ? "" : styles.HeadLine}`}>{!isRed ? `${line.headLineNumber}` : ""}</span>}
                                <span className={styles.LineContent}>{line.content}</span>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </>
      )}
    </div>
  )
}

const Difference = () => {
  return <CodeDiffComponent changes={toJS(AppStore.commitInfo)} />
}

export default observer(Difference)

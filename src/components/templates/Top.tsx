import React from 'react'
import {ArticleList} from 'src/components/oraganisms/ArticleList'
import styles from 'src/styles/Top.module.scss'

export const Top = () => (
  <div className={styles.top}>
    <h2 className={styles.topSectionTitle}>
      特集記事
    </h2>
    <ArticleList />
    <h2 className={styles.topSectionTitle}>
      今日の注目記事
    </h2>
    <ArticleList />
  </div>
)

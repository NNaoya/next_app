import React from 'react'
import {Image} from '../atoms/Image'
import styles from 'src/styles/ArticleItem.module.scss'

export const ArticleItem = ({imageUrl}: {imageUrl: string}) => (
  <div className={styles.articleItem}>
    <Image imageUrl={imageUrl} />
    <p>船の上のマジシャン</p>
    <time>2020/12/14</time>
  </div>
)

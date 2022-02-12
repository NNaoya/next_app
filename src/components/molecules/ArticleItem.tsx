import React from 'react'
import {Image} from '../atoms/Image'
import styles from 'src/styles/ArticleItem.module.scss'

export const ArticleItem = ({imageUrl, title, publishAt}: {imageUrl: string, title: string, publishAt: string}) => (
  <div className={styles.articleItem}>
    <Image imageUrl={imageUrl} />
    <p>{title}</p>
    <time>{publishAt}</time>
  </div>
)

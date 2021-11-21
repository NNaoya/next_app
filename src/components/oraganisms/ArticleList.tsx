import React from 'react'
import {ArticleItem} from 'src/components/molecules/ArticleItem'
import styles from 'src/styles/ArticleList.module.scss'

export const ArticleList = () => (
  <div className={styles.articleList}>
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
    <ArticleItem imageUrl={require('public/eyecatch_v2_book-ux-writing2.jpeg')} />
  </div>
)


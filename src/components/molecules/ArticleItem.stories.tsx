import React from 'react'
import {ArticleItem} from './ArticleItem'
import imageFile from '/public/eyecatch_v2_book-ux-writing2.jpeg';

export default {
  title: "Molecules"
}

export const articleItem = () => <ArticleItem imageUrl={imageFile} />

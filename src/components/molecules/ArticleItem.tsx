import React from 'react'
import {Image} from '../atoms/Image'

export const ArticleItem = ({imageUrl}: {imageUrl: string}) => (
  <div>
    <Image imageUrl={imageUrl} />
    <p>test</p>
    <time>2020/12/14</time>
  </div>
)

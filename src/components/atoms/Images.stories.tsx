import React from 'react'
import {Image} from './Image'
import imageFile from '/public/eyecatch_v2_book-ux-writing2.jpeg';

export default {
  title: "Atoms"
}

export const image = () => <Image imageUrl={imageFile} />

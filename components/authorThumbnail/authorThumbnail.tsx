import React from 'react'
import styles from './authorThumbnail.module.scss'
import Image from 'next/image'

interface Props {
  imageUrl: string
  imageAlt: string
  authorName: string
}

const AuthorThumbnail = ({ imageUrl, imageAlt, authorName }: Props) => {
  return (
    <div className={ styles['author-thumbnail'] }>
      <div className={ styles['author-thumbnail__image'] }>
        <Image src={ imageUrl } alt={ imageAlt } fill/>
      </div>
      <h4 className={ styles['author-thumbnail__name'] }>{ authorName }</h4>
    </div>
  )
}

export default AuthorThumbnail
import React from 'react'
import styles from './blogPreviewSmall.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Routes } from '../../utils/routes'

const BlogPreviewSmall = ({ blog }: any) => {
  const { id, creationDate, title, description, imageUrl } = blog;

  return (
    <Link href={`${Routes.BLOG}/${id}`} className={styles['preview-small']}>
      <div className={styles['preview-small__image']}>
        <Image src={imageUrl} alt="" fill/>
      </div>
      <div className={styles['preview-small__content']}>
        <p className={styles['preview-small__content-date']}>{creationDate}</p>
        <h4 className={styles['preview-small__content-title']}>{title}</h4>
        <p className={styles['preview-small__content-description']}>{description}</p>
      </div>
    </Link>
  )
}

export default BlogPreviewSmall
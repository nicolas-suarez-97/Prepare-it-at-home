import React from 'react';
import styles from './blogPreviewBig.module.scss';
import Image from 'next/image'
import Link from 'next/link'
import { Routes } from '../../utils/routes'

const BlogPreviewBig = ({blog}: any) => {
  const { id, creationDate, title, description, imageUrl } = blog;

  return (
    <Link href={`${Routes.BLOG}/${id}`} className={styles['preview-big']}>
      <div className={styles['preview-big__image']} >
        <Image src={imageUrl} alt="" fill/>
      </div>
      <div className={styles['preview-big__content']}>
        <p className={styles['preview-big__content-date']}>{new Date(creationDate).toDateString()}</p>
        <h4 className={styles['preview-big__content-title']}>{title}</h4>
        <p className={styles['preview-big__content-description']}>{description}</p>
      </div>
    </Link>
  );
}

export default BlogPreviewBig;
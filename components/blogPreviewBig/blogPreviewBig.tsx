import React from 'react';
import styles from './blogPreviewBig.module.scss';
import Image from 'next/image'

const BlogPreviewBig = ({blog}: any) => {
  return (
    <div className={styles['preview-big']}>
      <div className={styles['preview-big__image']} >
        <Image src={blog.imageUrl} alt="" fill/>
      </div>
      <div className={styles['preview-big__content']}>
        <p className={styles['preview-big__content-date']}>{blog.creationDate}</p>
        <h4 className={styles['preview-big__content-title']}>{blog.title}</h4>
        <p className={styles['preview-big__content-description']}>{blog.description}</p>
      </div>
    </div>
  );
}

export default BlogPreviewBig;
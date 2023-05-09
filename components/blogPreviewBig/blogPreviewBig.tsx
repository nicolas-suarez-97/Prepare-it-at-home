import React from 'react';
import styles from './blogPreviewBig.module.scss';

const BlogPreviewBig = ({blog}: any) => {
  return (
    <div className={styles['preview-big']}>
      <img className={styles['preview-big__image']}  src={blog.imageUrl} alt=""/>
      <div>
        <p>{blog.title}</p>
        <h4></h4>
        <p></p>
      </div>
    </div>
  );
}

export default BlogPreviewBig;
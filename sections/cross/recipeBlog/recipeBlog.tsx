import React from 'react';
import styles from './recipeBlog.module.scss';
import { BlogPreviewBig, BlogPreviewSmall, Button } from '../../../components'
import { ButtonLayout } from '../../../types/ButtonType'

const RecipeBlog = ({blogs}: any) => {
  return(
    <section className={styles['recipe']}>
      <div className={styles['recipe__header']}>
        <h2>Blogs de Recetas</h2>
        <Button
          label={'Ver Más'}
          url={'/'}
          layout={ButtonLayout.PRIMARY}
          newPage={false}
          className={styles['container__button']}
        />
      </div>
      <div className={styles['recipe__content']}>
        <div>
          <BlogPreviewBig blog={blogs[0]}/>
        </div>
        <div>
          {blogs.map((b: any, index: number) => index !== 0 && (
            <BlogPreviewSmall blog={b} key={index}/>
          ))}
        </div>
      </div>
    </section>
  );
}

export default RecipeBlog;

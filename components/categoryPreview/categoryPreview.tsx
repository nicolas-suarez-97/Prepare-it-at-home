import React from 'react'
import styles from './categoryPreview.module.scss'
import Image from 'next/image'
import { CategoryPreviewType } from '../../types'
import Link from 'next/link'

const CategoryPreview = (category: CategoryPreviewType) => {
  const { label, imageUrl, categoryUrl } = category
  return (
    <Link href={ categoryUrl }>
      <div className={styles['category']}>
        <Image
          src={ imageUrl }
          alt={ label }
          height={80}
          width={80}
          className={styles['category__image']}
        />
        <p className={styles['category__label']}>{label}</p>
      </div>
    </Link>
  )
}

export default CategoryPreview
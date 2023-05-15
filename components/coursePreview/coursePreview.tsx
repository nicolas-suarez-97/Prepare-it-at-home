import React from 'react'
import styles from './coursePreview.module.scss'
import { CourseType } from '../../types'
import Link from 'next/link'
import { Routes } from '../../utils/routes'
import Image from 'next/image'

interface Props {
  course: CourseType
}

const CoursePreview = ({course}: Props) => {
  const { id, creationDate, description, banner } = course;
  return (
    <Link href={`${Routes.COURSES}/${id}`} className={styles['course-preview']} target="_blank">
      <div className={styles['course-preview__image']}>
        <Image src={banner.backgroundImage} alt={banner.title} fill />
      </div>
      <p className={styles['course-preview__date']}>{new Date(creationDate).toLocaleDateString()}</p>
      <h5 className={styles['course-preview__title']}>{banner.title}</h5>
      <p className={styles['course-preview__description']}>{description}</p>
    </Link>
  );
}

export default CoursePreview;
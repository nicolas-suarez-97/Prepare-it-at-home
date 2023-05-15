import React from 'react'
import { Layout } from '../../sections'
import styles from './courses.module.scss'
import { CoursePreview } from '../../components'
import { CourseType } from '../../types'
import { getAllCourses } from '../../services/landing/courseProvider'

const Courses = ({courses}: any) => {

  return (
    <Layout>
      <section className={ styles['courses'] }>
        <h1 className={ styles['courses__title'] }>Cursos de Cocina</h1>
        <div className={ styles['courses__content'] }>
          { courses.map((course, index) => (
            <CoursePreview course={course} key={index} />
          )) }
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const courses: CourseType[] = await getAllCourses()

  return { props: { courses } }
}

export default Courses
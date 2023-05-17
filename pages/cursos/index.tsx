import React from 'react'
import { Layout } from '../../sections'
import styles from './courses.module.scss'
import { CoursePreview, Separator, TitleComponent } from '../../components'
import { CourseType } from '../../types'
import { getAllCourses } from '../../services/landing/courseProvider'

interface Props {
  courses: CourseType[]
}

const Courses = ({courses}: Props) => {

  return (
    <Layout>
      <section className={ styles['courses'] }>
        <TitleComponent title='Cursos de Cocina' align={'center'} />
        <Separator alignment={'center'}/>
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
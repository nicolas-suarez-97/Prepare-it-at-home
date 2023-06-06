import React from 'react'
import { Layout } from '../../sections'
import styles from './courses.module.scss'
import { CoursePreview, Separator, TitleComponent } from '../../components'
import { CourseType } from '../../types'
import { getAllCourses } from '../../services/landing/courseProvider'
import { Constants } from '../../utils/constants'

interface Props {
  courses: CourseType[]
}

const Courses = ({courses}: Props) => {

  return (
    <Layout
      title='Cursos de Cocina'
      description='Encuentra los mejores cursos de cocina.'
    >
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

  return { props: { courses }, revalidate: Constants.TIME_REGENERATION_DAY }
}

export default Courses
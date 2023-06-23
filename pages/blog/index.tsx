import React from 'react'
import styles from './blog.module.scss'
import { Layout } from '../../sections'
import { RecipeBlog } from '../../sections/cross'
import { BlogPreviewSmall, Separator, TitleComponent } from '../../components'
import { getAllBlogs } from '../../services/blog/blogService'
import { Constants } from '../../utils/constants'

const Blog = ({blogs}: any) => {
  console.log(blogs)
  return (
    <Layout
      title='Artículos de Cocina'
      description='Encuentra los mejores artículos de cocina y tips de cocina.'
    >
      <section className={ styles['blogs'] } >
        <TitleComponent title="Blogs de Cocina" align={ 'center' }/>
        <Separator alignment={ 'center' }/>
        <RecipeBlog blogs={ blogs } mainPage={ true }/>
        <Separator alignment={ 'center' }/>
        <div className={ styles['blogs__content'] }>
          { blogs.map((blog: any, index: number) => index >= 4 && (
            <BlogPreviewSmall blog={ blog } key={ index }/>
          )) }
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs()

  return { props: { blogs }, revalidate: Constants.TIME_REGENERATION_DAY }
}

export default Blog
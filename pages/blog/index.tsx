import React from 'react'
import styles from './blog.module.scss'
import { Layout } from '../../sections'
import { RecipeBlog } from '../../sections/cross'
import { BlogPreviewSmall, Separator, TitleComponent } from '../../components'
import { getAllBlogs } from '../../services/blog/blogService'

const Blog = ({blogs}: any) => {
  return (
    <Layout>
      <section className={ styles['blogs'] } >
        <TitleComponent title="Blogs de Cocina" align={ 'center' }/>
        <Separator alignment={ 'center' }/>
        <RecipeBlog blogs={ blogs } mainPage={ true }/>
        <Separator alignment={ 'center' }/>
        <div className={ styles['blogs__content'] }>
          { blogs.map((blog: any, index: number) => index > 4 && (
            <BlogPreviewSmall blog={ blog } key={ index }/>
          )) }
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const blogs = await getAllBlogs()

  return { props: { blogs } }
}

export default Blog
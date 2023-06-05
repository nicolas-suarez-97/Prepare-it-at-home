import React from 'react'
import styles from './blogDetail.module.scss'
import { Layout } from '../../../sections'
import Image from 'next/image'
import { AuthorThumbnail, PillComponent, Separator, TitleComponent } from '../../../components'
import { getAllBlogs, getBlog } from '../../../services/blog/blogService'

const BlogDetail = ({ blog }: any) => {
  const { author } = blog

  return (
    <Layout>
      <div className={ styles['blog'] }>
        <section className={ styles['blog__hero'] }>
          <div className={ styles['blog__hero-content'] }>
            <p className={ styles['blog__date'] }>{ blog.creationDate }</p>
            <TitleComponent title={blog.title} />
            <PillComponent label={blog.category} fill fillType={'secondary'} />
            <Separator />
            <AuthorThumbnail authorName={ author.name } imageAlt={ author.imageAlt } imageUrl={ author.imageUrl }/>
          </div>
          <div className={ styles['blog__main-image'] }>
            <Image src={ blog.imageUrl } alt={ blog.imageAlt } fill/>
          </div>
        </section>
        <div dangerouslySetInnerHTML={{__html: blog.content}} className={ styles['blog__content'] } />
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {
  const blog = await getBlog({id: params.blogId})

  return { props: { blog } }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();

  const paths = blogs.map((blog: any) => ({
    params: { blogId: blog.id }
  }))

  return { paths, fallback: false }
}

export default BlogDetail
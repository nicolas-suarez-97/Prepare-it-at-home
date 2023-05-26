import React from 'react'
import styles from './blogDetail.module.scss'
import { Layout } from '../../../sections'
import Image from 'next/image'
import { AuthorThumbnail, PillComponent, Separator } from '../../../components'

const BlogDetail = () => {
  const blog = {
    author: {
      name: 'Diego Herrera',
      imageAlt: 'test',
      imageUrl: '/img/cocteleriaDeAutor/luis-alberto-silva.jpg'
    },
    creationDate: 'November 16, 2018',
    title: 'Our recipes blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    imageAlt: 'test',
    content: '',
    category: 'Recipe'
  }

  const { author } = blog

  return (
    <Layout>
      <div className={ styles['blog'] }>
        <section className={ styles['blog__hero'] }>
          <div>
            <p className={ styles['blog__date'] }>{ blog.creationDate }</p>
            <h1 className={ styles['blog__title'] }>{ blog.title }</h1>
            <PillComponent label={blog.category} fill fillType={'secondary'} />
            <Separator />
            <AuthorThumbnail authorName={ author.name } imageAlt={ author.imageAlt } imageUrl={ author.imageUrl }/>
          </div>
          <div className={ styles['blog__main-image'] }>
            <Image src={ blog.imageUrl } alt={ blog.imageAlt } fill/>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export async function getStaticProps({ params }: any) {

  return { props: {} }
}

export async function getStaticPaths() {

  return { paths: [ { params: { blogId: 'our-recipes-blog' } } ], fallback: false }
}

export default BlogDetail
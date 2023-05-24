import React from 'react'
import styles from './blog.module.scss'
import { Layout } from '../../sections'
import { RecipeBlog } from '../../sections/cross'
import { BlogPreviewSmall, Separator, TitleComponent } from '../../components'

const Blog = () => {
  const blogs = [
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
    {
      imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
      creationDate: 'November 16, 2018',
      title: 'Our recipes blog',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
      path: 'our-recipes-blog',
    },
  ]

  return (
    <Layout>
      <section className={ styles['blogs'] } >
        <TitleComponent title="Blogs de Cocina" align={ 'center' }/>
        <Separator alignment={ 'center' }/>
        <RecipeBlog blogs={ blogs } mainPage={ true }/>
        <Separator alignment={ 'center' }/>
        <div className={ styles['blogs__content'] }>
          { blogs.map((blog, index) => index > 4 && (
            <BlogPreviewSmall blog={ blog } key={ index }/>
          )) }
        </div>
      </section>
    </Layout>
  )
}

export default Blog
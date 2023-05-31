import React from 'react'
import styles from './blogDetail.module.scss'
import { Layout } from '../../../sections'
import Image from 'next/image'
import { AuthorThumbnail, PillComponent, Separator, TitleComponent } from '../../../components'

const BlogDetail = () => {
  const blog = {
    author: {
      name: 'Diego Herrera',
      imageAlt: 'test',
      imageUrl: '/img/cocteleriaDeAutor/luis-alberto-silva.jpg'
    },
    creationDate: 'November 16, 2018',
    title: 'Our recipes blog Our recipes blog',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
    imageUrl: 'https://cdn.discordapp.com/attachments/1008571037862080542/1089750815582994463/Nicolas_Suarez_plato_elegante_con_receta_de_alitas_y_una_salsa__78f0b7e1-84b0-4992-8600-19762025121f.png',
    imageAlt: 'test',
    content: 'El día había comenzado como cualquier otro, con prisas y un sinfín de tareas esperándome en la oficina. Los minutos pasaban rápidamente y el reloj parecía acelerarse mientras mi estómago recordaba con insistencia que era hora de comer. Pero, como tantas veces antes, me encontraba atrapado en el dilema de no tener tiempo suficiente para preparar una comida adecuada.' +
      '<br/><br/>' +
      'El miedo a cocinar siempre me había perseguido. La idea de pasar horas en la cocina, ensuciando cada utensilio imaginable y sin tener idea de qué ingredientes comprar era suficiente para hacerme renunciar a cualquier intento de preparar algo más allá de una simple tostada. La cocina se presentaba ante mí como un territorio desconocido, un laberinto de ollas y sartenes que parecían susurrar con malicia: "¡No te atrevas a intentarlo!".' +
      '<br/><br/>' +
      'Sin embargo, ese miedo y esa incertidumbre fueron los mismos que me llevaron a buscar cursos, blogs y videos que me ayudaran a superar este miedo. Así, me propuse revelar cómo la cocina puede ser fácil, incluso en los días más atareados. Me quise demostrar que preparar una comida deliciosa y nutritiva no tiene por qué ser una tarea abrumadora, sino que puede ser gratificante y hasta divertida.',
    category: 'Recipe'
  }

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

  return { props: {} }
}

export async function getStaticPaths() {

  return { paths: [ { params: { blogId: 'our-recipes-blog' } } ], fallback: false }
}

export default BlogDetail
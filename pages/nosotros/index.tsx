import React from 'react'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'
import styles from './us.module.scss'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <Layout>
      <TitleComponent title="Sobre Nosotros" align={'center'} />
      <Separator alignment={'center'}/>
      <div className={styles['us__content']}>
        <p>
          <span>Preparalo en Casa</span> es tu destino culinario en línea. Estamos apasionados por la cocina y queremos
          compartir esa pasión contigo. Nuestra misión es proporcionarte
          recetas deliciosas, blogs informativos y emocionantes cursos de cocina que te ayudarán a explorar, aprender y
          disfrutar del mundo de la gastronomía. Nuestro equipo está formado por amantes de la cocina, chefs
          experimentados y entusiastas de la comida que trabajan incansablemente para ofrecerte lo mejor en el mundo
          culinario. Únete a nosotros en este viaje culinario y descubre un mundo de sabores, creatividad y conocimiento.
        </p>
      </div>
      <div className={ styles['us__image'] }>
        <Image src={ '/img/undraw_team.svg' } alt={ 'Equipo' } fill/>
      </div>
    </Layout>
  );
}

export default AboutUs;
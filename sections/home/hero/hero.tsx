import React from 'react'
import { ButtonLayout } from '../../../types/ButtonType'
import { Button } from '../../../components'
import styles from './hero.module.scss';

const Hero = () => {
  return (
    <section className={styles['hero']}>
      <div className={styles['hero__content']}>
        <h1 className={styles['hero__title']}>Descubre un mundo de sabores con nuestras recetas y cursos de cocina</h1>
        <p className={styles['hero__subtitle']}>
          Encontrarás todo lo que necesitas para convertirte en un experto culinario. Desde deliciosas recetas para todas las ocasiones, hasta cursos y tutoriales para perfeccionar tus habilidades en la cocina, tenemos todo lo necesario para que puedas impresionar a tus amigos y familiares con tus habilidades culinarias.
        </p>
        <div className={styles['hero__buttons']}>
          <Button
            url={ '/' }
            label={ 'Explorar Recetas' }
            layout={ ButtonLayout.PRIMARY }
            newPage={ false }
          />
          <Button
            url={ '/' }
            label={ 'Ver Cursos' }
            layout={ ButtonLayout.UNDERLINE }
            newPage={ false }
            sufixIcon={'chevron_right'}
          />
        </div>
      </div>
      <div className={styles['hero__image']}>
        <img
          src="img/plato-con-comida.png"
          alt=""
        />
      </div>
    </section>
  )
}

export default Hero
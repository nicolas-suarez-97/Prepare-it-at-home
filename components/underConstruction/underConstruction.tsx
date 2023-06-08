import React from 'react'
import styles from './underConstruction.module.scss'
import Image from 'next/image'
import { Button } from '../index'
import { Routes } from '../../utils/routes'
import { ButtonLayout } from '../../types/ButtonType'

const UnderConstruction = () => {
  return (
    <div className={ styles['under-construction'] }>
      <div className={ styles['under-construction__image'] }>
        <Image src={ '/img/undraw_cooking.svg' } alt={ 'Cocinando' } fill/>
      </div>
      <h2>Esta página está en preparación.</h2>
      <p>Te invitamos a visitar nuestra página de cursos y recetas.</p>
      <div className={ styles['under-construction__buttons'] }>
        <Button
          url={ Routes.COURSES }
          label={ 'Ver Cursos' }
          layout={ ButtonLayout.PRIMARY }
          newPage={ false }
        />
        <Button
          url={ Routes.RECIPES }
          label={ 'Explorar Recetas' }
          layout={ ButtonLayout.UNDERLINE }
          newPage={ false }
          sufixIcon={'chevron_right'}
        />
      </div>
    </div>
  )
}

export default UnderConstruction
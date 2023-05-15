import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'
import { PageType } from '../../utils/constants'
import Header from './header/header'
import Footer from './footer/footer'
import { Routes } from '../../utils/routes'

const Layout = (props: any) => {
  const headerOptions = [
    { path: Routes.HOME, label: 'Inicio' },
    { path: Routes.BLOG, label: 'Blog' },
    { path: Routes.COURSES, label: 'Cursos' },
    { path: Routes.RECIPES, label: 'Recetas' },
  ]

  const landingOptions = [
    { path: props.courseUrl, label: 'Ingreso al Curso' }
//    { path: Routes.COURSES, label: "Más Cursos"},
  ]
  const footerOptions: any = [
    // 'nosotros',
    // 'contacto',
    // 'terminos',
    // 'faq',
  ]

  return (
    <div className={ styles.container }>
      <div>
        <Header
          title="Preparalo en Casa"
          options={ props.pageType === PageType.LANDING ? landingOptions : headerOptions }
          placeholder="Buscar ..."
          pageType={ props.pageType }
        />
        <main className={ `${ styles.layout } ${ props.layoutStyle }` }>
          { props.children }
        </main>
      </div>
      <Footer
        footerOptions={ footerOptions }
      />
    </div>
  )
}

export default Layout
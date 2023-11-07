import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'
import { PageType } from '../../utils/constants'
import Header from './header/header'
import Footer from './footer/footer'
import { Routes } from '../../utils/routes'
import Metadata from './metadata/metadata'

const Layout = (props: any) => {
  const headerOptions = [
    { path: Routes.HOME, label: 'Inicio' },
    { path: Routes.BLOG, label: 'Blog' },
    { path: Routes.COURSES, label: 'Cursos' },
    { path: Routes.RECIPES, label: 'Recetas' },
  ]

  const landingOptions = [
    { path: props.courseUrl, label: 'Ingreso al Curso' },
//    { path: Routes.COURSES, label: "Más Cursos"},
  ]
  const footerOptions: any = [
    { path: Routes.ABOUT_US, label: 'Nosotros' },
//    { path: Routes.CONTACT, label: 'Contacto' },
//    { path: Routes.TERMS_AND_CONDITIONS, label: 'Terminos y Condiciones' },
    { path: Routes.FAQ, label: 'Faq' },
  ]

  return (
    <div className={ styles.container }>
      <div>
        <Metadata
          title={props.title}
          description={props.description}
          ogImage={props.ogImage}
          ogType={props.ogType}
        />
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
        pageType={ props.pageType }
      />
    </div>
  )
}

export default Layout
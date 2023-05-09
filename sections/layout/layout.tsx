import React from 'react'
import Head from 'next/head'
import styles from './layout.module.scss'
import { PageType } from '../../utils/constants'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = (props: any) => {
  const headerOptions = [
    { path: '/', label: 'Inicio' },
    { path: '/recetas', label: 'Recetas' },
    { path: '/cursos', label: 'Cursos' }
  ]

  const landingOptions = [
    { path: props.courseUrl, label: 'Ingreso al Curso' }
    //{path: "/cursos", label: "Más Cursos"},
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
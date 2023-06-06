import React from 'react'
import Link from 'next/link'
import styles from './footer.module.scss'
import Image from 'next/image'
import { PageType } from '../../../utils/constants'

const Footer = ({ footerOptions, pageType }: any) => {
  const ICONS_SIZE = 40

  return (
    <footer className={ styles.footer }>
      <ul className={ styles.footer__icons }>
        <div className={ styles['footer__icons--label'] }>
          <Image
            src="/img/logored.png"
            alt="prepare it at home"
            className={ styles['footer__icons--logo'] }
            height={ 48 }
            width={ 200 }
          />
        </div>
        <div className={ styles['footer__icons--social'] }>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/fblogo.png"
              alt="prepare it at home"
              height={ ICONS_SIZE }
              width={ ICONS_SIZE }
            />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/instalogo.png"
              alt="prepare it at home"
              height={ ICONS_SIZE }
              width={ ICONS_SIZE }
            />
          </a>
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/img/tiklogo.png"
              alt="prepare it at home"
              height={ ICONS_SIZE }
              width={ ICONS_SIZE }
            />
          </a>
        </div>
      </ul>
      <div className={ styles.divider }/>

      { pageType !== PageType.LANDING ? (
        <ul className={ styles.footer__options }>
          { footerOptions.map((i: any) => (
            <li key={ i.path }><Link href={ i.path }>{ i.label }</Link></li>
          )) }
        </ul>
      ) : (
        <p className={ styles.legal }>
          <b>Aviso legal: "</b> Este producto se comercializa con el apoyo de Hotmart. La plataforma no realiza un
          control editorial previo de los productos ofertados, ni evalúa el tecnicismo o la experiencia de
          quienes los elaboran. La existencia de un producto y su adquisición, a través de la plataforma, no
          puede considerarse garantía de calidad de contenido y resultado, en ningún caso. Al adquirirlo, el
          comprador declara conocer esta información. Puedes acceder a los términos y políticas de Hotmart <a
          href="https://hotmart.com/es/legal" target="_blank" rel="noreferrer">aquí</a>,
          incluso antes de finalizar la compra. <b>"</b>
        </p>
      )}
    </footer>
  )
}

export default Footer
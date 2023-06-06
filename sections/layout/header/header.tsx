import React from 'react'
import Link from 'next/link'
import styles from './header.module.scss'
import { PageType } from '../../../utils/constants'
import { LogoComponent, SearchBarComponent } from '../../../components'

const Header = ({ title, options, placeholder, pageType }: any) => {

  return (
    <header className={ styles.container }>
      <LogoComponent redirect={pageType !== PageType.LANDING}/>
      <ul className={ styles.container__options }>
        { options.map((o: any) => (
          <li key={ o.path }><Link href={ o.path }>{ o.label }</Link></li>
        )) }
      </ul>
      {
        pageType !== PageType.LANDING
          ? (
            <SearchBarComponent placeholder={placeholder}/>
          ) : null
      }

    </header>
  )
}

export default Header
import React, { useState } from 'react'
import styles from './searchBarComponent.module.scss'
import { IconComponent } from '../index'
import { Icons } from '../../utils/icons'
import { Routes } from '../../utils/routes'
import Router from 'next/router'

interface Props {
  placeholder: string
  searchPath?: string
}

const SearchBarComponent = ({ placeholder, searchPath = Routes.SEARCH }: Props) => {
  const [ query, setQuery ] = useState('')

  const handleSearch = (e: any) => {
    e.preventDefault()
    Router.push(`${ searchPath }?query=${ query }`)
    setQuery('')
  }

  return (
    <form onSubmit={ handleSearch } className={ styles['search-bar'] }>
      <IconComponent name={ Icons.SEARCH } onClick={handleSearch} />
      <input
        type="text"
        placeholder={ placeholder }
        value={query}
        onChange={({target}) => setQuery(target.value)}
      />
    </form>
  )
}

export default SearchBarComponent

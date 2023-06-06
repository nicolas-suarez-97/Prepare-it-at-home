import Head from 'next/head'
import {Constants} from '../../../utils/constants'

interface Props {
  title: string
  description: string
  ogType?: string
  ogImage?: string
}

const Metadata = ({
                    title,
                    description = 'Descubre un mundo de sabores con nuestras recetas y cursos de cocina.',
                    ogType = 'website',
                    ogImage = 'https://preparalo-en-casa.vercel.app/_next/image?url=%2Fimg%2Fpc_logo.png&w=256&q=75'
                  }: Props) => {

  const metadata = Object.assign({
    'og:type': ogType,
    'og:title': title,
    'og:description': description,
    'og:image': ogImage,
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:url': Constants.URL,
    'og:site_name': 'Preparalo en Casa',
    'og:locale': 'es_CO'
  })

  title = !title ? 'Preparalo en Casa' : title + ' - Preparalo en Casa'

  return (
    <>
      <Head>
        <meta charSet="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"/>
        <link rel="shortcut icon" href="/favicon.ico"/>
        <meta name="robots" content="index, follow"/>

        {/* Meta Tags */ }
        <title>{ title }</title>
        <meta name="description" content={ description }/>

        {/* Open Graph */ }
        { Object.entries(metadata).map(([ key, value ]) => {
          if (typeof value === 'string') {
            return <meta property={ key } content={ value } key={ key }/>
          }
          return null
        }) }
      </Head>
    </>
  )
}

export default Metadata
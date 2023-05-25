import React from 'react'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'

const AboutUs = () => {
  return (
    <Layout>
      <TitleComponent title="Sobre Nosotros" align={'center'} />
      <Separator alignment={'center'}/>
    </Layout>
  );
}

export default AboutUs;
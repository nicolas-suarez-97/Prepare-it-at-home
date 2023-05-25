import React from 'react'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'

const Faq = () => {
  return (
    <Layout>
      <TitleComponent title="Preguntas Frecuentes" align={'center'} />
      <Separator alignment={'center'}/>
    </Layout>
  );
}

export default Faq;
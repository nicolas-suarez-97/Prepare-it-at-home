import React from 'react'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'

const TermsAndConditions = () => {
  return (
    <Layout>
      <TitleComponent title="Términos y Condiciones" align={'center'} />
      <Separator alignment={'center'}/>
    </Layout>
  );
}

export default TermsAndConditions;
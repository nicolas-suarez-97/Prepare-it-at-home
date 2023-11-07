import React from 'react'
import { Layout } from '../../sections'
import { Separator, TitleComponent } from '../../components'
import styles from './faq.module.scss';
import { FaqSection } from '../../sections/landings'

const Faq = () => {
  const courseFaqs = {
    title: 'Cursos',
    items: [
      {
        question: "¿Tengo acceso ilimitado los cursos?",
        answer: "¡Sí! Luego de que realices la compra vas a poder acceder a las clases cuando y donde quieras. El curso es tuyo de por vida."
      },
      {
        question: "¿Cuándo inicia un curso y en qué horarios?",
        answer: "Inmediatamente luego del pago recibirás tu acceso para comenzar este curso. Podrás crear tu propia contraseña y enviaremos este respaldo a tu correo. Es un curso online que se adapta a tu ritmo, tú decide cuándo comenzar y cuándo terminar. No tiene un horarios definidos ya que todo el contenido ya está cargado para ti."
      },
      {
        question: "¿Cómo obtengo el certificado del curso?",
        answer: "Luego de que termines el curso, la plataforma te brindará automáticamente la opción para descargar el certificado."
      },
      {
        question: "¿Qué necesito para el curso?",
        answer: "Internet, un computador, tablet o celular. Pero lo más importante son las ganas de aprender."
      },
      {
        question: "¿Debo invertir en utensilios?",
        answer: "No, nuestro fin no es el que te pongas a comprar materiales o utensilios; queremos que primero aprendas y luego, decidas con conocimiento que recetas te gustarían hacer, que utensilios necesitarás, cuales tienes y cuales deberías comprar."
      },
      {
        question: "¿Envían una lista de ingredientes?",
        answer: "Todas las recetas que aprenderás contienen los ingredientes, preparación paso a paso y fichas técnicas en formato pdf para descargar."
      },
      {
        question: "¿Cómo es cada lección?",
        answer: "En cada lección encontrarás un video tutorial de la receta paso a paso, muy simple y con una duración entre 2 a 10 min. Podrás descargar el material en pdf con los ingredientes y preparación."
      }
    ]
  }

  const receipeFaqs = {
    title: 'Recetas',
    items: [
      {
        question: "¿Qué tipos de recetas de cocina puedo encontrar en este sitio web?",
        answer: "\n" +
          "En nuestro sitio web, puedes encontrar una amplia variedad de recetas de cocina, que incluyen platos de cocina internacional, recetas tradicionales, opciones vegetarianas y veganas, postres deliciosos y mucho más."
      },
      {
        question: "¿Ofrecen recetas para dietas específicas, como vegetarianas, sin gluten o veganas?",
        answer: "Sí, estamos trabajando activamente en la incorporación de recetas para dietas específicas, como vegetarianas, sin gluten y veganas. Pronto podrás encontrar una selección diversa de opciones culinarias que se adapten a tus necesidades dietéticas. ¡Mantente atento a las actualizaciones en nuestro sitio!"
      },
      {
        question: "¿Puedo descargar las recetas de cocina de forma gratuita?",
        answer: "Si, actualmente no contamos con un botón de descarga, pero puede copiar la receta sin ningún problema."
      }
    ]
  }

  return (
    <Layout>
      <TitleComponent title="Preguntas Frecuentes" align={'center'} />
      <Separator alignment={'center'}/>
      <FaqSection faq={courseFaqs} />
      <FaqSection faq={receipeFaqs} />
    </Layout>
  );
}

export default Faq;
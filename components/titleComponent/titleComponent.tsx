import styles from './titleComponent.module.scss'

interface Props {
  title: string
  align?: string
}

const TitleComponent = ({title, align}: Props) => {
  return (
    <h1 className={`${styles['title']} ${align ? styles[align] : styles['left']}`}>{title}</h1>
  );
}

export default TitleComponent;
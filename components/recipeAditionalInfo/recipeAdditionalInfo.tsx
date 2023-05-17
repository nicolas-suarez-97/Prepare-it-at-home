import React from 'react';
import { IconComponent } from '../index'
import { Icons } from '../../utils/icons'
import styles from './recipeAdditionalInfo.module.scss';

interface Props {
  time: string
  difficulty: number
  calories: string
}

const RecipeAdditionalInfo = (additionalInfo: Props) => {
  const { time, difficulty, calories } = additionalInfo;

  const getDifficultyLabel = (difficulty: number) => {
    switch (difficulty) {
      case 1:
        return 'Sencillo';
      case 2:
        return 'Medio';
      case 3:
        return 'Difícil';
      default:
        return '';
    }
  }

  return (
    <section className={styles['additional-info']}>
      <div className={styles['additional-info__time']}>
        <IconComponent name={Icons.SCHEDULE} className={styles['additional-info__time-icon']} />
        <p>{time}</p>
      </div>
      <div className={styles['additional-info__difficulty']}>
        <IconComponent name={Icons.STAR} className={styles['additional-info__difficulty-icon']} />
        <p>{getDifficultyLabel(difficulty)}</p>
      </div>
      <div className={styles['additional-info__calories']}>
        <IconComponent name={Icons.BOLT} className={styles['additional-info__calories-icon']} />
        <p>{calories}</p>
      </div>
    </section>
  );
}

export default RecipeAdditionalInfo;
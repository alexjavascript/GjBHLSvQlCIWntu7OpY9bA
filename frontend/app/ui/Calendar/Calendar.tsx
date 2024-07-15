'use client';

import { useAppSelector } from '../../hooks/useAppSelector';
import Text from '../Text/Text';
import styles from './Calendar.module.scss';

const WEEK_DAY_NAMES = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
]

const Calendar = () => {
  const { time } = useAppSelector(state => state.date)

  // let start = new Date(new Date(time).setDate(1))
  // console.log({ start })
  // const offset = start.getDay() === 0 ? 6 : start.getDay() - 1
  // start = new Date(start.setDate(start.getDate() - offset))

  // console.log({ start })

  return (
    <section className={styles.calendar}>
      <div className={styles.names}>
        {WEEK_DAY_NAMES.map((name) => <Text key={name} tag="p" display="h2">{name}</Text>)}
      </div>
      
      <div className={styles.board}>
        {(new Array(42)).fill(null).map((_, index) => {
          return (
            <div key={index} className={styles.day}></div>
          )
        })}
      </div>
    </section>
  )
}

export default Calendar
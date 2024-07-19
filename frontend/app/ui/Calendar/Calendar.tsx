'use client';

import { useAppSelector } from '../../hooks/useAppSelector';
import Text from '../Text/Text';
import styles from './Calendar.module.scss';
import classNames from 'classnames';

const NUMBER_OF_DAYS_PER_SCREEN = 42;

const WEEK_DAY_NAMES = [
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat",
  "Sun",
]

const getScreenDays = (time: number) => {
  let from = new Date(new Date(time).setDate(1))
  const offset = from.getDay() === 0 ? 6 : from.getDay() - 1
  from = new Date(from.setDate(from.getDate() - offset - 1))

  return Array.from({ length: NUMBER_OF_DAYS_PER_SCREEN }, () => {
    from = new Date(from.setDate(from.getDate() + 1));
    console.log({ currentDay: from})
    return new Date(from.getTime());
  });
}

const Calendar = () => {
  const { time } = useAppSelector(state => state.date) 

  const selectedDate = new Date(time);
  const currentDate = new Date();

  return (
    <section className={styles.calendar}>
      <div className={styles.names}>
        {WEEK_DAY_NAMES.map((name) => <Text key={name} tag="p" display="h2">{name}</Text>)}
      </div>
      
      <div className={styles.board}>
        {getScreenDays(time).map((day) => {
          return (
            <div 
              key={`${day.getMonth()}-${day.getDate()}`} 
              className={classNames(styles.day, { 
                [styles.today]: day.getMonth() === currentDate.getMonth() && day.getDate() === currentDate.getDate(), 
                [styles.inactive]: day.getMonth() !== selectedDate.getMonth(),
              })}
            >
              <Text
                className={styles.date} 
                tag="p" 
                display="p1"
              >
                {String(day.getDate())}
              </Text>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Calendar
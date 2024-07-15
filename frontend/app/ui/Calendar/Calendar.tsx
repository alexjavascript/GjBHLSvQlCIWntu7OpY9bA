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
  // if no date in search params - add 

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
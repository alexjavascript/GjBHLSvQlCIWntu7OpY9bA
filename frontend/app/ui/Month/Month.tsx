'use client'

import Button from "../Button/Button"
import Text from "../Text/Text"
import styles from './Month.module.scss'
import ChevronLeft from './../Icon/24/ChevronLeft.svg';
import ChevronRight from './../Icon/24/ChevronRight.svg';

const Month = () => {

  // @TODO 
  // Use URL Query for current date.

  return (
    <div className={styles.month}>
      <Text tag="p" display="h2">September</Text>
      <Button className={styles.prev} display="secondary" size="small">
        <ChevronLeft />
      </Button>
      <Button className={styles.next} display="secondary" size="small">
        <ChevronRight />
      </Button>
    </div>
  )
}

export default Month;

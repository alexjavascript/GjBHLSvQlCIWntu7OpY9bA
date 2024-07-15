'use client'

import Button from "../Button/Button"
import Text from "../Text/Text"
import styles from './Month.module.scss'
import ChevronLeft from './../Icon/24/ChevronLeft.svg';
import ChevronRight from './../Icon/24/ChevronRight.svg';
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import classNames from "classnames";

const DATE_URL_PARAM = 'date'

const getMonthName = new Intl.DateTimeFormat('en-EN', {
  month: 'long'
}).format

const getSearchParams = (date: Date) => new URLSearchParams({
  date: `${date.getFullYear()}-${date.getMonth() + 1}`
})

type Props = {
  className?: string;
}

const Month = (props: Props) => {
  const {className = ''} = props;

  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const updatePage = (nextParam: URLSearchParams) => {
    router.replace(`${pathname}?${nextParam.toString()}`)
  }

  const dateParam = searchParams.get(DATE_URL_PARAM) || '';
  let date;

  if (/^\d{4}-\d{1,2}$/.test(dateParam)) {
    const [year, month] = dateParam.split('-')
    
    date = new Date(+year, +month - 1)
  } else {
    date = new Date()
    
    updatePage(getSearchParams(date))
  }

  const handlePrev = () => {
    date.setMonth(date.getMonth() - 1)
    updatePage(getSearchParams(date))
  }

  const handleNext= () => {
    date.setMonth(date.getMonth() + 1)
    updatePage(getSearchParams(date))
  }

  return (
    <div className={classNames(styles.month, className)}>
      <Button display="secondary" size="small" onClick={handlePrev}>
        <ChevronLeft />
      </Button>
      <Button className={styles.next} display="secondary" size="small" onClick={handleNext}>
        <ChevronRight />
      </Button>
      <Text tag="p" display="h2" >{getMonthName(date)}</Text>
    </div>
  )
}

export default Month;

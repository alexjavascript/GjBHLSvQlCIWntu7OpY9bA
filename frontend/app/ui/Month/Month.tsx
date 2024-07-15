'use client'

import Button from "../Button/Button"
import Text from "../Text/Text"
import styles from './Month.module.scss'
import ChevronLeft from './../Icon/24/ChevronLeft.svg';
import ChevronRight from './../Icon/24/ChevronRight.svg';
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import classNames from "classnames";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { decMonth, incMonth, setTime } from "../../lib/store/slices/date";

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

  const { time } = useAppSelector((state) => state.date)
  const dispatch = useAppDispatch()
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  const updateSearchParams = (date: Date) => router.push(`${pathname}?${getSearchParams(date).toString()}`)

  useEffect(() => {
    const param = searchParams.get(DATE_URL_PARAM) || '';

    if (/^\d{4}-\d{1,2}$/.test(param)) {
      const [year, month] = param.split('-')
      const nextDate = new Date(+year, +month - 1)
      dispatch(setTime(nextDate.getTime()))
      return
    }
  }, [])

  const handlePrev = () => {
    dispatch(decMonth())
  }

  const handleNext = () => {
    dispatch(incMonth())
  }
  
  updateSearchParams(new Date(time))
  const month = getMonthName(new Date(time))

  return (
    <div className={classNames(styles.month, className)}>
      <Button display="secondary" size="small" onClick={handlePrev}>
        <ChevronLeft />
      </Button>
      <Button className={styles.next} display="secondary" size="small" onClick={handleNext}>
        <ChevronRight />
      </Button>
      <Text tag="p" display="h2">{month}</Text>
    </div>
  )
}

export default Month;

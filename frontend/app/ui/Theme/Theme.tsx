'use client'

import styles from './Theme.module.scss';
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setTheme } from "../../lib/store/slices/theme"
import Toggle from '../Toggle/Toggle';
import classNames from 'classnames';
import { useEffect } from 'react';


type Props = {
  className?: string;
}

const Theme = (props: Props) => {
  const { className } = props;
  const { mode } = useAppSelector(state => state.theme)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setTheme(window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'))
  }, [])

  const handleChange = (checked: boolean) => dispatch(setTheme(checked ? 'dark' : 'light'))

  return (
    <div className={classNames(styles.theme, className)}>
      <Toggle checked={mode === 'dark'} onChange={handleChange}>Change theme</Toggle>
    </div>
  )

}

export default Theme

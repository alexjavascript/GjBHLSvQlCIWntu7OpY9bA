'use client'

import styles from './ThemeToggler.module.scss';
import { useAppDispatch } from "../../hooks/useAppDispatch"
import { useAppSelector } from "../../hooks/useAppSelector"
import { setDarkTheme, setLightTheme, setTheme, toggleTheme } from "../../lib/store/slices/theme"

const ThemeToggler = () => {
  const { theme } = useAppSelector(state => state.theme)
  const dispatch = useAppDispatch()

  return (
    <div className={styles.div}>
      <h1>Current theme: {theme}</h1>

      <button onClick={() => dispatch(setDarkTheme())}>Set dark theme</button>
      <button onClick={() => dispatch(setLightTheme())}>Set light theme</button>
      <button onClick={() => dispatch(toggleTheme())}>Toggle theme</button>
      <button onClick={() => dispatch(setTheme(Math.random() >= 0.5 ? 'dark' : 'light'))}>Set random theme</button>
    </div>
  )
}

export default ThemeToggler

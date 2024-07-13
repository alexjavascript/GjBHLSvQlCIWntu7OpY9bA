'use client';

import { PropsWithChildren } from "react"
import { useAppSelector } from "../hooks/useAppSelector";
import styles from './html.module.scss';

type Props = Readonly<PropsWithChildren>

const HTML = (props: Props) => {
  const {children} = props;

  const { mode } = useAppSelector(state => state.theme)

  return (
    <html lang="en" className={mode}>
      <body className={styles.body}>
        {children}
      </body>
    </html>
  )
}

export default HTML;
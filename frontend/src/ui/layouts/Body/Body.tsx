import { PropsWithChildren } from "react"
import styles from './Body.module.scss'

const Body = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <body className={styles.body}>
      {children} 
    </body>
  )
}

export default Body;

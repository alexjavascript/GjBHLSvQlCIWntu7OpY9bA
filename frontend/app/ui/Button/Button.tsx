import classNames from "classnames";
import { FC, PropsWithChildren } from "react"
import styles from './Button.module.scss';
import Text from "../Text/Text";

type Props = PropsWithChildren<{
  className?: string;
  display: 'primary' | 'secondary' | 'outline';
  size: 'default' | 'small';
}> 

const Button: FC<PropsWithChildren<Props>> = (props) => {
  const { className = '', display = 'primary', size = 'default', children } = props;

  const content = typeof children === 'string' ?  <Text tag="span" display="h3">{children}</Text> : children;

  return (
    <button className={classNames(styles.button, styles[`display-${display}`], styles[`size-${size}`], className)}>
      {content}
    </button>
  )
}

export default Button;

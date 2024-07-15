import classNames from "classnames";
import { FC, MouseEventHandler, PropsWithChildren } from "react"
import styles from './Button.module.scss';
import Text from "../Text/Text";

type Props = PropsWithChildren<{
  className?: string;
  display: 'primary' | 'secondary' | 'outline';
  size: 'default' | 'small';
  onClick?: MouseEventHandler<HTMLButtonElement>
}> 

const Button: FC<Props> = (props) => {
  const { className = '', display = 'primary', size = 'default', children, onClick = () => {} } = props;

  const content = typeof children === 'string' ?  <Text tag="span" display="h3">{children}</Text> : children;

  return (
    <button className={classNames(styles.button, styles[`display-${display}`], styles[`size-${size}`], className)} onClick={onClick}>
      {content}
    </button>
  )
}

export default Button;

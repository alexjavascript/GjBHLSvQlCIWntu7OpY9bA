import classNames from "classnames";
import { FC, PropsWithChildren } from "react"
import styles from './Button.module.scss';
import Text from "../Text/Text";

type Props = {
  display?: 'primary' | 'secondary' | 'outline';
  size?: 'default' | 'small';
  children: string;
}

const Button: FC<PropsWithChildren<Props>> = (props) => {
  const { display = 'primary', size = 'default', children } = props;

  return (
    <button className={classNames(styles.button, styles[`size-${size}`], styles[`display-${display}`])}>
      <Text tag="span" display="h3">
        {children}
      </Text>
    </button>
  )
}

export default Button;

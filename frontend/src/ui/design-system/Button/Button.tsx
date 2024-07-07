import classNames from "classnames";
import { FC, PropsWithChildren } from "react"
import styles from './Button.module.scss';
import Text from "../Text/Text";

type Props = {
  display: 'primary' | 'secondary' | 'tertiary';
  children: string;
}

const Button: FC<PropsWithChildren<Props>> = (props) => {
  const { display, children } = props;

  return (
    <button className={classNames(styles.button, styles[display])}>
      <Text tag="span" display="p2">
        {children}
      </Text>
    </button>
  )
}

export default Button;

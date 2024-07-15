"use client";

import { PropsWithChildren } from 'react';
import styles from './Toggle.module.scss';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  className?: string;
  checked: boolean;
  onChange: (next: boolean) => void;
}>

const Toggle = (props:  Props) => {
  const { children, checked, onChange, className} = props;
  
  const handleChange = () => onChange(!checked);

  return (
    <button className={classNames(styles.toggle, checked ? styles.on : styles.off, className)} onClick={handleChange}>{children}</button>
  )
}

export default Toggle;

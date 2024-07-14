import { FC, PropsWithChildren } from "react";
import localFont from 'next/font/local';
import classNames from "classnames";
import styles from './Text.module.scss';

const redcollar = localFont({ 
  src: './../../../public/fonts/redcollar-400.woff2',
});

const ttcommons = localFont({ 
  src: [
    {
      path: './../../../public/fonts/tt-commons-400.woff2',
      weight: '400',
    },
    {
      path: './../../../public/fonts/tt-commons-500.woff2',
      weight: '500',
    }
  ]
});

type Display =
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'p1' 
  | 'p2' 
  | 'p3';

type Tag = 
  | 'h1' 
  | 'h2' 
  | 'h3' 
  | 'p'
  | 'span';

type Props = {
  tag: Tag;
  display: Display;
  children: string;
}

const Text: FC<PropsWithChildren<Props>> = (props) => {
  const { tag, display, children } = props;

  const nextProps = {
    className: classNames(
      styles.text, 
      styles[display],
      {
        [redcollar.className]: display === 'h1' || display === 'h2' || display === 'h3',
        [ttcommons.className]: display === 'p1' || display === 'p2' || display === 'p3',
      }
    )
  }

  switch (tag) {
    case 'h1':
      return <h1 {...nextProps}>{children}</h1>
    case 'h2':
      return <h2 {...nextProps}>{children}</h2>
    case 'h3':
      return <h3 {...nextProps}>{children}</h3>
    case 'p':
      return <p {...nextProps}>{children}</p>
    case 'span':
      return <span {...nextProps}>{children}</span>
  }
}

export default Text;

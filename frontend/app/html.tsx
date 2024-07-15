'use client';

import { PropsWithChildren, Suspense } from "react"
import { useAppSelector } from "./hooks/useAppSelector";
import styles from './html.module.scss';
import Image from "next/image";
import Button from "./ui/Button/Button";
import Theme from "./ui/Theme/Theme";
import Month from "./ui/Month/Month";
import Text from "./ui/Text/Text";

type Props = Readonly<PropsWithChildren>

const HTML = (props: Props) => {
  const {children} = props;

  const { mode } = useAppSelector(state => state.theme)

  return (
    <html lang="en" className={mode}>
      <head>
        <title>Event Planner | Red Collar Frontend Season</title>
        <link rel="icon" href="/images/favicon.svg" />
      </head>

      <body className={styles.body}>
        <header className={styles.header}>
          <div className={styles.logotype}>
            <Image 
              src={`/images/logotype-${mode}.svg`}
              width="470"
              height="40"
              alt="Event Planner logotype"
              priority
            />
          </div>

          <Theme className={styles.theme} />
          <Month className={styles.month} />


          <Button className={styles.login} display="primary" size="default">Login</Button>
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <div className={styles.event}>
            <Text tag="h2" display="p3">Frontend Season, 2024.</Text>
            <Text tag="a" display="p3" href="https://redcollar.ru">@RedCollar :D</Text>
          </div>

          <div className={styles.copyright}>
            <Text tag="span" display="p3" href="https://github.com/alexjavascript">Developed by </Text>
            <Text tag="a" display="p3" href="https://github.com/alexjavascript" target="_blank">@alexjavascript</Text>
            <Text tag="span" display="p3">, </Text>
            <Text tag="a" display="p3" href="https://github.com/maxjavascript" target="_blank">@maxjavascript</Text>
            <Text tag="span" display="p3"> & </Text>
            <Text tag="a" display="p3" href="https://github.com/babydiv" target="_blank">@babydiv</Text>
            <Text tag="span" display="p3">.</Text>
          </div>

          <div className={styles.resources}>
            <Text tag="a" display="p3" href="https://redcollar.ru" target="_blank">Figma</Text>
            <Text tag="span" display="p3"> & </Text>
            <Text tag="a" display="p3" href="https://redcollar.ru" target="_blank">Storybook</Text>
          </div>
        </footer>

        <section className={styles.babydiv}>
          <div className={styles.maxjavascript}></div>
          <div className={styles.xD}>
            <Image 
              className={styles.alexjavascript}
              src="/images/eyes.gif"
              loading="eager"
              width={320}
              height={227}
              alt="face"
              unoptimized
              priority
            />

            <div className={styles.$88005553555}>
              <Text tag="h2" display="h3">Mobile version is in progress...</Text>

              <div>
                <Text tag="span" display="p3" href="https://github.com/alexjavascript">Developed by </Text>
                <Text tag="a" display="p3" href="https://github.com/alexjavascript" target="_blank">@alexjavascript</Text>
                <Text tag="span" display="p3">, </Text>
                <Text tag="a" display="p3" href="https://github.com/maxjavascript" target="_blank">@maxjavascript</Text>
                <Text tag="span" display="p3"> & </Text>
                <Text tag="a" display="p3" href="https://github.com/babydiv" target="_blank">@babydiv</Text>
                <Text tag="span" display="p3">. </Text>
              </div>

              <div>
                <Text tag="span" display="p3">Frontend Season, 2024. </Text>
                <Text tag="a" display="p3" href="https://redcollar.ru">@RedCollar :D</Text>
              </div>
            </div>
          </div>
        </section>
      </body>
    </html>
  )
}

export default HTML;
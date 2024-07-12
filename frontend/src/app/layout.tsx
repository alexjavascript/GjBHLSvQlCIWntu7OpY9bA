import Body from "@/ui/layouts/Body/Body";
import { PropsWithChildren } from "react";

type Props = Readonly<PropsWithChildren>

function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <Body>
        {children}
      </Body>
    </html>
  );
}

export default RootLayout;

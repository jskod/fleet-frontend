import React from "react";
import { Text, TextProps } from "@chakra-ui/react";

type PageTitleProps = React.PropsWithChildren<TextProps>;

export default function PageTitle(props: PageTitleProps): React.ReactElement {
  const { children, ...restProps } = props;
  return (
    <Text
      textColor={"black"}
      fontWeight={"bold"}
      fontSize={"lg"}
      {...restProps}
    >
      {children}
    </Text>
  );
}

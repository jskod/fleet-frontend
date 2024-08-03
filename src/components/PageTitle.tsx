import React from "react";
import {
  Box,
  HStack,
  Icon,
  IconButton,
  Text,
  TextProps,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "lucide-react";

type PageTitleProps = React.PropsWithChildren<
  TextProps & { hideBackButton?: boolean }
>;

export default function PageTitle(props: PageTitleProps): React.ReactElement {
  const navigate = useNavigate();
  const { children, ...restProps } = props;
  return (
    <HStack {...restProps}>
      {props.hideBackButton ? null : (
        <Box>
          <IconButton
            size={"sm"}
            aria-label={"Go back"}
            onClick={() => {
              navigate(-1);
            }}
          >
            <Icon as={ArrowLeftIcon} />
          </IconButton>
        </Box>
      )}
      <Text textColor={"black"} fontWeight={"bold"} fontSize={"lg"}>
        {children}
      </Text>
    </HStack>
  );
}

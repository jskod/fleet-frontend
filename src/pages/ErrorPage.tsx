import { NavLink, useRouteError } from "react-router-dom";
import { Box, Text } from "@chakra-ui/react";

export default function ErrorPage() {
  const error = useRouteError() as any;
  console.error(error);

  return (
    <Box
      id="error-page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      bg="gray.100"
      h={"100dvh"}
      fontSize="large"
    >
      <Box>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <NavLink to={"/"}>
          <Text color={"blue.400"}>Go back to homepage</Text>
        </NavLink>
      </Box>
    </Box>
  );
}

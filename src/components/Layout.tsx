import { Box, Flex, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import { CarIcon } from "lucide-react";
import React from "react";

const MENU = [
  {
    to: "/",
    name: "Vehicles",
    icon: CarIcon,
  },
];

function MenuLink(menu: {
  to: string;
  name: string;
  icon: React.ReactNode | any;
}) {
  return (
    <NavLink to={menu.to}>
      {({ isActive }) => (
        <HStack
          opacity={isActive ? 1 : 0.6}
          py={2}
          px={8}
          gap={3}
          bg={isActive ? "blue.100" : ""}
          borderLeftWidth={4}
          borderLeftColor={isActive ? "blue.500" : "transparent"}
        >
          <Icon as={menu.icon} strokeWidth={2} fontSize={"xl"} />
          <Text fontWeight={isActive ? "bold" : "normal"}>{menu.name}</Text>
        </HStack>
      )}
    </NavLink>
  );
}

export function Layout() {
  return (
    <Flex height="100dvh" position="relative">
      <Box width="190px" borderRightWidth={1}>
        <Box>
          <Text
            fontSize="large"
            bg="gray.700"
            color="white"
            align="center"
            p={2}
            fontWeight="normal"
          >
            Tenderd{" "}
            <Text
              as="span"
              bg="orange.400"
              px={2}
              borderRadius={2}
              fontWeight="bold"
            >
              Fleet
            </Text>
          </Text>
        </Box>

        <Box>
          <Stack>
            {MENU.map((menu) => (
              <MenuLink
                key={menu.name}
                to={menu.to}
                name={menu.name}
                icon={menu.icon}
              />
            ))}
          </Stack>
        </Box>
      </Box>
      <Box flex={1}>
        <Outlet />
      </Box>
    </Flex>
  );
}

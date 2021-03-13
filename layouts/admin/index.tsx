import { Box, Flex, Heading, Icon } from '@chakra-ui/react';
import withAuth from 'layouts/admin/hoc/withAuth';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { routes } from 'utils/routes';

export interface AdminLayoutProps {
  title: string;
  addOns?: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({
  title,
  addOns,
  children,
}) => {
  const router = useRouter();

  const listOfMenu = Object.entries(routes.admin)
    .filter((menu) => !['Logout'].includes(menu[1].name))
    .map((menu) => (
      <Link href={menu[1].url} key={menu[1].name}>
        <Box
          as="a"
          p={3}
          borderRadius="lg"
          cursor="pointer"
          bgColor={
            router.pathname === menu[1].url
              ? 'rgba(0, 0, 0, 0.2)'
              : 'transparent'
          }
        >
          <Icon as={menu[1].icon} mr={4} />
          <span>{menu[1].name}</span>
        </Box>
      </Link>
    ));

  return (
    <Flex>
      <Flex
        h="100vh"
        flexBasis="300px"
        direction="column"
        bgGradient="linear(to-b, #0575E6, #021B79)"
        justifyContent="space-between"
        p={8}
        color="white"
      >
        <Link href={routes.admin.logout.url}>
          <Box
            as="a"
            p={3}
            borderRadius="lg"
            cursor="pointer"
            fontSize="xl"
            fontWeight="bold"
          >
            HOLO
          </Box>
        </Link>
        <Flex direction="column" justify="center">
          {listOfMenu}
        </Flex>
        <Link href={routes.admin.logout.url}>
          <Box as="a" p={3} borderRadius="lg" cursor="pointer">
            <Icon as={routes.admin.logout.icon} mr={4} />
            <span>{routes.admin.logout.name}</span>
          </Box>
        </Link>
      </Flex>
      <Box p={12} flexBasis="calc(100% - 300px)" h="100vh" overflowY="auto">
        <Flex
          justify="space-between"
          borderBottom="2px dotted"
          borderColor="gray.300"
          pb={4}
          mb={12}
        >
          <Heading bgGradient="linear(to-b, #0575E6, #021B79)" bgClip="text">
            {title}
          </Heading>
          {addOns && <Box>{addOns}</Box>}
        </Flex>
        {children}
      </Box>
    </Flex>
  );
};

export default withAuth(AdminLayout);

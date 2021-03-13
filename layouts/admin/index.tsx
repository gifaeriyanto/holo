import { Box, Flex, Heading } from '@chakra-ui/react';
import WithAuthHOC from 'layouts/admin/hoc/withAuth';
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

  const listOfMenu = Object.entries(routes.admin).map((menu) => (
    <Link href={menu[1].url}>
      <Box
        as="a"
        p={3}
        borderRadius="lg"
        cursor="pointer"
        bgColor={
          router.pathname === menu[1].url ? 'rgba(0, 0, 0, 0.2)' : 'transparent'
        }
      >
        {menu[1].name}
      </Box>
    </Link>
  ));

  return (
    <WithAuthHOC>
      <Flex>
        <Flex
          h="100vh"
          flexBasis="300px"
          bgGradient="linear(to-b, #0575E6, #021B79)"
          color="white"
          p={8}
          direction="column"
          justify="center"
        >
          {listOfMenu}
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
    </WithAuthHOC>
  );
};

export default AdminLayout;

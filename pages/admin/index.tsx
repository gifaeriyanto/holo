import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import AdminLayout from 'layouts/admin';
import { NextPage } from 'next';
import React from 'react';

const Dashboard: NextPage = () => {
  return (
    <AdminLayout title="Dashboard">
      <Box border="1px solid" borderColor="gray.200" borderRadius="lg">
        <Table variant="striped" colorScheme="gray">
          <TableCaption color="gray.400">
            Last update 13/03/2021 15:54
          </TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th isNumeric>Views</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Foo</Td>
              <Td isNumeric>4</Td>
            </Tr>
            <Tr>
              <Td>Bar</Td>
              <Td isNumeric>6</Td>
            </Tr>
            <Tr fontWeight="bold">
              <Td>Total</Td>
              <Td isNumeric>10</Td>
            </Tr>
          </Tbody>
        </Table>
      </Box>
    </AdminLayout>
  );
};

export default Dashboard;

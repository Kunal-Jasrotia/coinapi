import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'
import Pagination from '@mui/material/Pagination';
import { Heading } from '@chakra-ui/react'
import { useState } from 'react';

export const CoinData = () => {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const handleChange = (event: any, value: number) => {
        setPage(value)
    }
    return (
        <>
            <Heading textAlign={"center"} padding={"10px"}>TOP CRYPTO EXCHANGE</Heading>
            <TableContainer>

                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Sno.</Th>
                            <Th>Exchange</Th>
                            <Th >Value</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>BTC</Td>
                            <Td >25.4</Td>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>

            <Pagination count={totalPage} variant="outlined" shape="rounded" onChange={handleChange} />


        </ >
    )
}
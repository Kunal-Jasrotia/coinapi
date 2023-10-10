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
import { useEffect, useState } from 'react';
import { coin } from '../misc/interfaces';
import { get } from '../misc/apiCall';
import { Input } from '@chakra-ui/react'

export const CoinData = () => {
    const [page, setPage] = useState(1)
    const [totalPage, setTotalPage] = useState(0)
    const [coinData, setCoinData] = useState<coin[]>([])

    const fetchData = async (): Promise<void> => {
        let response = await get('coin/getAllData')
        setTotalPage(Math.ceil(response.length / 10))
        setCoinData(response)
    }
    const handleChange = (event: any, value: number): void => {
        setPage(value)
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Input placeholder='Search' width={'50%'} margin={"10px"} />
            <Heading textAlign={"center"} padding={"10px"}>TOP CRYPTO EXCHANGE</Heading>
            <TableContainer>
                <Table variant='striped' colorScheme='gray'>
                    <Thead>
                        <Tr>
                            <Th>Sno.</Th>
                            <Th>Exchange</Th>
                            <Th>Value</Th>
                            <Th>Website</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {
                            coinData.map((coin, index) => {
                                return (
                                    <Tr key={index}>
                                        <Td>{index + 1}</Td>
                                        <Td><img src={coin.icon as string} alt='Icon' />{coin.exchange_id}</Td>
                                        <Td>{coin.data_symbols_count}</Td>
                                        <Td> <a href={coin.website} target='blank' >{coin.website}</a> </Td>
                                    </Tr>
                                )
                            })
                        }
                    </Tbody>
                </Table>
            </TableContainer >
            <Pagination
                count={totalPage}
                variant="outlined"
                color='primary'
                onChange={handleChange}
            />
        </>
    )
}
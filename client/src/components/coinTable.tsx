import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Button,
    useToast,
    Box,
    VStack,
    HStack,
} from '@chakra-ui/react'
import Pagination from '@mui/material/Pagination';
import { Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { coin } from '../misc/interfaces';
import { get } from '../misc/apiCall';
import { Input } from '@chakra-ui/react'
import { Center } from '@chakra-ui/react'
export const CoinData = () => {
    const toast = useToast()

    const [searchValue, setSearchValue] = useState('')
    const [totalPage, setTotalPage] = useState(0)
    const [coinData, setCoinData] = useState<coin[]>([])
    const [allCoinData, setAllCoinData] = useState<coin[]>([])

    const fetchData = async (): Promise<void> => {
        let response = await get('coin/getAllData')
        setAllCoinData(response)
        setTotalPage(Math.ceil(response.length / 10))
        let arrayOfCoin: coin[] = []

        for (let i = 0; i < 10; i++) {
            if (response[i]) {
                response[i].index = i + 1
                arrayOfCoin.push(response[i])
            }
        }
        setCoinData(arrayOfCoin)
    }
    const handleChange = (event: any, value: number): void => {
        let currentPage = value - 1
        let arrayofcoinOnEachPage: coin[] = []
        for (let i = currentPage * 10; i < (currentPage * 10) + 10; i++) {
            if (allCoinData[i]) {
                allCoinData[i].index = i + 1
                arrayofcoinOnEachPage.push(allCoinData[i])
            }
        }
        setCoinData(arrayofcoinOnEachPage)
    }

    const filterValues = () => {
        if (searchValue) {
            let filterArrayofcoin: coin[] = []
            for (let i = 0; i < allCoinData.length; i++) {
                if (allCoinData[i].exchange_id?.toLowerCase()?.includes(searchValue?.toLowerCase()) || allCoinData[i].website?.toLowerCase()?.includes(searchValue?.toLowerCase())) {
                    allCoinData[i].index = i + 1
                    filterArrayofcoin.push(allCoinData[i])
                }
            }
            setCoinData(filterArrayofcoin)
            setSearchValue('')
        } else {
            toast({
                title: 'Input should not be empty!!',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: "top-right"
            })
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <VStack
                spacing={4}
                align='center'
            >
                <Heading textAlign={"center"} padding={"10px"}>TOP CRYPTO EXCHANGE</Heading>

                <HStack>
                    <Input placeholder='Search' width={'100%'} margin={"10px"} float={"right"} value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
                    <Button
                        colorScheme='blue'
                        onClick={filterValues}
                        margin={"10px"}
                        float={"right"}
                    >
                        Filter
                    </Button>
                </HStack>

                <Box w={'100%'}>
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
                                                <Td>{coin.index}</Td>
                                                <Td display={"flex"} ><img src={coin.icon as string} alt='Icon' style={{ marginRight: "20px" }} />{coin.exchange_id}</Td>
                                                <Td>{coin.data_symbols_count}</Td>
                                                <Td> <a href={coin.website} target='blank' >{coin.website}</a> </Td>
                                            </Tr>
                                        )
                                    })
                                }
                            </Tbody>
                        </Table>
                    </TableContainer >
                    <Center h='100px' color='white'>
                        <Pagination
                            count={totalPage}
                            variant="outlined"
                            color='primary'
                            onChange={handleChange}
                        />
                    </Center>
                </Box>
            </VStack>
        </>
    )
}
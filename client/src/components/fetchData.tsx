import { get } from '../misc/apiCall'
import { Button } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
export const FetchData = () => {
    const toast = useToast()
    const fetchNewData = async (): Promise<void> => {
        let coindata = await get('fetchData/storeInDb')
        if (coindata) {
            toast({
                title: 'New Data Fetched',
                status: 'success',
                duration: 9000,
                isClosable: true,
                position: "top-right"
            })
            setTimeout(() => {
                window.location.reload()
            }, 1000);
        } else {
            toast({
                title: 'Something went wrong!!',
                status: 'error',
                duration: 9000,
                isClosable: true,
                position: "top-right"
            })
        }
    }

    return (
        <Button
            colorScheme='blue'
            onClick={fetchNewData}
            margin={"10px"}
        >
            Fetch New Data
        </Button>
    )
}


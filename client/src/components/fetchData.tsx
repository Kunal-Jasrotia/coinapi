import React from 'react'
import { get } from '../misc/apiCall'

export const FetchData = () => {
    const fetchNewData = async() => {
        let coindata = await get('fetchData/storeInDb')
        console.log(coindata)
    }
    return (
        <button onClick={fetchNewData}>
            Fetch
        </button>
    )
}


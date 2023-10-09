import 'dotenv/config'

export const getCoinData = async () => {
    const coinDataUrl = `https://rest.coinapi.io/v1/exchanges?apikey=${process.env.API_KEY}`
    const response = await fetch(coinDataUrl)
    let responseJson = await response.json()
    return responseJson
}

export const getCoinIcons = async () => {
    const coinDataUrl = ` https://rest.coinapi.io/v1/exchanges/icons/32?apikey=${process.env.API_KEY}`
    const response = await fetch(coinDataUrl)
    let responseJson = await response.json()
    return responseJson
}
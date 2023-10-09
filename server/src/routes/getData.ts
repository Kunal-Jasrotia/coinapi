import express, { Request, Response } from 'express'
import { getCoinData, getCoinIcons } from '../misc/fetchData'
import { Coin } from '../models/coinModel'
export const router = express.Router()

router.get('/storeInDb', async (req: Request, res: Response) => {
    try {
        const coinData = await getCoinData()
        const coinIcons = await getCoinIcons()

        for (let i = 0; i < coinData.length; i++) {
            for (let j = 0; j < coinIcons.length; j++) {
                if (coinData[i].exchange_id == coinIcons[j].exchange_id) {
                    coinData[i].icon = coinIcons[j].url
                    break
                } else {
                    coinData[i].icon = null
                }
            }
        }
        let data = {
            data: coinData
        }
        let storeCoinData = await Coin.create(data)
        res.status(200).json(storeCoinData)
    } catch (error) {
        console.log(error);

        res.status(400).json(error)
    }
})


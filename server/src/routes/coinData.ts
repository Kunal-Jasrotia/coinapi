import express, { Request, Response } from 'express'
import { Coin } from '../models/coinModel'

export const router = express.Router()

router.get('/getAllData', async (req: Request, res: Response) => {
    try {
        let latestData = await Coin.findOne({}).sort({ _id: -1 })
        res.status(200).json(latestData?.data)
    } catch (error) {
        res.status(400).json(error)
    }
})
import mongoose from "mongoose";

const coinModel = new mongoose.Schema({
    data: [
        {
            exchange_id: {
                type: String,
                required: true,
            },
            icon: {
                type: String,
            },
            data_symbols_count: {
                type: Number,
            },
            website: {
                type: String,
            }
        }
    ]
}, {
    timestamps: true
})

export const Coin = mongoose.model('Coin', coinModel)
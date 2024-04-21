"use strict"

const { mongoose } = require('../configs/dbConnection')



const OrderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    pizzaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pizza',
        required: true,
    },

    size: {
        type: String,
        trim: true,
        required: true,
        enum: ['Small', 'Medium', 'Large', 'XLarge']
    },

    quantity: {
        type: Number,
        default: 1
    },

    price: {
        type: Number,
        required: true
    },

    amount: {
        type: Number,
        default: function(){ return this.quantity * this.price }, 
        transform: function(){ return this.quantity * this.price }, 
    }

}, {
    collection: 'orders',
    timestamps: true
})


module.exports = mongoose.model('Order', OrderSchema)
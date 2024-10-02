import express from 'express';

import { addOrder, deleteOrder, getAllOrders, getOrderById, updateOrderStatus } from '../controllers/order.js';


const OrderRoute = express.Router();
 
OrderRoute.post('/addOrder', addOrder)
OrderRoute.get('/getallOrders',getAllOrders)
OrderRoute.get('/getOrderById', getOrderById)
OrderRoute.delete('/deleteOrder', deleteOrder)
OrderRoute.put('/updateOrder', updateOrderStatus)

export default OrderRoute;
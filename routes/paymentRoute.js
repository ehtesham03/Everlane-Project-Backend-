import express from 'express';
import { addPayment, deletePayment, getPaymentById, getPayments, updatePayment } from '../controllers/payment.js';


const PaymentRoute = express.Router()

PaymentRoute.post('/addpayment', addPayment)
PaymentRoute.get('/getpayments',getPayments)
PaymentRoute.get('/getpaymentbyId',getPaymentById)
PaymentRoute.delete('/deletepayment',deletePayment)
PaymentRoute.put('/updatepayment',updatePayment)




export default PaymentRoute;
const express = require('express');
const checkToken = require('../Helpers/midleware/checktoken')
const admin = require('../Helpers/midleware/admin')

const menuRouter = require('./menu');
const historyRouter = require('./history');
const authRouter = require('../Routers/auth');


const indexRouter = express.Router();

indexRouter.use('/', menuRouter);
indexRouter.use('/history',admin,historyRouter)


indexRouter.use("/auth", authRouter);
module.exports = indexRouter;
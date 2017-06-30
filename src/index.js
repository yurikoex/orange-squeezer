'use strict'

import {log} from './http'
import {startOrder} from './nicehash'
import {tradeEthToBtc, refillNicehash} from './gdax'
import config from './config'
import _ from 'lodash'

//Trade all ETH to BTC every 10 minutes if larger than 0.01
const tradeLoop = () => {
	tradeEthToBtc(config).then(log).catch(log)
	setTimeout(() => tradeLoop(), 1000 * 60 * 10)
}
tradeLoop()

//Transfer all BTC to Nicehash every 10 minutes if larger than 0.01
const moveToNicehashLoop = () => {
	refillNicehash(config).then(log).catch(log)
	setTimeout(() => moveToNicehashLoop(), 1000 * 60 * 10)
}
moveToNicehashLoop()

//Every 10 minutes if Nicehash available balance larger than 0.01 check if open order, refill, if not open an order
const fillLoop = () => {
	//TODO: refill or order
	setTimeout(() => fillLoop(), 1000 * 60 * 10)
}
fillLoop()

//Every 11 minutes check for best price +1 is lower than you, then decrease
const decreaseLoop = () => {
	//TODO: decrease
	setTimeout(() => decreaseLoop(), 1000 * 60 * 11)
}
decreaseLoop()

//Every minute check if zero miners, if none, raise to best price + 1
const increaseLoop = () => {
	//TODO: increase
	setTimeout(() => increaseLoop(), 1000 * 60)
}
increaseLoop()
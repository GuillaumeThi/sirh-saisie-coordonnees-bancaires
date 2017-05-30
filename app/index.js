import angular from 'angular'
import RouteModule from 'angular-route'

import 'bootstrap/dist/css/bootstrap.css'

import { routes } from './routes.config'
import { BankComponent } from './bank/bank.component'
import { BankService } from './bank.service'



angular.module('app', [
    RouteModule
])

.component('dtaBank', BankComponent)

.service('BankService', BankService)

.config(routes)
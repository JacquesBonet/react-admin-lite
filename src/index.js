import React from 'react'
import ReactDOM from 'react-dom'
import { factoryCreateStore } from './crud/stores'
import { Provider } from 'react-redux'
import './css/app.css'
import './css/fontawesome.min.css'
import { Routes } from './routes'
import { HashRouter } from 'react-router-dom'
import { resourcesName } from './pages'

ReactDOM.render(
   <Provider store={factoryCreateStore(resourcesName)}>
      <HashRouter>
         <Routes />
      </HashRouter>
   </Provider>,
   document.getElementById('root')
)

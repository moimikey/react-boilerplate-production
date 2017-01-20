import { React, DOM } from 'base-react'
import { App } from './App'
export default (function(dom) {
  dom.render(
    <App />,
    document.getElementById('root')
  )
})(DOM)

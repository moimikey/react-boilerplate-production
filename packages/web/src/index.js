import { React, DOM } from 'base-react'
export default (function(dom) {
  dom.render(
    <div>Hello World.</div>,
    document.getElementById('root')
  )
})(DOM)

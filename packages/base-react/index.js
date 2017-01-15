import react from 'react'
import reactDOM from 'react-dom'
export const React = {
  Children: react.Children,
  Component: react.Component,
  PropTypes: react.PropTypes,
  createElement: react.createElement,
  cloneElement: react.cloneElement,
  version: react.version
}
export const DOM = {
  findDOMNode: reactDOM.findDOMNode,
  render: reactDOM.render,
  unmountComponentAtNode: reactDOM.unmountComponentAtNode,
  version: reactDOM.version
}

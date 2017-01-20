/* eslint-disable */
import { React } from 'base-react'
import cx from 'classnames'
import styles from './App.css'
export class App extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.styles = styles
    console.log('Hello World.')
  }

  render() {
    const className = cx(this.styles.App)
    return (
      <div className={className}>Hello World.</div>
    )
  }
}

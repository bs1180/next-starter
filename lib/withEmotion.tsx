import React, { Component } from 'react'
import { hydrate, injectGlobal } from 'react-emotion'
import { Provider } from 'rebass-emotion'

const injectGlobalStyles = () => injectGlobal`
html, body {
  padding: 0;
  margin: 0;
  min-height: 100%;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
}
`

const withEmotion = ComposedComponent => {
  class HOC extends Component {
    componentWillMount () {
      if (typeof window !== 'undefined') {
        hydrate(window['__NEXT_DATA__'].ids)
      }
      injectGlobalStyles()
    }

    render () {
      return <Provider><ComposedComponent /></Provider>
    }
  };

  return HOC
}

export default withEmotion
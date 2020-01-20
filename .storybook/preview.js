import React from 'react'
import { addDecorator } from '@storybook/react'
import { ApolloProvider } from '@apollo/react-hooks'
import { initApolloClient } from '../src/hocs/with-apollo'
import '../src/global.css'

const client = initApolloClient({})

function App({ children }) {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

addDecorator(storyFn => <App>{storyFn()}</App>)

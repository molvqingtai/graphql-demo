import Vue from 'vue'
import VueApollo from 'vue-apollo'
import ApolloClient from 'apollo-boost'

Vue.use(VueApollo)

/**
 * 连接服务器
 * @type {ApolloClient}
 */
const apolloClient = new ApolloClient({
  uri: 'http://localhost:3000/graphql'
})

/**
 * 创建实例
 * @type {VueApollo}
 */
const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

export default apolloProvider

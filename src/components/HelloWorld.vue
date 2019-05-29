<template>
  <div class="example">
    <h1>{{ hello }}</h1>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'HelloWorld',
  apollo: {
    // 简单的查询，将更新 'hello' 这个 vue 属性
    hello: gql`query {
      hello
    }`,
  }
}
</script>

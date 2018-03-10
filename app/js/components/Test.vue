<template>
  <div>
    <label for="name">Name:</label>
    <input id="name" type="text" v-model="name" />
    <p> {{ name }} </p>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      name: ''
    }
  }
}
</script>

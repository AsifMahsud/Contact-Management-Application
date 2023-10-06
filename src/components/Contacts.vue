<template>
  <div>
    <ul v-bind="contacts" v-for="contact in contacts" :key="contact.id" class="con">
      <li>{{ contact.firstname }} {{ contact.lastname }} </li>
      <li v-for="email in contact.email" :key="email"  >{{ email }} </li>
      <li v-for="number in contact.phoneNumber" :key="number">{{ number }} </li>
    </ul>
  <!-- Your solution here -->
  </div>
</template>
<script>
export default {
  name: 'Contact',
  data () {
    return {
      query: ''
    }
  },
  props: {
    contacts: {
      type: Array
    }
  }
}
</script>
<style scoped>
ul {
  list-style-type:none;
}
ul li {
  display: inline-block;
  min-width: 200px;
  max-width: 300px;
}
</style>

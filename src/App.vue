<template>
  <div id="app">
    <!-- Two way bind query to this input field -->
    <input id="search" type="text">
    <!--
      Edit app-contacts component to receive
      contacts property through search results
    -->
    <app-contacts></app-contacts>
  </div>
</template>

<script>
import Contacts from './components/Contacts'
/**
 * To import contact from contacts.json
 * uncomment the following line
 */
// import jsonContacts from './assets/contacts.json'

export default {
  name: 'App',
  components: {
    'app-contacts': Contacts
  },
  data () {
    /**
     * Create the necessary data variable here
     */
    return {
    }
  },
  computed: {
    search: {
      /**
       * Complete this function to
       * search through contacts
       * by first and last name, email & phone number
       * and return an array with the results
       */
      get: function () {
        return ''
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

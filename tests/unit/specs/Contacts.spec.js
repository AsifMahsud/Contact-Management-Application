import Vue from 'vue'
import App from '@/App.vue'

describe('App.vue', () => {
  it('should be an object', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(typeof vm.contacts).toEqual('object')
  })

  it('should be equal to 1', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.contacts[0].id).toEqual(1)
  })

  it('should be equal to Jamie', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.contacts[0].firstname).toEqual('Jamie')
  })

  it('should be equal to Fox', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.contacts[0].lastname).toEqual('Fox')
  })
})

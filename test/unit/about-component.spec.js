// test/component-a.spec.js
var Vue = require('vue')
var About = require('../../app/src/sections/About.vue')

describe('About.vue', function () {
  it('should render correct message', function () {
    var vm = new Vue({
      template: '<div><test></test></div>',
      components: {
        'test': About
      }
    }).$mount()
    expect(vm.$el.querySelector('h2').textContent).toBe('About Us')
  })
})

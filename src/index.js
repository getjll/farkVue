import FakeVue from './fakeVue'

let testVue = new FakeVue({
  data: {
    a: 1,
    b: 2,
    c: {
      a: 1,
      b: 2
    }
  }
})
window.data = testVue

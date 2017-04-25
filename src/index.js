import {observe} from './observer'

let $observe = observe({
  a: 1,
  b: 2,
  c: {
    a: 1,
    b: 2
  }
})
window.data = $observe

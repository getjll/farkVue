import _ from '../util'

export default class Observer {
  constructor (value) {
    this.value = value
    this.walk(value)
  }

  walk(value){
    Object.keys(value).forEach(key=>this.convert(key,value[key]))
  }

  convert(key, value){
    defineReactive(this.value, key, value)
  }
}

export function defineReactive (data, key, value) {
  let childOb = observe(value)

  Object.defineProperty(data, key , {
    enumerable: true,
    configurable: true,
    get () {
      console.log('获取数据', value)
      return value
    },
    set (newValue) {
      console.log('设置数据', value)
      childOb = observe(newValue)
      value = newValue
    }
  })
}

export function observe (value) {
  if (!_.isObject(value)) {
    return
  }
  return new Observer(value)
}

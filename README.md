# JavaScript Base Classes

## Description

Useful JavaScript base classes for efficient and quick solutions to common problems.


## Installation

```bash
npm install base-classes
```

## Store

The `Store` is a base class that provides the necessary methods and attributes to organize state management efficiently and easily.
#### Import

```js
import {Store} from 'base-classes'
```
```js
const {Store} = require('base-classes')
```

#### Basic Usage

```js
import {Store} from 'base-classes'

class MyClass extends Store {
    state = { count: 1 }
}

const myClass = new MyClass()

myClass.subscribe((state, prevState) => {
    console.log('state changed:', state)
})
myClass.updateState((state) => {
    return {...state, count: 2}
})
```

### API

- [constructor](#constructor)
- [state](#state)
- [updatestate](#updatestate)
- [subscribe](#subscribe)
- [subscribeSelector](#subscribeSelector)
- [prevState](#prevState)

</br>

#### **constructor**

`new Store(initialState?)`

- **initialState** `<any>`  
    Any value for the initial state of the store.  
    Default: `undefined`

```js
const initialState = {count: 1}

const store = new Store(initialState)
```

</br>

#### **state**  
Get the current state of the store.  
`store.state`

```js
const store = new Store({count: 1})

// Get the current state 
store.state // {count: 1}

```

</br>

#### **updateState**  
Change state value.  
`store.updateState(updater)`

- **updater** `<Function>`  
    Updater is a function that receives the current state as an argument, and the returned value will be the new state of the store.

```js
const store = new Store({count: 1})

// Update state
store.updateState(state => {
    return {...state, count: state.count + 1}
})

store.state // {count: 2}
```

</br>

#### **subscribe**  
Subscribe state changes.  
`store.subscribe(callback)`  

- **callback** `<Function>`  
    A callback is a function that will be called when the state changes․ It gets the new state in the first argument and the previous state in the second argument․

```js
store.subscribe((state, prevState) => {
    console.log('state changed:', state)
})
```

*Return value:*  
The subscribe method returns a function to unsubscribe the passed callback from listening to state changes.

`const unsubscribe = store.subscibe(callback)`

```js
const unsubscribe = store.subscribe((state, prevState) => {
    console.log('state changed:', state)
})

// unsubscribe after 10 seconds
setTimeout(() => {
    unsubscribe()
}, 10000)
```

</br>

#### **subscribeSelector**  
Subscribe certain values change which is defined by the selector․  
`store.subscribeSelector(selector, callback)`

- **selector** `<Function>`  
    The selector is a function that receives state as a first argument and returns a certain selected value.
- **callback** `<Function>`  
    A callback is a function that will be called when the selected value changes․ It gets the new value in the first argument and the previous value in the second argument․

```js
const store = new Store({firstName: 'Ruben', lastName: 'Arushanyan'})

store.subscribeSelector(state => state.firstName, (value, prevValue) => {
    console.log('firstName changed:', value)
})
```

*Return value:*  
The subscribeSelector method returns a function to unsubscribe the passed callback from listening to selected value changes.

`const unsubscribe = store.subscribeSelector(selector, callback)`

```js
const store = new Store({firstName: 'Ruben', lastName: 'Arushanyan'})

const unsubscribe = store.subscribeSelector(state => state.firstName, (value, prevValue) => {
    console.log('firstName changed:', value)
})

// unsubscribe after 10 seconds
setTimeout(() => {
    unsubscribe()
}, 10000)
```
#### **prevState**

## [Contributing](https://github.com/ruben-arushanyan/base-classes/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/base-classes/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/base-classes/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/base-classes/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/Ruben-Arushanyan/base-classes/blob/master/LICENSE)



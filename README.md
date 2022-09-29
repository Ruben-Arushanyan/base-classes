# JavaScript Base Classes

## Description

Helpful JavaScript base classes.

## Installation

```bash
npm install base-classes
```

## Store

### Import

```js
import {Store} from 'secure-event-emitter/Store'
```

### Basic Usage

```js
import {Store} from 'secure-event-emitter/Store'

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

## [Contributing](https://github.com/ruben-arushanyan/base-classes/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/base-classes/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/base-classes/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/base-classes/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/Ruben-Arushanyan/base-classes/blob/master/LICENSE)



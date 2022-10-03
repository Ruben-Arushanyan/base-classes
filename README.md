# [JavaScript Base Classes](https://base-classes.js.org)

> You can find the full documentation on the [website](https://base-classes.js.org).
## Description

Useful JavaScript base classes for efficient and quick solutions to common problems.


## Installation

```bash
npm install base-classes
```

## [Store](https://base-classes.js.org/docs/store)

The `Store` is a base class that provides the necessary methods and attributes to organize state management efficiently and easily.
### Import

```js
import {Store} from 'base-classes'
```
```js
const {Store} = require('base-classes')
```

### Basic Usage

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

### [API](https://base-classes.js.org/docs/store/#api)

- [constructor](https://base-classes.js.org/docs/store/#constructor)
- [state](https://base-classes.js.org/docs/store/#state)
- [updateState](https://base-classes.js.org/docs/store/#updatestate)
- [subscribe](https://base-classes.js.org/docs/store/#subscribe)
- [subscribeSelector](https://base-classes.js.org/docs/store/#subscribeselector)
- [prevState](https://base-classes.js.org/docs/store/#prevstate)

</br>
</br>


## [Contributing](https://github.com/ruben-arushanyan/base-classes/blob/master/CONTRIBUTING.md)

Read our [contributing guide](https://github.com/ruben-arushanyan/base-classes/blob/master/CONTRIBUTING.md) to learn about our development process.

## [Code of Conduct](https://github.com/ruben-arushanyan/base-classes/blob/master/CODE_OF_CONDUCT.md)

This project has adopted the [Contributor Covenant](https://www.contributor-covenant.org) as its Code of Conduct, and we expect project participants to adhere to it. Please read the [full text](https://github.com/ruben-arushanyan/base-classes/blob/master/CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Authors

- [Ruben Arushanyan](https://github.com/ruben-arushanyan)

## License

[MIT License](https://github.com/Ruben-Arushanyan/base-classes/blob/master/LICENSE)



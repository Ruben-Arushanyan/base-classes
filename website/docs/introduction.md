---
sidebar_position: 1
title: Introduction
description: Useful JavaScript base classes for efficient and quick solutions to common problems.
---

# JavaScript Base Classes

Useful JavaScript base classes for efficient and quick solutions to common problems.

- ## [Store](/docs/store)
## Installation

```bash
npm install base-classes
```


## Simple Usage Example

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
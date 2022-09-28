const {Store} = require('../../.packed/Store')

test('Store constructor', () => {
    const store = new Store()
    expect(store.state).toEqual(undefined)
    expect(store.prevState).toEqual(undefined)
})

test('Store updateState', () => {
    const store = new Store()
    store.updateState(() => {
        return 5
    })
    expect(store.state).toEqual(5)

    // TODO continue
})
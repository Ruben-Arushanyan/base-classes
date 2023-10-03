const {Store} = require('../../.packed/Store')

// constructor
test('Store | constructor', () => {
    let store = new Store()
    expect(store.state).toBeUndefined()
    expect(store.prevState).toBeUndefined()

    store = new Store({a: 1})
    expect(store.state).toEqual({a: 1})
    expect(store.prevState).toEqual({a: 1})
})

// updateState
test('Store | updateState', () => {
    const store = new Store()
    store.updateState(() => {
        return 5
    })
    expect(store.state).toBe(5)

    store.updateState(() => {
        return {a: 1, b: 2}
    })

    expect(store.state).toEqual({a: 1, b: 2})
})

// updateStateImmer
test('Store | updateStateImmer', () => {
    const s1 = {
        a: {
            b: 2,
            c: 3,
        },
        d: {
            e: 100,
            f: 200,
        }
    }
    const store = new Store(s1)
    store.updateState((state) => {
        state.a.b = 22
    })
    expect(store.state).toEqual({
        a: {
            b: 22,
            c: 3,
        },
        d: {
            e: 100,
            f: 200,
        }
    })
    expect(store.state.d).toBe(s1.d)


    const s2 = {a: 1, b: 2}
    store.updateState((state) => {
        return s2
    })

    expect(store.state).toEqual(s2)
    expect(store.state).toBe(s2)

    store.updateState((state) => {
        state.a = 1
        state.b = 2
    })

    expect(store.state).toEqual(s2)
    expect(store.state).toBe(s2)
})

// subscribe
test('Store | subscribe', () => {
    const stack = []
    const store = new Store()

    const unsubscribe1 = store.subscribe(() => {
        stack.push('a')
    })
    expect(stack).toEqual([])

    store.updateState(() => {
        return 1
    })
    expect(stack).toEqual(['a'])

    store.updateState(() => {
        return 1
    })
    expect(stack).toEqual(['a'])

    store.updateState(() => {
        return 2
    })
    expect(stack).toEqual(['a', 'a'])

    const unsubscribe2 = store.subscribe(() => {
        stack.push('b')
    })

    store.updateState(() => {
        return 3
    })
    expect(stack).toEqual(['a', 'a', 'a', 'b'])

    unsubscribe1()

    store.updateState(() => {
        return 4
    })
    expect(stack).toEqual(['a', 'a', 'a', 'b', 'b'])

    unsubscribe2()

    store.updateState(() => {
        return 5
    })
    expect(stack).toEqual(['a', 'a', 'a', 'b', 'b'])
})


// subscribeSelector
test('Store | subscribeSelector', () => {
    const stack = []
    const store = new Store({a: {a: 1}, b: {b: 1}})


    const unsubscribe1 = store.subscribeSelector(state => state.a.a, () => {
        stack.push('a')
    })

    expect(stack).toEqual([])

    store.updateState((state) => {
        return {...state, a: {a: 2}}
    })

    expect(stack).toEqual(['a'])

    store.updateState((state) => {
        return {...state, b: {b: 2}}
    })

    expect(stack).toEqual(['a'])

    const unsubscribe2 = store.subscribeSelector(state => state.b.b, () => {
        stack.push('b')
    })

    store.updateState((state) => {
        return {...state, a: {a: 3}}
    })
    
    expect(stack).toEqual(['a', 'a'])

    store.updateState((state) => {
        return {...state, b: {b: 3}}
    })

    expect(stack).toEqual(['a', 'a', 'b'])
})

// prevState
test('Store | prevState', () => {
    const store = new Store()

    store.updateState(() => 1)

    expect(store.state).toBe(1)
    expect(store.prevState).toBeUndefined()


    store.updateState(() => 2)

    expect(store.state).toBe(2)
    expect(store.prevState).toBe(1)


    store.updateState(() => 3)

    expect(store.state).toBe(3)
    expect(store.prevState).toBe(2)
})

// subscribe arguments
test('Store | subscribe arguments', () => {
    const store = new Store(1)

    const unsubscribe1 = store.subscribe((state, prevState) => {
        expect(state).toEqual(2)
        expect(prevState).toEqual(1)
    })

    store.updateState(state => 2)

    unsubscribe1()

    store.subscribe((state, prevState) => {
        expect(state).toEqual(3)
        expect(prevState).toEqual(2)
    })

    store.updateState(state => 3)
})

// subscribe arguments
test('Store | subscribeSelector arguments', () => {
    const store = new Store({a: {a: 1}, b: {b: 1}})

    const unsubscribe1 = store.subscribeSelector(state => state.a.a, (value, prevValue) => {
        expect(value).toEqual(2)
        expect(prevValue).toEqual(1)
    })

    store.updateState(state => ({...state, a: {a: 2}}))

    unsubscribe1()

    const unsubscribe2 = store.subscribeSelector(state => state.b.b, (value, prevValue) => {
        expect(value).toEqual(10)
        expect(prevValue).toEqual(1)
    })

    store.updateState(state => ({...state, b: {b: 10}}))
})


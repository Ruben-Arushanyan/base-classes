import { SingularEventEmitter } from 'secure-event-emitter'
import { isFunction, eq, memoizeByArgs } from './utils'


class Store {
    #emitter_key = Symbol()
    #emitter = new SingularEventEmitter(this.#emitter_key)
    #order = 0;

    state
    prevState

    constructor(initialState) {
        this.state = this.prevState = initialState
    }

    updateState = (cb) => {
        if (!isFunction(cb)) {
            throw new TypeError('[[updateState()]] argument must be a function');
        }
        const newState = cb(this.state)
        if (!eq(newState, this.state)) {
            this.prevState = this.state
            this.state = newState
            this.#emitter.unlock(this.#emitter_key).emit(++this.#order)
        }
    }

    subscribe = (cb) => {
        cb = memoizeByArgs(cb)
        let _order = 0;
        const _cb = (order) => {
            if (order > _order) {
                cb(this.state, this.prevState)
                _order = order
            }
        }

        this.#emitter.on(_cb)
        return () =>  this.#emitter.off(_cb)
    }

    subscribeSelector = (selector, cb) => {
        let prevValue = selector(this.state)
        return this.subscribe(() => {
            const newValue = selector(this.state)
            if (!eq(newValue, prevValue)) {
                const prev = prevValue
                prevValue = newValue
                cb(newValue, prev);
            }
        })
    }
}

export {Store}
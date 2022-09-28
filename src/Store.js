import { SingularEventEmitter } from 'secure-event-emitter'
import { isFunction, eq } from './utils'


class Store {
    #emitter_key = Symbol()
    #emitter = new SingularEventEmitter(this.#emitter_key)

    state
    prevState

    updateState = (cb) => {
        if (!isFunction(cb)) {
            throw new TypeError('[[updateState()]] argument must be a function');
        }
        const newState = cb(this.state)
        if (!eq(newState, this.state)) {
            this.prevState = this.state
            this.state = newState
            this.#emitter.unlock(this.#emitter_key).emit(this.state, this.prevState)
        }
    }

    subscribe = (cb) => {
        this.#emitter.on(cb)
        return () =>  this.#emitter.off(cb)
    }

    subscribeSelector = (selector, cb) => {
        return this.subscribe(() => {
            const prevValue = selector(this.prevState)
            const newValue = selector(this.state)
            if (!eq(newValue, prevValue)) {
                cb(newValue, prevValue);
            }
        })
    }
}

export {Store}
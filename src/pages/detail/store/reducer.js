import { fromJS } from 'immutable';
import {INIT_tOPIC_DETAIL} from './constants';

const defaultState = fromJS({
    topic: {}
})

export default (state = defaultState, action) => {
    switch (action.type) {
        case INIT_tOPIC_DETAIL:
            return state.set('topic', action.value)
        default: 
            return state
    }
}
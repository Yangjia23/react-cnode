import {INIT_tOPIC_DETAIL} from './constants';
import Api from '../../../api';

export const getTopicDetail = (id) => {
    return (dispatch) => {
        Api.getTopicDetail(id).then(res => {
            console.log(res)
            if (res && res.data) {
                console.log(res.data)
                const action = initTopicDetail(res.data)
                dispatch(action)
            }
        })
    }
}

export const initTopicDetail = (obj) => ({
    type: INIT_tOPIC_DETAIL,
    value: obj
})
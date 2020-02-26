import{
     RECORD_ADDRESS,
     ADD_CART,
     REDUVE_CART,
     INIT_BUYVSRT,
     CLEAR_CART,
     RECORD_SHOPDETAIL,
     RECORD_USERINFO,
     GET_USERINFO,
     CONFIRM_REMARK,
     CONFIRM_INVOICE,
     CHOOSE_SEARCH_ADDRESS,
     SAVE_GEOHSH,
     CONFIRM_ADDRESS,
     NEED_VALIDATION,
     SAVE_CART_ID_SIG,
     SAVE_ORDER_PARAM,
     ORDER_SUCCESS,
     SAVE_SHOPID,
     SAVE_OPDER,
     OUT_LOGIN,
     RETSET_NAME,
     SAVE_AVANDER,
     SAVE_ADDRESS,
     SAVE_ADDDETAIL,
     SAVE_QUESTION,
     ADD_ADDRESS,
     BUY_CART,
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

import {localapi, proapi} from 'src/config/env'

export default{
    [RECORD_ADDRESS](state,{
        latitude,
        longitude
    })
}
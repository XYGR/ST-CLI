// src/store/modules/user

// initialState
const initialState = {
    userInfo:{

    }
}

// types

const SET_USER_INFO = 'user/set_user_info';

// reducer
export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
        return {
            ...state,
            userInfo:action.value
        }
    default :
        return state
  }
}


// 同步action

const set_user_info = (value) => ({
    type:SET_USER_INFO,
    value,
})


// 异步action

export const requestUserInfo = () => (dispatch) =>{
    // 异步


}

import axios from 'axios';

export const SAVE_USER = 'save_user';

// 发送请求 获取用户列表数据
export const fetchUser = () => async dispatch => {
    let response = {
        data: [{ id: '1', name: "</script><script>alert(1)</script>" }]
    }
    dispatch({
        type: SAVE_USER,
        payload: response
    })
}

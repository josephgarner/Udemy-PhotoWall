import postData from '../data/posts'

const postReducer = function posts(state = postData, action){
    console.log(action.index)
    return state

}

export default postReducer
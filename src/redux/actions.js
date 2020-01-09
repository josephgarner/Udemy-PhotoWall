//Remove
export function removePost(index){
    return {
        type: 'REMOVE_POST',
        index
    }
}

export function addPost(post){
    return {
        type: 'ADD_POST',
        post
    }
}

export function addComment(comment, postID){
    return {
        type: 'ADD_COMMENT',
        comment,
        postID
    }
}

//Adding Post
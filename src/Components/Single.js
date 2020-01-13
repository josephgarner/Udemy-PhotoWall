import React, {Component} from 'react'
import Photo from './Photo'
import Comments from './Comments'

class Single extends Component{
    render(){
        const {match, posts} = this.props
        const id = Number(match.params.id)
        const post = posts.find((post) => post.id === id)
        const commentList = this.props.comments[id]  || []
        const index = this.props.posts.findIndex((post) => post.id === id)
        return (
            <div className='single-photo'>
                <Photo post={post} {...this.props} index={index}/>
                <Comments saveComment={this.props.saveComment} commentList={commentList} postID={id}/>
            </div>
        )
    }
}

export default Single
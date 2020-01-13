import React, {Component} from 'react'

class Comments extends Component{

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        const comment = event.target.elements.comment.value
        this.props.saveComment(comment, this.props.postID)
        // this.props.addComment(comment, this.props.postID)
        event.target.elements.comment.value = ''
    }

    render(){
        // console.log(this.props.commentList)
        return(
            <div className="comment">
                {
                    this.props.commentList.map((comment, index) => {
                        return(
                            <p key={index}>{comment}</p>
                        )
                    })
                }
                <form onSubmit={this.handleSubmit} className='comment-form'>
                    <input type='text' placeholder='comment' name='comment'/>
                    <input type='submit' hidden/>
                </form>

            </div>
        )
    }
}

export default Comments
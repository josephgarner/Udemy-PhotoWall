import React, {Component} from 'react'

class AddPhoto extends Component{
    
    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const imageDescript = event.target.elements.description.value
        const post ={
            id: Number(new Date()),
            description: imageDescript,
            imageLink: imageLink
        }
        if(imageLink && imageDescript !== null){
            this.props.onAddPhoto(post)
        }
    }

    render(){
        return(
            <div>
                <h1>PhotoWall Add Photo</h1>
                <form onSubmit={this.handleSubmit} className='form'>
                    <input type='text' name='link' placeholder='Link'/>
                    <input type='text' name='description' placeholder='Description'/>
                    <button>Post</button>
                </form>
            </div>
        )
    }
}

export default AddPhoto
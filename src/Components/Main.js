import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'


class Main extends Component{

    constructor(){
        super()
        this.state = {
            posts: [{}]
        }

        this.removePhoto = this.removePhoto.bind(this);
        // this.addPhoto = this.
    }

    removePhoto(postRemoved){
        console.log(postRemoved.description);
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }

    // componentDidMount(){
    //     const data = fetchDatabase();
    //     this.setState({
    //         posts: data
    //     })
    // }

    addPhoto(postSubmitted){
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    render(){
        console.log(this.state.posts)
        return(
            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title = {'PhotoWall'}/>
                        <PhotoWall posts = {this.state.posts} onRemovePhoto={this.removePhoto}/>
                    </div>
                )}/>
                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')
                    }}/>
                )}/>
            </div>
        )
    }
}




export default Main

/*
    rl("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.eot?#iefix") format('embedded-opentype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.woff") format('woff'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.ttf") format('truetype'), url("https://cdn.rawgit.com/milktronics/beaglegr.am/master/public/fonts/billabong-webfont.svg#billabongregular") format('svg');
    url("https://image.flaticon.com/icons/svg/60/60740.svg") center no-repeat;
*/
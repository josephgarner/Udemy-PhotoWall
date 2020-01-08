import React, {Component} from 'react'
import Title from './Title'
import PhotoWall from './Photowall'
import AddPhoto from './AddPhoto'
import {Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Main extends Component{
    render(){
        return(
            <div>
                <h1>
                    <Link to='/'>PhotoWall</Link>
                </h1>
                <Route exact path="/" render={() => (
                    <div>
                        
                        {/* <PhotoWall posts = {this.state.posts} onRemovePhoto={this.removePhoto}/> */}
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>
                <Route path="/AddPhoto" render={({history}) => (
                    <AddPhoto {...this.props}/>
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
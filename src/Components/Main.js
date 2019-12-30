import React, {Component} from 'react'
import List from './List'
import Title from './Title'

class Main extends Component{
    render(){
        return(
            <div>
                <Title title = {'To Dos'}/>
                <List tasks = {['Mow The Lawn', "Walk the Dog"]}/>
                <List tasks = {['Hose the Driveway','Finish the Laundry']}/>
            </div>
        );
    }
}

export default Main
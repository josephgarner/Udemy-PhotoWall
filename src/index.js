import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class List extends Component{
    render(){
        return(
            <ol> 
                { this.props.tasks.map((task, index) => <li key={index}>{task}</li>)}
            </ol>
        );
    }
}

class Title extends Component{
    render(){
        return(
            <h1>{this.props.title}</h1>
        );
    }
}

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

ReactDOM.render(<Main/>, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import Repeat from './Repeat.jsx';

class App extends React.Component {
   constructor() {
      super();

      this.handleChanges = this.handleChanges.bind(this);
      
      this.state = {
         data: 
         [
            {
               id: 1,
               url : "./images/image1.jpg",
               Name: 'Muftau'
               
            },
            
            {
               id: 2,
               url : "./images/image2.jpg",
               Name: 'Mikko'
            },
            {
               id: 3,
               url : "./images/image3.jpg",
               Name: 'Jenni'
               
            },
            
            {
               id: 4,
               url : "./images/image4.jpg",
               Name: 'Abdul'
            }
         ]
      }

   }

   handleChanges(){

      //this.setState({id: 4,url : "./images/image4.jpg",Name: 'Abdul' })
      this.state.data.push(this.state.data[Math.floor(Math.random()* this.state.data.length)]/*{id: 4,url : "./images/image4.jpg",Name: 'Abdul'}*/);

      // does update only the state object
      this.setState(this.state);
      // highly recommended to avoid using it
      //this.forceUpdate();
   }

   render() {
      let style = {
         control : {
            paddingTop: '20px',
            clear: 'both'
         }
      }
      return (
         <div>
           
            <div>
               { this.state.data.map((content, i) => <Repeat key = {i} content = {content}/> ) }
                <div style={style.control}><a className="btn btn-success col-md-3" onClick={this.handleChanges}>Add content</a></div>
            </div>

         </div>
      );
   }
}

// could also pass properties from the main componet to the child componet----
ReactDOM.render(<App />, document.getElementById('app'));
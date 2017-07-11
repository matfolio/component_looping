import React from 'react';

class Repeat extends React.Component {

   render() {
   	  const style = {
   	  	main : {
   	  		 float:'left',
   	  		 marginTop:'20px',
   	  		 border: '2px solid #cd5c5c',
   	  		 backgroundColor: '#cd5c5c',
   	  		 width:'170px'
   	  		 
   	  	},
   	  	content : {
   	  		width:'150px',
   	  		backgroundColor: '#ccc',
   	  		color: '#636f54',
   	  		fontSize: '20px',
   	  		fontFamily: 'Sofia',
   	  		padding: '10px',
   	  		textAlign:'center',
   	  		border: '2px solid #636f54',
   	  		borderBottomRightRadius: '5px' ,
   	  		borderBottomLeftRadius: '5px' 		  		

   	  	},
   	  	image : {
   	  		width:'150px',
   	  		border: '2px solid #636f54',
   	  		borderTopLeftRadius: '5px',
   	  		borderTopRightRadius: '5px',
   	  		height:'150px'

   	  	}
   	  }
      return (
         <div style={style.main}>
         
         	<div><img src={this.props.content.url} alt="./images/image1.jpg" style={style.image}/></div>
         	<div style={style.content}> {this.props.content.Name} </div>
        

         </div>
      );
   }
}
export default Repeat;
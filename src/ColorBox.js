import React, { Component } from 'react';

class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  // render() {
  //   return (
  //     // <div className="color-box" style={{opacity: null /*replace null with the value*/}}>
  //     <div className="color-box" style={{opacity: this.props.opacity}}>
  //       {/* your conditional code here! */}
  //       {this.props.opacity >= 0.2 ? <ColorBox opacity = {this.props.opacity - 0.1} /> : null }
  //       {console.log(this.props.opacity)}
  //     </div>
  //   )
  // }

  render() {
    
    if(this.props.opacity >= 0.2) {
      return(
        <div className="color-box" style={{opacity: this.props.opacity}}>
          < ColorBox opacity = {this.props.opacity - 0.1} />  
          {console.log(this.props.opacity)}
        </div>
      )
    } else {
      return null
    }

  }


  

}

export default ColorBox;


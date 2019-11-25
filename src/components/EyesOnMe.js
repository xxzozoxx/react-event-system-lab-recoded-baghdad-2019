// Code EyesOnMe Component Here
import React from 'react'
class EyeOnMe extends React.Component {
  handleFoucs = () =>(console.log('Good!'))
  handleBlur = () =>(console.log('Hey! Eyes on me!'))
render(){
    return(
        <div>
         <button onFocus={this.handleFoucs} onBlur={this.handleBlur}></button>
        </div>
    )
}
}
export default EyeOnMe;
import React from 'react'
 
import UserClass from './UserClass.jsx/UserClass'

class About extends React.Component{
  constructor(props){
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount(){
    console.log("Parent componentDidMount");
  }
  render(){
    console.log("Parent Render");

    return(
      <><h1>About</h1>
       <UserClass name={"Iqrar From Class"} location={"Indore from Class"}/>
       </>
    )
  }
  
}
// const About = () => {
//   return (
//     <><h1>About</h1>
//     <UserClass name={"Iqrar From Class"} location={"Indore from Class"}/>
//     </>
//   )
// }

export default About

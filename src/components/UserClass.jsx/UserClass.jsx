import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props);  //it is important

        // state is a reserved keyword
        this.state ={
            // count1:0,
            // count2:3
            userInfo:{
                name:'',
                location:''
            }
        };    
        console.log("Child constructor");

    }
    async componentDidMount(){
        console.log("Child componentDidMount");
        const user =await fetch("https://api.github.com/users/akshaymarch7");
        const json=await user.json();

        this.setState({
            userInfo:json
        })

        //upddate state variable
      }


      componentDidUpdate(){
        console.log("Child componentDidUpdate");
      }

      componentWillUnmount(){
        console.log("Child componentWillUnmount");
      }
    render(){
        console.log("Child render");

        //const {name,location} =this.props;
       // const {count1,count2} =this.state;
       const {name,location} =this.state.userInfo
       console.log(this.state.userInfo);
     return    (
            <div className="user-card">
                <h2>Name:{name}</h2>
                <h3>Location:{location}</h3>
                {/* <p>{count1}</p> 
                <button onClick={()=>{
                    this.setState({
                        count1:this.state.count1 + 1
                    });
                }}>Increase</button>
                <button onClick={()=>{
                    this.setState({
                        count1 :this.state.count1 -1
                    })
                }}>Decrease</button> */}
                <h4>Contact: @iqrar@gmail.com</h4>
            </div>
        )
    }
}

 export default UserClass;
# namaste-react


# parcel
- Dev build
- local server
- File Watching Algorithm
- HMR :Hot module Replacement
- Gives faster build- bcz of caching(parcel-caching)
- Image optimization
- minification of production build
- compressed file
- consistent hashing
- code splitting
- diffrential bundling
- good error handling in browser with more details
- tree shaking -remove unsed code for you
- Different build for dev and prod build

# Namaste Food
/**

Header
Logo
Nav Items
Body
Search
card-Container
Card
 - Img
 - Name of Res, Star Rating, cuisine, delery tie
Footer
Copyright
Links
Address
Contact */

# Two types of Export/Import

export default Header;  =====> import Header from "path";

Named Export/Import
export const userList;    =====> import {userList} from "path";

#  //with dependency array, useEffect will get called only once after Component is rendered
- without dependency array, useEffect will get called Every time your component rendered 
- and component is re-rendered every time state get changed



# Component LifCycle

# MOUNTING
- Constructor()  ===>   render(){render with shimmer UI}  ===>  componentDidMount(){APi Call}   

# UPDATE
- ===>this.setState() ===> update UI{with updated API data}===>  componentDidUpdate()  

# UNMOUNT
- ===> componentWillUpdate()

 -----------------------

 # UNMOUNTING / componentWillUnmount()

- setInterval or setTimeout will keep running in background even if you moved away from component.
- so always remove that from memory.

- useEffect(()=>{
    const timer= setInterval(()=>{
        console.log("Interval");
    },1000)

# unmount
return() =>{
    clearinterval(timer);
}
 },[])

# 
- chunking
-  code splitting
-  lazy loading
- dynamic code


# Redux
- Install @reduxjs/toolkit and react-redux
- Build our store
- connect store to our app
- slice {cartSlice}
- dispatch (action)
- selectore
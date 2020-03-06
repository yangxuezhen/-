// import React , {Component} from 'react'
// import { Link } from 'react-router-dom';
// // import Tabbar from './tabbar/index.js'
// import './index.css'

// const tabbarArr = [
    
//     {
//         // img:'icon-home',
//         text:'首页',
//         path: "./"
//     },
//     {
//         // img:'icon-fenlei',
//         text:'分类',
//         path: "./Mine"
//     },
//     {
//         // img:'icon-gouwuche',
//         text:'购物车',
//         path:"./Court"
//     },
//     {
//         // img:'icon-yonghu',
//         text:'用户',
//         path: "./Cerem"
//     }
// ]
// export default class Tabbar extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             index:0
//         }
//     }  
//     render() {
//       return (
//         <div className="tabbar">
//           <div className="tabbar-content">
//               {
//                   tabbarArr.map( (item,key)=>{
//                       return(   
//                           <Link to={item.path} className={"tarbar-item " + (this.state.index === key ? 'active' : '')} key={key} onClick={()=>this.itemChange(key)}>
//                                   <div className={'iconfont '+ item.img}></div>
//                                   <p>{item.text}</p>
//                           </Link>
//                       )
//                   })
//               }
//           </div>
      
//         </div>
//       )
//     } 

//     itemChange(key){ this.setState({ index: key })
//     }
// }  



import React , {Component} from 'react'
import { Link } from 'react-router-dom';
import './index.css'

const tabbarArr = [
    // {
    //     // img:'Ceremony',
    //     text:'首页',
    //     path:'./'
    // },
    // {
    //     // img:'Ceremony',
    //     text:'礼帐单',
    //     path:'./Cerem'
    // },
    // {
    //     // img:'Ceremony',
    //     text:'礼事情',
    //     path:'./Court'
    // },
    
    // {
    //     // img:'Ceremony',
    //     text:'我的',
    //     path:'./Mine'
    // }

    
    
    {
        img:'icon-home',
        text:'首页',
        path: "./home"
    },
    {
        img:'icon-fenlei',
        text:'分类',
        path: "./col"
    },
    {
        img:'icon-gouwuche',
        text:'购物车',
        path:"./cart"
    },
    {
        img:'icon-yonghu',
        text:'用户',
        path: "./login"
    },



]



 
export default class Tabbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            index:0
        }
    }  
    render() {
      return (
        <div className="tabbar">
          <div className="tabbar-content">
              {
                  tabbarArr.map( (item,key)=>{
                      return(   
                          <Link to={item.path} className={"tarbar-item " + (this.state.index === key ? 'active' : '')} key={key} onClick={()=>this.itemChange(key)}>
                                  <div className={'iconfont '+ item.img}></div>
                                  <p>{item.text}</p>
                          </Link>
                      )
                  })
              }
          </div>
      
        </div>
      )
    }
   
   
    itemChange(key){
       this.setState({
           index: key
       })
    }
}  



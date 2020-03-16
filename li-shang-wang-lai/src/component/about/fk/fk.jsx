import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './fk.css'




export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id="sz">
			<NavLink to="/about">
                    <div id="left"><img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" /></div>
                </NavLink>
				<p>建议反馈</p>
			</div>
			<div className="main">感谢您对礼尚往来的支持，点击输入反馈信息...</div>
			<div className="content">
				<p>邮箱：</p>
				<span>输入邮箱</span>
			</div>
		</div>
    )
}
}
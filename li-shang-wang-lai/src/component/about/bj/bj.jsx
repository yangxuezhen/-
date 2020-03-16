import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './bj.css'



export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id="bj">
				<NavLink to="/about">
                    <div id="left"><img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" /></div>
                </NavLink>
				<p>帮助</p>
			</div>
			<div id="bj-box">
				<div id="bj-span">通过礼尚往来记账的好处</div>
				<div id="bj-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			<div id="bj-box">
				<div id="bj-span">如何记账</div>
				<div id="bj-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			
			<div id="bj-box">
				<div id="bj-span">如何记事</div>
				<div id="bj-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			
			<div id="bj-box">
				<div id="bj-span">如何发请柬</div>
				<div id="bj-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			<div id="bj-box">
				<div id="bj-span">如何看盈亏</div>
				<div id="bj-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			<div id="bj-box">
				<div id="bj-span">如何计算婚宴预订桌数</div>
				<div id="bj-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
		</div>
    )
}
}

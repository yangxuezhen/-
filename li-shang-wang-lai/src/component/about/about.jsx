import React,{Component} from 'react'
import './about.css'
import {NavLink} from 'react-router-dom'
export default class about extends Component{
constructor(){
    super()
}
render(){
    return(
        <div>
			<div id='me'>
				<div id="me-head">我的</div>
				<div id='me-img'>
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			<div id="dengl">
				<div id="dengl-img">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
				<div id="dengl-span">调用QQ,微信昵称</div>
				<div id="dengl-img2">
					<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
				</div>
			</div>
			<NavLink to="/sz">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
					<div id="gengd-span">设置</div>
					<div id="gengd-img2">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
				</div>
			</NavLink>
			<NavLink to="/fk">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
					<div id="gengd-span">反馈</div>
					<div id="gengd-img2">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
				</div>
			</NavLink>
			<NavLink to='/bj'>
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
					<div id="gengd-span">帮助</div>
					<div id="gengd-img2">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
				</div>
			</NavLink>
			<NavLink to='/gy'>
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
					<div id="gengd-span">关于</div>
					<div id="gengd-img2">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
				</div>
			</NavLink>
			<NavLink to="/fx">
				<div id="gengd">
					<div id="gengd-img">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
					<div id="gengd-span">分享</div>
					<div id="gengd-img2">
						<img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg"/>
					</div>
				</div>
			</NavLink>
		</div>
    )
}
}

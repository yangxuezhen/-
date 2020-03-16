import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import './gy.css'

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
				<p>关于</p>
			</div>
			<div className="div">
				<div className="icon">icon</div>
				<div className="g-main">
					<p>礼尚往来</p>
					<span>
						V1.0.0
					</span>
					
				</div>
				<div className="footer">
				
						您身边的家庭礼尚往来记账管理专家，礼数清晰，礼事提醒，从此不再担忧送礼收礼问题
					
				</div>
			</div>
			
			
		</div>
    )
}
}

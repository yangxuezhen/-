import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './shouye.css'
export default class Home extends Component {
	constructor() {
		super()
	}
	render() {
		return (
			<div id="Home">
				<div id="home-top">
					<div id="home-top1">
						<div>
							<p>历史收礼</p>
							<p>5500.00</p>
						</div>
						<div className="lishiyk">
							<p style={{ color: '#fff', fontWeight: "700", lineHeight: "25px" }}>历史盈亏</p>
							<p style={{ color: '#fff', fontWeight: "700" }}>2948.00</p>
						</div>
						<div>
							<p>历史送礼</p>
							<p>2500.00</p>
						</div>
					</div>
					<div id="home-top2">
						<div>
							<p>6月收礼</p>
							<p>5500.00</p>
						</div>
						<div style={{ borderRadius: '50%', backgroundColor: 'skyblue', }}>
							<p style={{ color: '#fff', fontWeight: "700", lineHeight: "25px" }}>本月盈亏</p>
							<p style={{ color: '#fff', fontWeight: "700" }}>2948.00</p>
						</div>
						<div>
							<p>6月送礼</p>
							<p>2500.00</p>
						</div>
					</div>
				</div>
				<div id="home-bottom">
					<span>排行</span>
					<span>用户</span>
					<span>历史盈亏</span>
					<span>本月盈亏</span>
					<span><NavLink to="/Gengduo">更多</NavLink></span>
				</div>
				<div id="home-bottom2">
					<span>1</span>
					<span>JAMES 刘</span>
					<span>95685.00</span>
					<span>4500.00</span>
					<span></span>
				</div>
				<div id="home-bottom2">
					<span>1</span>
					<span>JAMES 刘</span>
					<span>95685.00</span>
					<span>4500.00</span>
					<span></span>
				</div>
				<div id="home-bottom2">
					<span>1</span>
					<span>JAMES 刘</span>
					<span>95685.00</span>
					<span>4500.00</span>
					<span></span>
				</div>
				<div id="home-bottom2">
					<span>1</span>
					<span>JAMES 刘</span>
					<span>95685.00</span>
					<span>4500.00</span>
					<span></span>
				</div>
				<div id="home-bottom2">
					<span>1</span>
					<span>JAMES 刘</span>
					<span>95685.00</span>
					<span>4500.00</span>
					<span></span>
				</div>
			</div>
		)
	}
}

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './gd.css'


function RenderTabs(tabs, tab, changeTabs) {
    return tabs.map((item, idx) => {
        if (!item.isshow) {
            return null;
        }
        return (
            <li 
                key={item.index}
                className={tab === idx ? 'onto' : ''}
                onClick={() => { changeTabs(idx) }}>
                {item.name}
            </li>
        )
    })
}

function showMain(idx) {
    switch (idx) {
        case 0:
            return <div>
            <div>
                <div id="home-bottom">
                    <span>排行</span>
                    <span>用户</span>
                    <span>历史盈亏</span>
                    <span>本月盈亏</span>
                </div>
                <div id="home-bottom2">
                    <span>1</span>
                    <span>JAMES 刘</span>
                    <span>95685.00</span>
                    <span>4500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>2</span>
                    <span>JAMES 刘</span>
                    <span>85685.00</span>
                    <span>5500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>3</span>
                    <span>JAMES 刘</span>
                    <span>75685.00</span>
                    <span>6500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>4</span>
                    <span>JAMES 刘</span>
                    <span>65685.00</span>
                    <span>7500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>5</span>
                    <span>JAMES 刘</span>
                    <span>55685.00</span>
                    <span>8500.00</span>
                </div>
            </div>
        </div>
            break;  
        case 1:
            return <div>
            <div>
            <div id="home-bottom">
                    <span>排行</span>
                    <span>用户</span>
                    <span>历史盈亏</span>
                    <span>本月盈亏</span>
                </div>
                <div id="home-bottom2">
                    <span>1</span>
                    <span>JAMES 刘</span>
                    <span>95685.00</span>
                    <span>4500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>2</span>
                    <span>JAMES 刘</span>
                    <span>85685.00</span>
                    <span>4500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>3</span>
                    <span>JAMES 刘</span>
                    <span>75685.00</span>
                    <span>4500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>4</span>
                    <span>JAMES 刘</span>
                    <span>65685.00</span>
                    <span>4500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>5</span>
                    <span>JAMES 刘</span>
                    <span>55685.00</span>
                    <span>4500.00</span>
                </div>
            </div>
        </div>
            break;
        case 2:
            return <div>
            <div>
            <div id="home-bottom">
                    <span>排行</span>
                    <span>用户</span>
                    <span>历史盈亏</span>
                    <span>本月盈亏</span>
                </div>
                <div id="home-bottom2">
                    <span>1</span>
                    <span>JAMES 刘</span>
                    <span>45685.00</span>
                    <span>8500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>2</span>
                    <span>JAMES 刘</span>
                    <span>55685.00</span>
                    <span>7500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>3</span>
                    <span>JAMES 刘</span>
                    <span>65685.00</span>
                    <span>6500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>4</span>
                    <span>JAMES 刘</span>
                    <span>85685.00</span>
                    <span>5500.00</span>

                </div>
                <div id="home-bottom2">
                    <span>5</span>
                    <span>JAMES 刘</span>
                    <span>95685.00</span>
                    <span>4500.00</span>
                </div>
            </div>
        </div>
            break;
        default:
            break;
    }
}

export default class Manage extends Component {

    constructor(props) {
        super(props)
        const tabs = [
            { name: '按盈亏', index: 0, isshow: true },
            { name: '按收入', index: 1, isshow: true },
            { name: '按支出', index: 2, isshow: true }
        ]
        this.state = {
            tab: 0,
            tabs
        }
    }
    changeTabe = (idx) => {
        console.log(idx);
        this.setState({
            tab: idx
        });
    }
    render() {
        const { tabs, tab } = this.state;
        return (
            <div className="tabchange_box">
                <div className="g_top">
                    <NavLink to="/">
                         <div id="left"><img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" /></div>
                     </NavLink>
                     <div id="right"><p>排行榜</p></div>
                 </div>
                <ul>
                    {RenderTabs(tabs, tab, this.changeTabe)}
                </ul>
                
                {showMain(tab)}
            </div>
        )
    }
}



































// export default class about extends Component {
//     constructor() {
//         super()
//     }
//     render() {
//         return (
//             <div>
                // <div className="g_top">
                //     <NavLink to="/">
                //         <div id="left"><img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" /></div>
                //     </NavLink>
                //     <div id="right"><p>排行榜</p></div>
                // </div>
                // <div id="g_two">
                //     <div><p>按盈亏</p></div>
                //     <div><p>按收入</p></div>
                //     <div><p>按支出</p></div>
                // </div>
                // <div>
                //     <div id="home-bottom">
                //         <span>排行</span>
                //         <span>用户</span>
                //         <span>历史盈亏</span>
                //         <span>本月盈亏</span>
                //     </div>
                //     <div id="home-bottom2">
                //         <span>1</span>
                //         <span>JAMES 刘</span>
                //         <span>95685.00</span>
                //         <span>4500.00</span>

                //     </div>
                //     <div id="home-bottom2">
                //         <span>1</span>
                //         <span>JAMES 刘</span>
                //         <span>95685.00</span>
                //         <span>4500.00</span>

                //     </div>
                //     <div id="home-bottom2">
                //         <span>1</span>
                //         <span>JAMES 刘</span>
                //         <span>95685.00</span>
                //         <span>4500.00</span>

                //     </div>
                //     <div id="home-bottom2">
                //         <span>1</span>
                //         <span>JAMES 刘</span>
                //         <span>95685.00</span>
                //         <span>4500.00</span>

                //     </div>
                //     <div id="home-bottom2">
                //         <span>1</span>
                //         <span>JAMES 刘</span>
                //         <span>95685.00</span>
                //         <span>4500.00</span>

                //     </div>
                // </div>
//             </div>
//         )
//     }
// }

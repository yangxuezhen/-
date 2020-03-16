import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './lishi.css'


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
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>待参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div><div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>待参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>待参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>待参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>待参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
            </div>
            break;
        case 1:
            return <div>
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>已参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div><div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>已参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>已参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
                <div id="th_bot">
                    <div id="bot_left">
                        {/* <img src="http://ku.90sjimg.com/element_origin_min_pic/00/93/50/2656f2a0ce4cd9d.jpg" alt=""/> */}
                        <p>大锤搬家请客</p>
                        <span style={{ display: 'inline-black', padding: '5px 5px', borderRadius: '5px', background: '#ccc', fontSize: '12px' }}>收</span>
                        <span>搬家地址</span>
                    </div>
                    <div id="bot_rights">
                        <p>已参加</p>
                        <span>2020.3.15</span>
                    </div>
                </div>
            </div>
            break;
        case 2:
            return <div>我是tab {idx}</div>
            break;
        default:
            break;
    }
}

export default class Manage extends Component {

    constructor(props) {
        super(props)
        const tabs = [
            { name: '待参加', index: 0, isshow: true },
            { name: '已参加', index: 1, isshow: true }
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
            <div className="tabchange-box">
                <ul>
                    {RenderTabs(tabs, tab, this.changeTabe)}
                </ul>
                {showMain(tab)}
            </div>
        )
    }


    // state = {
    //     activeUrl: '/',
    //     routerList: [
    //         {
    //             url: '/',
    //             pathName: '收礼'
    //         }, {
    //             url: '/user',
    //             pathName: '送礼'
    //         }, {
    //             url: '/about',
    //             pathName: 'about'
    //         }
    //     ]
    // }

    // componentDidMount() {
    //     this.setState({
    //         activeUrl: window.location.pathname
    //     })
    // }

    // active = (path) => {
    //     this.setState({
    //         activeUrl: path
    //     })
    // }
    // render() {
    //     const { routerList } = this.state;
    //     // return (
    //     //     <div>
    //     //         {
    //                 routerList.map((item,i) => {
    //                     return (
    //                         <div>
    //                             <div id='one' key={i} className={`nav-link ${this.state.activeUrl === item.url ? 'onto' : ''}`} to={item.url} onClick={() => this.active(item.url)}>
    //                                 <span>{item.pathName}</span>
    //                             </div>
    //                             <div id="two" className={`nav-link ${this.state.activeUrl !== item.url ? 'show' : ''}`}>
    //                                 123
    //                             </div>
    //                         </div>
    //                     )
    //                 })
    //     //         }
    //     //     </div>
    //     // );
    // }
}




import React,{Component} from 'react'
import {Switch,Redirect,Route} from 'react-router-dom'
import Header from '../component/header/header'
import Shou from '../component/shouye/shouye'
import Director from '../component/lishi/lishi'
import Manage from '../component/lizhang/lizhang'
import Gengduo from '../component/gengduo/gd'
import About from '../component/about/about'
import Index from './index.css'
import SZ from '../component/about/sz/sz'
import GY from '../component/about/gy/gy'
import FX from '../component/about/fx/fx'
import FK from '../component/about/fk/fk'
import BJ from '../component/about/bj/bj'
function router() { 
    return(
        <div id="max">
            <div id="box">
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Shou}/>
                <Route path='/manage' component={Manage}/>
                <Route path='/director' component={Director}/>
                <Route path='/gengduo' component={Gengduo}/>
                <Route path='/about' component={About}/>
                <Route path='/sz' component={SZ}/>
                <Route path='/gy' component={GY}/>
                <Route path='/fx' component={FX}/>
                <Route path='/fk' component={FK}/>
                <Route path='/bj' component={BJ}/>
                <Route component={Shou}/>
            </Switch>
        </div>
        </div>
    )
 }

  export default router
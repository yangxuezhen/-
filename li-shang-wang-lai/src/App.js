import React,{Comment} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import routeList from './routeList'
import  RouteWithSubRoutes from "./components/routeWithSubRoutes"
import Tabbar from "./components/tabbar"
import './App.css';

class App extends Comment{
  render(){
    return(
      <Router>
        <div>
          <Tabbar/>
          {
            routeList.map((item,key)=>{
              return(
                <RouteWithSubRoutes key={key} {...item}/>
              )
            })
          }
        </div>
      </Router>
    );
  }
}


import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Home'
import Basic from './Components/BasicHooks/Basic'
import Reducer from './Components/useReducer/Reducer'
import Context from './Components/ContextAPI/ContextAPI'
import ReducerContext from './Components/Reducer_x_Context/ReducerXContext'
import DataFetching from './Components/useReducer2/DataFetching'
import "./App.css";
import Callback from "./Components/Callback/Callback";
import Memo from "./Components/Memo/Memo";
import useRef from "./Components/useRef/useRef";
import Doc from "./Components/CustomHooks/useDocumentTitle/Doc";
import Counter from "./Components/CustomHooks/useCounter/Counter";
import Input from "./Components/CustomHooks/useInput/Input";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' component={Home}/>
        <Route path='/basic' component={Basic}/>
        <Route path='/reducer' component={Reducer}/>
        <Route path='/context' component={Context}/>
        <Route path='/reducer-context' component={ReducerContext}/>
        <Route path='/data-fetching' component={DataFetching}/>
        <Route path='/callback' component={Callback}/>
        <Route path='/memo' component={Memo}/>
        <Route path='/ref' component={useRef}/>
        <Route path='/doc' component={Doc}/>
        <Route path='/usecounter' component={Counter}/>
        <Route path='/useinput' component={Input}/>
      </BrowserRouter>
    </div>
  );
};

export default App;

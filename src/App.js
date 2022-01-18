import './App.css';
import React, { Component } from 'react';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';
import UserGreeting from './Components/UserGreeting';
import NameList from './Components/NameList';
import Form from './Components/Form';
import LifeCycleA from './Components/LifeCycleA';
import FragmentDemo from './Components/FragmentDemo';
import PureComp from './Components/PureComp';
import ParentComp from './Components/ParentComp';
import RefDemo from './Components/RefDemo';
import FocusInput from './Components/FocusInput';
import FRParent from './Components/FRParent';
import PortalDemo from './Components/PortalDemo';
import Hero from './Components/Hero';
import ErrorBoundary from './Components/ErrorBoundary';
import Count from './Components/Count';
import Hover from './Components/Hover';
import CountTwo from './Components/CountTwo';
import HoverCountTwo from './Components/HoverCountTwo';
import CounterProp from './Components/CounterProp';

// App is a component
class App extends Component{
  render() {
    return (
      <div className="App">
        {/* <Message/> */}

        {/* <Counter></Counter> */}

        {/* <Greet name="Vishal" heroName="Batman">
          <p>This is a children props</p>
        </Greet>
        <Greet name="Karan" heroName="SpiderMan">
          <button>Click Me</button>
        </Greet>
        <Greet name="Vishwas" heroName="AntMan"/>
        <Welcome name="Vishal" heroName="Batman">
          <button>Do not click me!</button>
        </Welcome>
        <Welcome name="Karan" heroName="Spiderman"/>
        <Welcome name="Vishwas" heroName="Antman"/> */}

        {/* <Greet name="Vishal" heroName="Batman"></Greet>
        <Welcome name="Vishal" heroName="Batman"></Welcome> */}

        {/* <FunctionClick></FunctionClick> */}
        {/* <EventBind></EventBind> */}

        {/* <ParentComponent></ParentComponent> */}

        {/* <UserGreeting></UserGreeting> */}

        {/* <NameList></NameList> */}

        {/* <Form></Form> */}
        {/* <LifeCycleA></LifeCycleA> */}
        {/* <FragmentDemo></FragmentDemo> */}
        {/* <ParentComp></ParentComp> */}
        {/* <RefDemo></RefDemo> */}
        {/* <FocusInput></FocusInput> */}
        {/* <FRParent></FRParent> */}
        {/* <PortalDemo></PortalDemo> */}
        {/* <ErrorBoundary>
        <Hero heroName="Spiderman"></Hero>
        <Hero heroName="Batman"></Hero>
        <Hero heroName="Joker"></Hero>
        </ErrorBoundary> */}
        {/* <Count name="Vishal"></Count>
        <Hover></Hover> */}
        {/* <CountTwo></CountTwo>
        <HoverCountTwo></HoverCountTwo> */}

        <CounterProp render={(count, incrementCount) => (<CountTwo count={count} 
        incrementCount={incrementCount}></CountTwo>)}></CounterProp>

        <CounterProp render={(count, incrementCount) => (<HoverCountTwo count={count} 
        incrementCount={incrementCount}></HoverCountTwo>)}></CounterProp>
      </div>
    );
  }
}

export default App;

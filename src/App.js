// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import User from './components/User'
// import UserClassComponent from './components/UserClassComponent'
// import ClickEventCall from './components/ClickEventCall'
// import StateChangeFunction from './components/StateChangeFunction'
// import StateChangeTwo from './components/StateChangeTwo'
// import PropsFn from './components/PropsFn';
// import GetInputValue from './components/GetInputValue'
// import TravelPlan from  './components/TravelPlan'
// import HideAndShowElement from './components/HideAndShowElement'
// import Form1Component from './components/Form1Component'
// import ConditionalRendering from './components/ConditionalRendering';
// import BasicFormValidation from './components/BasicFormValidation'
// import PassFunctionAsProps from './components/PassFunctionAsProps';
// import ConstructorComponent from './components/lifecycle/ConstructorComponent';
// import RenderLifeCycleMethodComponent from './components/lifecycle/RenderLifeCycleMethodComponent' ;
// import ComponentDidMountComponent from './components/lifecycle/ComponentDidMountComponent';
// import ComponentDidUpdateCOmponent from './components/lifecycle/ComponentDidUpdateCOmponent';
// import ShouldComponentUpdateComponent from './components/lifecycle/ShouldComponentUpdateComponent';

// import MainHooks from './components/Hooks/MainHooks';

// import HandelArrayListingComponent from './components/ArrayList/HandelArrayListingComponent';
// import NestedListComponent from './components/Nesting/NestedListComponent';
// import  ReusableComponent from './components/ReuseComponent/ReusableComponent' ;
// import ParentFragmentComponent from './components/ReactFragments/ParentFragmentComponent';
// import ParentLiftingComponent from './components/LiftingStateUp/ParentLiftingComponent';
// import PureDataComponent from "./components/PureComponent/PureDataComponent"
// import UseMemeoHooksComponent from "./components/UseMemoHooks/UseMemeoHooksComponent"
// import ParentCalling from './components/Refs/ParentCalling';
// import ReactControlledComponent from './components/ControlledComponent/ReactControlledComponent'
import HocComponent from './components/HighOrderComponent/HocComponent'

function App() {
  //function to pass functrion as an prop to PassFunctionAsProps
  function getData() {
    alert( "Hello, from fuynction as an props") ;
  }
  return (
    <div className="App">
      {/* <User /> */}
      {/* <UserClassComponent /> */}
      {/* <ClickEventCall /> */}
      {/* <StateChangeFunction /> */}
      {/* <StateChangeTwo /> */}
      {/* <PropsFn name={'vishwajit vm'} /> */}
      {/* <GetInputValue /> */}
      {/* <TravelPlan /> */}
      {/* <HideAndShowElement /> */}
      {/* <Form1Component /> */}
      {/* <ConditionalRendering /> */}
      {/* <BasicFormValidation /> */}
      {/* <PassFunctionAsProps data={getData} /> */}
      {/* <ConstructorComponent /> */}
      {/* <RenderLifeCycleMethodComponent /> */}
      {/* < ComponentDidMountComponent /> */}
      {/* < ComponentDidUpdateCOmponent /> */}
      {/* <ShouldComponentUpdateComponent/> */}

      {/* Hooks */}
      {/* < MainHooks /> */}

      {/* <HandelArrayListingComponent /> */}
      {/* <NestedListComponent /> */}

      {/* <ReusableComponent /> */}
      {/* <ParentFragmentComponent /> */}
      {/* <ParentLiftingComponent /> */}
      {/* <PureDataComponent /> */}
      {/* <UseMemeoHooksComponent /> */}
      {/* <ParentCalling /> */}
      {/* <ReactControlledComponent /> */}
      <HocComponent />
    </div>
  );
}

export default App;

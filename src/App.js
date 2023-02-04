// import logo from './logo.svg';
import './App.css';
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
import PassFunctionAsProps from './components/PassFunctionAsProps';
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
      <PassFunctionAsProps data={getData} />
    </div>
  );
}

export default App;

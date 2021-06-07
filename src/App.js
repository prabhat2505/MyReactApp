import logo from './logo.svg';
import './App.css';
// import BasicForm from './Forms/BasicForm';
// import ExampleHook1 from './Forms/ExampleHook1';
// import ExampleUseRef1 from './Forms/ExampleUseRef1';
// import ExampleUseRef2 from './Forms/ExampleUseRef2';
// import Calculator from './Forms/Calculator';
// import Datafetch1 from './Forms/Datafetch1';
// import ExampleUseReducer1 from './Forms/ExampleUseReducer1';
// import ArrayMap from './Forms/ArrayMap';
// import GetDataInSateMap from './Forms/GetaDataInSateMap';
// import HorizontalLinearStepper from './Forms/HorizontalLinearStepper';
// import Registartion from './Forms/Registartion';
// import Stylesheet from './Forms/Stylesheet';
// import Register from './Forms/RegisterClass';
// import ActionLink from './Forms/ActionLink';
// import EventExample1 from './Forms/EventExample1';
// import FormValidation from './Forms/FormValidation';
// import { ForwardRefParent } from './Forms/ForwardRefParent';
// import Datafetch2 from './Forms/Datafetch2';
// import BasicExample from './RouterBasic.js/BasicExample';

import { Route, Switch, Redirect } from 'react-router-dom';
import AllQuotes from './pages/AllQuotes';
import QuoteDetail from './pages/QuoteDetail';
import NewQuote from './pages/NewQuote';
import Layout from './components/layout/Layout';
// import Updatelist from './Forms/Updatelist';
// import styled from 'styled-components';

// import ReduxBasics from './Redux/ReduxBasics';
// import Inline from './SyleType/inline';
// import DynamicsClass from './SyleType/dynamics-class';
// import CssWithProps from './SyleType/css-with-props';
//import Getadata from './fetch/getdata';

// const Flex = styled.div`
//   display: flex;

//   @media (max-width: 1006px) {
//     flex-direction: column;
//   }
//   @media (max-height: 1006px) {
//     flex-direction: column;
//   }
// `;

function App() {
  return (
    <Layout>
    <Switch>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <AllQuotes />
      </Route>
      <Route path='/quotes/:quoteId'>
        <QuoteDetail />
      </Route>
      <Route path='/new-quote'>
        <NewQuote />
      </Route>
    </Switch>
  </Layout>
  );
}

export default App;

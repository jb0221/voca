import DayList from './component/DayList';
import Day from './component/Day';
import Header from './component/Header'; 
import CreateWord  from './component/CreateWord';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import EmptyPage from './component/EmptyPage';
import CreateDay from './component/CreateDay';
import Test from './component/Test';
function App() {
  
  return ( 
    <BrowserRouter>
    <div className="App">
      <Header />
      <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay/>   
          </Route>
          <Route>
            <EmptyPage/>
          </Route>
      </Switch>

     
    </div>
  </BrowserRouter>

 
  );
}

export default App;

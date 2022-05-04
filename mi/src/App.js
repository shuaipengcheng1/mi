
import './App.css';
import { Route, Switch } from 'react-router-dom'
import route from './Router';
function App() {
  return (
    <Switch>

      {
        route.map((item, index) => {
          return (

            <Route  path={item.path} component={()=>(<item.component/>)} key={index}/>
          )
        })
      }
    </Switch>
  )
}

export default App;

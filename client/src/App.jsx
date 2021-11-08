import { BrowserRouter as Router } from 'react-router-dom'
import { useRoutes } from './routes';

import 'materialize-css'

const isAuthenticated = false

function App() {

  const routes = useRoutes(isAuthenticated)

  return (
    <Router>
      <div className='container'>
        {routes}
      </div>
    </Router>

  );
}

export default App;

import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes';

import 'materialize-css'

const isAuthenticated = false

function App() {

  const routes = useRoutes(isAuthenticated)

  return (
    <BrowserRouter>
      <div className='container'>
        {routes}
      </div>
    </BrowserRouter>

  );
}

export default App;

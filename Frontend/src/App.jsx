import { useEffect } from 'react'
import './App.css'
import AppRoutes from './routes/Routes';
import "./assets/scss/style.scss";
import "./assets/styles/header.css";
import "./assets/styles/footer.css";
// import "./assets/styles/userProfile.css"
import { reloadUser } from './actions/authActions';
import store from './store';


function App() {

  useEffect(() => {
    store.dispatch(reloadUser());
  }, []);

  return (
    <AppRoutes />
  )
}

export default App

import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom'
import './default.scss';

// Components
import AdminToolbar from "./component/AdminToolbar"
import ProductDetails from "./component/ProductsSection/ProductDetails"

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { checkUserSession } from './redux/User/user.action'

// Pages
import Header from './component/Header'
import Recovery from './pages/Recovery'
import Footer from './component/Footer'
import Homepage from './pages/Homepage';
import AccountLogin from './pages/AccountLogin'
import AccountRegister from './pages/AccountRegister'
import Admin from './pages/Admin'
import Men from './pages/Men'
import Woman from './pages/Woman'

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

function App() {

  const { currentUser } = useSelector(mapState)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession())
  }, [dispatch])

  console.log("role", currentUser)
  return (
    <div className="App">
      {currentUser && currentUser.userRole.includes("admin") ? <AdminToolbar /> : null}
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/account/login">
          <AccountLogin />
        </Route>
        <Route path="/account/register">
          <AccountRegister />
        </Route>
        <Route exact path="/account/recover" component={Recovery} />
        {currentUser && currentUser.userRole.includes("admin") ? <Route exact path="/admin" component={Admin}/> : null}
        <Route path="/product/details/:id" component={ProductDetails} />
        <Route path="/collections/men" component={Men}/>
        <Route path="/collections/woman" component={Woman}/>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

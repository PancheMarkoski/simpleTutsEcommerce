import React, {useEffect} from 'react';
import {Route, Switch} from 'react-router-dom'
import './default.scss';

// FireBase
import {auth, handleUserProfile} from './firebase/utils'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {setCurrentUser} from './redux/User/user.action'

// Pages
import Header from './component/Header'
import Recovery from './pages/Recovery'
import Footer from './component/Footer'
import Homepage from './pages/Homepage';
import AccountLogin from './pages/AccountLogin'
import AccountRegister from './pages/AccountRegister'

const mapState = ({user}) => ({
  currentUser: user.currentUser
})

function App () {

const {currentUser} = useSelector(mapState)  
const dispatch = useDispatch();
 useEffect(() => {
   
   const authListener = auth.onAuthStateChanged(async function (user) {
       if (user) 
     {
          const userRef = await handleUserProfile(user);
          setCurrentUser(user)
          userRef.onSnapshot(async snapshot => {
            await dispatch(setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            }))
          })
      } else {
        dispatch(setCurrentUser(null))
      }
      //  console.log("Current user is ", currentUser)
      return () => {
        authListener()
      }
  });
  
}, [dispatch])

console.log("snapshot", currentUser)
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route exact path="/" component={Homepage}/>
          <Route  path="/account/login">
            <AccountLogin />
          </Route>
          <Route  path="/account/register">
            <AccountRegister />
          </Route>
          <Route exact path="/account/recover" component={Recovery}/>
        </Switch>
      <Footer />
    </div>
  );

  
}

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser
// })

export default App;

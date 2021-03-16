import React, { useContext, useEffect, useMemo } from 'react';
import { useOktaAuth } from '@okta/okta-react';
import { Link } from 'react-router-dom';
import './nav.scss';
import { Button } from '../../styles/Styles';
import { UsersContext } from '../../state/contexts/UsersContext';
import { APIContext } from '../../state/contexts/APIContext';

function NavBar() {
  const { authState, authService } = useOktaAuth();
  const [memoAuthService] = useMemo(() => [authService], [authService]);
  // context state
  const { userRole, setUserRole, setUserInfo } = useContext(UsersContext);
  const { getUserID } = useContext(APIContext);

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        if (isSubscribed) {
          setUserInfo(info);
          console.log(info.name); //added
          console.log(info.email); //added
        }
        return getUserID(
          `${process.env.REACT_APP_API_URI}/profiles/${info.sub}`,
          authState
        );
      })
      .then(res => {
        setUserRole(res.role);
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
    // * The line below is needed to drop the warning in console
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [memoAuthService, authState]);

  if (userRole === 'groomer') {
    return (
      <div className="App-Nav">
        <div className="img-container">
          <div className="express-logo">
            <span className="groomer-one">Express</span>{' '}
            <span className="groomer-two">Groomer</span>
          </div>
        </div>

        <nav className="nav-bar">
          <Link className="anchor" to="/info">
            Info
          </Link>
          <Link className="anchor" to="/groomer-dashboard">
            Dashboard
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Button
            type="primary"
            className={'anchor'}
            onClick={() => authService.logout()}
          >
            Logout
          </Button>
        </nav>
      </div>
    );
  } else if (userRole === 'customer') {
    return (
      <div className="App-Nav">
        <div className="img-container">
          <Link className="anchor" to="/info">
            <div className="express-logo">
              <span className="groomer-one">Express</span>{' '}
              <span className="groomer-two">Groomer</span>
            </div>
          </Link>
        </div>

        <nav className="nav-bar">
          <Link className="anchor" to="/customer-dashboard">
            Dashboard
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Link className="anchor" to="/info">
            Info
          </Link>
          <Button
            type="primary"
            className={'anchor'}
            onClick={() => authService.logout()}
          >
            Logout
          </Button>
        </nav>
      </div>
    );
  } else {
    return (
      <div className="App-Nav">
        <div className="img-container">
          <Link className="anchor" to="/info">
            <div className="express-logo">
              <span className="groomer-one">Express</span>{' '}
              <span className="groomer-two">Groomer</span>
            </div>
          </Link>
        </div>

        <div className="nav-bar">
          <Link className="anchor" to="/info">
            Info
          </Link>
          <Link className="anchor" to="/Search">
            Search
          </Link>
          <Link className="anchor" to="/login">
            Login
          </Link>
          <Link className="anchor">Create Account</Link>
        </div>
      </div>
    );
  }
}

export default NavBar;

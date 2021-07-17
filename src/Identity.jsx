import React from 'react';
import _ from 'lodash';
import { CookiesProvider, useCookies } from 'react-cookie';
import { useSelector, useDispatch } from 'react-redux';

import Login from './components/login/Login';
import { loadUser } from './actions';


function createUserSelector(id) {
  return (state) => {
    if (state.user.id) {
      return state.user;
    }

    // cookie
    return { id };
  };
}

function Session({ history, redirectTo, cookieName, mockUserId, children }) {
  // [cookies, _setCookie, removeCookie]
  const [cookies] = useCookies({});
  const cookie = cookies[cookieName] || {};
  const selectUser = createUserSelector(cookie.id || mockUserId);
  const user = useSelector(selectUser, _.isEqual);
  const dispatch = useDispatch();

  React.useEffect(() => {
    loadUser(dispatch, user.id);
  }, [user.id])


  if (!user.id) {
    return (
      <Login loginURL={redirectTo} />
    );
  }

  return children;
}

function Identity(props) {
  return (
    <CookiesProvider>
      <Session {...props} />
    </CookiesProvider>
  );
}

export default Identity;

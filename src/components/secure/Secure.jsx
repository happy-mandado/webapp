import React from 'react';
import { useCookies } from 'react-cookie';

const Secure = ({ history, redirectTo, content, cookieName }) => {
  const [cookies, _setCookie, removeCookie] = useCookies({});

  const userId = (cookies[cookieName] || {}).id
  if (!userId && redirectTo) {
    history.replace(redirectTo);
  }

  // return content({ history, user: cookies[cookieName] });
  return content({ history, userId: userId });
};

export default Secure;

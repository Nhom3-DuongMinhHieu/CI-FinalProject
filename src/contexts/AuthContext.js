import axios from 'axios';
import { createContext, useEffect, useReducer } from 'react';
import { authReducer } from '../reducers/authReducer';
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME, SET_AUTH } from './constants';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authState, dispatch] = useReducer(authReducer, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  // Authenticate user
  const loadUser = async () => {
    let user = null;

    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      user = JSON.parse(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }

    try {
      const response = await axios.get(
        `${apiUrl}/users?username=${user.username}`
      );

      if (response.data.length === 0) {
        return;
      }

      if (response.data[0].password !== user.password) {
        return;
      }

      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthenticated: true,
          user,
        },
      });
      return user;
    } catch (err) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  useEffect(() => loadUser, []);

  // Login
  const login = async (userForm) => {
    try {
      const response = await axios.get(
        `${apiUrl}/users?username=${userForm.username}`
      );

      if (response.data.length === 0) {
        alert('Sai tên đăng nhập hoặc mật khẩu');
        return null;
      }

      if (response.data[0].password !== userForm.password) {
        alert('Sai tên đăng nhập hoặc mật khẩu');
        return null;
      }

      dispatch({
        type: SET_AUTH,
        payload: {
          isAuthenticated: true,
          user: response.data[0],
        },
      });

      localStorage.setItem(
        LOCAL_STORAGE_TOKEN_NAME,
        JSON.stringify(response.data[0])
      );
      await loadUser();
      return response.data[0];
    } catch (error) {
      console.log(error);
    }
  };

  // Register

  // Logout
  const logout = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: 'SET_AUTH',
      payload: {
        isAuthenticated: false,
        user: null,
      },
    });
  };

  // Context data
  const authContextData = { authState, loadUser, login, logout };

  // return provider
  return (
    <AuthContext.Provider value={authContextData}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

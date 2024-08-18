import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { setUser, clearUser, selectUser } from './features/authSlice';
import Login from './Pages/Login';
import AppRoutes from './routes/index';

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
        }));
      } else {
        dispatch(clearUser());
      }
    });

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, [dispatch]);

  return (
    <div className="App">
      {!user ? <Login /> : <AppRoutes />}
    </div>
  );
}

export default App;

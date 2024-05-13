import '../styles/app.scss';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './components/login/login.tsx';
import { AuthContext } from './context/auth/auth-context.ts';
import { useAuth } from './hooks/use-auth.ts';
import Calendar from './components/calendar.tsx';

function App() {
  const { user, setUser } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/calendar',
      element: <Calendar />,
    },
  ]);

  return (
    <div className='app'>
      <AuthContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </AuthContext.Provider>
    </div>
  );
}

export default App;

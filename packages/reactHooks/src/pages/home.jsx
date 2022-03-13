import React, { useContext } from 'react';
import { UserContext } from 'UserContext';
import { login } from 'utils/login';

const Home = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user ? (
        <button
          onClick={async () => {
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login();
            setUser(user);
          }}
        >
          login
        </button>
      )}
    </div>
  );
};

export default Home;

import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';
import './styles/form.css';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className={`container ${isLogin ? 'login-mode' : 'register-mode'}`}>
      <div className="form-box">
        {isLogin ? <Login /> : <Register />}
        <button
          className="toggle-btn"
          onClick={() => setIsLogin((prev) => !prev)}
        >
          {isLogin ? 'Criar Conta' : 'Já tem uma conta? Entrar'}
        </button>
      </div>
    </div>
  );
}

export default App;
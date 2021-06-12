import React, { Component, useState } from 'react';
import './LoginForm.css';

function LoginForm({ isShowLogin }) {


    
    return(

        <div className={`${isShowLogin ? "active" : ""} show`}>
      <div className="login-form">
        <div className="form-box solid">
          <form>
            <h1 className="login-text">Přihlášení</h1>
            <br></br>
            <label>Uživatelské jméno</label>
            <br></br>
            <input type="text" name="username" className="login-box" />
            <br></br>
            <label>Heslo</label>
            <br></br>
            <input type="password" name="password" className="login-box" />
            <br></br>
            <input type="submit" value="Přihlásit se" className="login-btn" />
          </form>
        </div>
      </div>
    </div>
    );
}
export default LoginForm;
import React, { useEffect, useState } from 'react';
import './index.scss'

import { Success } from './componets/Users/Success';
import { Users } from './componets/Users/Users';

// Тут список пользователей: https://reqres.in/api/users

const App = () => {

  return (
    <div
      className="App" >
      < Users />

      <Success />

    </div>);
}

export default App;
import React, { useEffect, useState } from 'react';
import './index.scss'

import { Success } from './componets/Users/Success';
import { Users } from './componets/Users/Users';

// Тут список пользователей: https://reqres.in/api/users

const App = () => {
  const [users, setUsers] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [isLoading, setLoading] = useState(true)

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value)
  }

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(json => {
        setUsers(json.data)
      })
      .catch(err => {
        console.log(err);
        alert('Ошибка')
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div
      className="App" >
      < Users
        searchValue={searchValue}
        onChangeSearchValue={onChangeSearchValue}
        items={users}
        isLoading={isLoading} />

      {/* <Success /> */}

    </div>);
}

export default App;
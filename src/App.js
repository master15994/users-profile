import React, { useEffect, useState } from 'react';
import './index.scss';

import { Success } from './componets/Users/Success';
import { Users } from './componets/Users/Users';

const App = () => {
  const [users, setUsers] = useState([]);
  const [invites, setInvites] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [success, setSuccess] = useState(false);

  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    fetch('https://reqres.in/api/users')
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.log(err);
        alert('Ошибка');
      })
      .finally(() => setLoading(false));
  }, []);

  const onClickInvite = (id) => {
    if (invites.includes(id)) {
      setInvites((prev) => prev.filter((_id) => _id !== id));
    } else {
      setInvites((prev) => [...prev, id]);
    }
  };

  const onClickSendInvites = () => {
    setSuccess(true);
  };

  return (
    <div className="App">
      {success ? (
        <Success сount={invites.length} />
      ) : (
        <Users
          searchValue={searchValue}
          onChangeSearchValue={onChangeSearchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
};

export default App;

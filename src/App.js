import React, { useEffect, useState } from "react";
import axios from "axios";
import "App.css";
import { List } from "components/List";
import { Details } from "components/Details";
import { Loading } from "components/Loading";

const App = () => {
  const [usersList, setUsersList] = useState(null);
  const [detailsUser, setDetails] = useState(null);
  const [isActive, setActive] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_LIST)
      .then(({ data }) => setUsersList(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(isActive);
  useEffect(() => {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_URL_DETAILS + `${isActive}.json`)
      .then(({ data }) => setDetails(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, [isActive]);

  const handleClick = (id) => {
    setActive(id);
  };

  return (
    <div className="container">
      <List
        usersList={usersList}
        handleClick={handleClick}
        isActive={isActive}
      />
      {loading ? (
        <Loading />
      ) : (
        isActive && <Details detailsUser={detailsUser} />
      )}
    </div>
  );
};

export default App;

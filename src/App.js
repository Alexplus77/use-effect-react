import React, { useEffect, useRef, useState } from "react";
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
  const [index, setIndex] = useState(3);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_LIST)
      .then(({ data }) => setUsersList(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_DETAILS + `${isActive}.json`)
      .then(({ data }) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [isActive]);
  const listGroup = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => handleClose(e), true);
    return () => {
      document.removeEventListener("click", (e) => handleClose(e), true);
    };
  }, []);

  const handleClose = (e) => {
    e.target.parentElement !== listGroup.current && setIndex(3);
    setActive(false);
  };

  const handleClick = (id) => {
    setLoading(true);
    setActive(id);
  };

  const handleOpenList = () => {
    setIndex(usersList.length);
  };

  return (
    <div className="container">
      <List
        usersList={usersList}
        handleClick={handleClick}
        handleOpenList={handleOpenList}
        isActive={isActive}
        listGroup={listGroup}
        index={index}
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

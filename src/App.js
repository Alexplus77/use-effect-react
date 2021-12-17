import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import "App.css";
import { List } from "components/List";
import { Details } from "components/Details";
import { Loading } from "components/Loading";

const App = () => {
  const initialCountList = 3;
  const [usersList, setUsersList] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [isActive, setActive] = useState(null);
  const [loading, setLoading] = useState(false);
  const [countList, setCountList] = useState(initialCountList);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_URL_LIST)
      .then(({ data }) => setUsersList(data))
      .catch((err) => console.log(err));
    console.log("usersList");
  }, []);

  useEffect(() => {
    isActive &&
      axios
        .get(`${process.env.REACT_APP_URL_DETAILS}${isActive}.json`)
        .then(({ data }) => {
          setUserInfo(data);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    console.log("userInfo");
  }, [isActive]);

  const listGroup = useRef();

  useEffect(() => {
    document.addEventListener("click", (e) => handleCloseList(e), true);
    return () => {
      document.removeEventListener("click", (e) => handleCloseList(e), true);
    };
  }, [isActive]);

  const handleCloseList = (e) => {
    if (e.target.parentElement !== listGroup.current) {
      setCountList(initialCountList);
      setActive(null);
    }
  };

  const handleOpenUserInfo = (id) => {
    if (id !== isActive) {
      setLoading(true);
      setActive(id);
    }
  };

  const handleOpenList = () => {
    setCountList(usersList.length);
  };

  return (
    <div className="container">
      <List
        usersList={usersList}
        handleOpenUserInfo={handleOpenUserInfo}
        handleOpenList={handleOpenList}
        isActive={isActive}
        listGroup={listGroup}
        countList={countList}
        initialCountList={initialCountList}
      />
      {loading ? <Loading /> : isActive && <Details userInfo={userInfo} />}
    </div>
  );
};

export default App;

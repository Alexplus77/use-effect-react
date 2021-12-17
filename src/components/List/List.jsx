import React from "react";
import "App.css";
import { ListItem } from "../ListItem";

const List = ({
  usersList,
  handleOpenUserInfo,
  isActive,
  handleOpenList,
  listGroup,
  countList,
  initialCountList,
}) => {
  return (
    <div className="container-list">
      <ul className="list-group" ref={listGroup}>
        {usersList?.slice(0, countList).map(({ id, name }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            handleOpenUserInfo={handleOpenUserInfo}
            isActive={isActive}
          />
        ))}
        {countList <= initialCountList && (
          <li onClick={handleOpenList} className="list-group-item">
            ...
          </li>
        )}
      </ul>
    </div>
  );
};

export { List };

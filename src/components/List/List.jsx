import "App.css";
import { ListItem } from "../ListItem";
import cn from "classnames";
const List = ({ usersList, handleClick, isActive, handleOpen, openList }) => {
  let index;
  openList ? (index = usersList.length) : (index = 3);

  return (
    <div className="container-list">
      <ul className="list-group">
        {usersList?.slice(0, index).map(({ id, name }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            handleClick={handleClick}
            isActive={isActive}
          />
        ))}
        <li onClick={handleOpen} className="list-group-item">
          ...
        </li>
      </ul>
    </div>
  );
};

export { List };

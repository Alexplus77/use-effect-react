import "App.css";
import { ListItem } from "../ListItem";
const List = ({ usersList, handleClick, isActive }) => (
  <ul className="list-group">
    {usersList?.map(({ id, name }) => (
      <ListItem
        key={id}
        id={id}
        name={name}
        handleClick={handleClick}
        isActive={isActive}
      />
    ))}
  </ul>
);

export { List };

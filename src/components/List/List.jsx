import "App.css";
import { ListItem } from "../ListItem";

const List = ({
  usersList,
  handleClick,
  isActive,
  handleOpenList,
  listGroup,
  index,
}) => {
  return (
    <div className="container-list">
      <ul className="list-group" ref={listGroup}>
        {usersList?.slice(0, index).map(({ id, name }) => (
          <ListItem
            key={id}
            id={id}
            name={name}
            handleClick={handleClick}
            isActive={isActive}
            index={index}
          />
        ))}
        {index <= 3 && (
          <li onClick={handleOpenList} className="list-group-item">
            ...
          </li>
        )}
      </ul>
    </div>
  );
};

export { List };

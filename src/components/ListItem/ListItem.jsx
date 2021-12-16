import "App.css";
import cn from "classnames";
const ListItem = ({ name, id, handleClick, isActive }) => (
  <li
    onClick={(e) => handleClick(id)}
    className={cn("list-group-item", { active: isActive === id })}
  >
    {name}
  </li>
);
export { ListItem };

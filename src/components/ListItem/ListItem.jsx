import React from "react";
import "App.css";
import cn from "classnames";
const ListItem = ({ name, id, handleOpenUserInfo, isActive }) => (
  <li
    onClick={(e) => handleOpenUserInfo(id)}
    className={cn("list-group-item", { active: isActive === id })}
  >
    {name}
  </li>
);
export { ListItem };

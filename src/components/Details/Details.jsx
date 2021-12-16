import "App.css";

const Details = ({ detailsUser }) => {
  const { name, avatar, details } = detailsUser;
  return (
    <div className="container-details">
      <div className="card" style={{ width: "19rem" }}>
        <img src={avatar} className="card-img-top" alt="..." />
        <ul className="list-group list-group-flush">
          <li style={{ fontSize: "20px" }} className="list-group-item">
            {" "}
            {name}
          </li>
          <li className="list-group-item">City: {details.city}</li>
          <li className="list-group-item">Company: {details.company}</li>
          <li className="list-group-item">Position: {details.position}</li>
        </ul>
      </div>
    </div>
  );
};

export { Details };

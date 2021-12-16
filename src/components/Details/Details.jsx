import "App.css";

const Details = ({ detailsUser }) => {
  const { name, avatar, details } = detailsUser || defaultDetails;
  return (
    <div className="container-details">
      <div className="card" style={{ width: "19rem" }}>
        <img src={avatar} className="card-img-top" alt="..." />
        <h5 className="card-title">{name}</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">City: {details.city}</li>
          <li className="list-group-item">Company: {details.company}</li>
          <li className="list-group-item">Position: {details.position}</li>
        </ul>
      </div>
    </div>
  );
};
const defaultDetails = {
  name: "name",
  avatar: "avatar",
  details: "details",
};
export { Details };

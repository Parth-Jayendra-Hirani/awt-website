function UserCard({ user }) {
  return (
    <div className="card">

      <img src={user.avatar} alt="user"/>

      <h3>{user.name}</h3>

      <p>{user.skill}</p>

      <button className="primary-btn">
        Connect
      </button>

    </div>
  );
}

export default UserCard;
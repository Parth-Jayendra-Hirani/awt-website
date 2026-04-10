import { Link } from "react-router-dom";

function SkillCard({ skill }) {
  return (
    <div className="card">

      <img src={skill.image} alt={skill.title}/>

      <h3>{skill.title}</h3>

      <p>{skill.description}</p>

      <Link to={`/skill/${skill.id}`}>
        <button className="primary-btn">
          View Skill
        </button>
      </Link>

    </div>
  );
}

export default SkillCard;
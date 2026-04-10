import skills from "../data/skills.json";
import SkillCard from "../components/cards/SkillCard.jsx";

function Dashboard() {

  const stats = [
    { title: "Skills Shared", value: 12 },
    { title: "Swap Sessions", value: 8 },
    { title: "Friends", value: 5 },
    { title: "Messages", value: 14 }
  ];

  const weeklyData = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 50 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 80 },
    { day: "Fri", value: 60 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 90 }
  ];

  return (
    <div className="dashboard">

      <h1>Dashboard 🚀</h1>
      <p className="subtitle">Welcome back! Track your activity</p>

      {/* STATS */}
      <div className="stats">
        {stats.map((item, index) => (
          <div key={index} className="stat-card">
            <h2>{item.value}</h2>
            <p>{item.title}</p>
          </div>
        ))}
      </div>

      {/* GRAPH */}
      <h2 className="graph-title">📊 Weekly Skill Activity</h2>

      <div className="graph-container">
        {weeklyData.map((item, index) => (
          <div key={index} className="bar-wrapper">

            <div 
              className="bar"
              style={{ height: `${item.value * 2}px` }}
            >
              <span>{item.value}</span>
            </div>

            <p>{item.day}</p>

          </div>
        ))}
      </div>

      {/* SKILLS */}
      <h2>Your Skills</h2>
      <div className="grid">
        {skills.slice(0, 3).map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      {/* CSS */}
      <style>{`

        .dashboard {
          padding: 30px;
          min-height: 100vh;
          background: #0f172a;
          color: white;
        }

        .subtitle {
          color: #94a3b8;
          margin-bottom: 20px;
        }

        /* STATS */
        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 20px;
          margin: 25px 0;
        }

        .stat-card {
          background: #1e293b;
          padding: 25px;
          border-radius: 12px;
          text-align: center;
          border: 1px solid #334155;
        }

        .stat-card h2 {
          color: #38bdf8;
        }

        .stat-card p {
          color: #94a3b8;
        }

        /* GRAPH */
        .graph-container {
          display: flex;
          justify-content: space-around;
          align-items: flex-end;
          height: 250px;
          margin: 20px 0 40px;
          padding: 20px;
          background: #1e293b;
          border-radius: 12px;
          border: 1px solid #334155;
        }

        .bar-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bar {
          width: 30px;
          background: #38bdf8;
          border-radius: 5px;
          display: flex;
          justify-content: center;
          align-items: flex-end;
          color: white;
          font-size: 12px;
          transition: 0.3s;
        }

        .bar span {
          margin-bottom: 5px;
        }

        .bar-wrapper p {
          margin-top: 8px;
          font-size: 12px;
          color: #94a3b8;
        }

        .bar:hover {
          background: #0ea5e9;
          transform: scale(1.1);
        }

        /* SKILLS */
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
        }

      `}</style>

    </div>
  );
}

export default Dashboard;
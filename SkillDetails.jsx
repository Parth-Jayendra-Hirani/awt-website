import {useParams} from "react-router-dom"
import skills from "../data/skills.json"

function SkillDetails(){

const {id}=useParams()

const skill=skills.find(s=>s.id===parseInt(id))

if(!skill){
return <h2>Skill not found</h2>
}

return(

<div className="container">

<h1>{skill.title}</h1>

<img
src={skill.image}
style={{width:"100%",maxHeight:"400px",objectFit:"cover"}}
/>

<p style={{marginTop:"20px"}}>
{skill.description}
</p>

<section style={{marginTop:"40px"}}>

<h2>What you will learn</h2>

<ul>
<li>Practical knowledge from experts</li>
<li>Real projects and collaboration</li>
<li>Community support</li>
<li>Hands-on experience</li>
</ul>

</section>

<section style={{marginTop:"40px"}}>

<h2>Why learn this skill?</h2>

<p>
This skill can improve your career opportunities, creativity,
and problem-solving ability. Many professionals use this skill
daily in real-world projects.
</p>

</section>

<button className="primary-btn">
Request Skill Swap
</button>

</div>

)

}

export default SkillDetails
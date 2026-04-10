import {useState} from "react"
import SkillCard from "../components/cards/SkillCard.jsx"
import SearchBar from "../components/common/SearchBar.jsx"
import skills from "../data/skills.json"

function BrowseSkills(){

const [search,setSearch]=useState("")

const filtered=skills.filter(skill=>
skill.title.toLowerCase().includes(search.toLowerCase())
)

return(

<div className="container">

<h1>Browse Skills</h1>

<p>
Explore hundreds of skills shared by our community.
Find mentors, teachers, and collaborators.
</p>

<SearchBar
value={search}
onChange={(e)=>setSearch(e.target.value)}
/>

<div className="grid">

{filtered.map(skill=>(
<SkillCard key={skill.id} skill={skill}/>
))}

</div>

</div>

)

}

export default BrowseSkills
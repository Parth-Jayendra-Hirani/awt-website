import Hero from "../components/layout/Hero.jsx"
import SkillCard from "../components/cards/SkillCard.jsx"
import skills from "../data/skills.json"

function Home(){

return(

<div className="container">

<Hero/>

<h2>Popular Skills</h2>

<p>
Discover trending skills shared by our community. Learn something new
or teach your expertise.
</p>

<div className="grid">

{skills.slice(0,6).map(skill=>(
<SkillCard key={skill.id} skill={skill}/>
))}

</div>

<section style={{marginTop:"60px"}}>

<h2>Why SkillSwap?</h2>

<div className="grid">

<div className="card">
<img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"/>
<h3>Learn Faster</h3>
<p>
Learning directly from people with real experience makes education
faster and more practical.
</p>
</div>

<div className="card">
<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"/>
<h3>Build Community</h3>
<p>
Meet passionate people and collaborate on skills across the world.
</p>
</div>

<div className="card">
<img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"/>
<h3>Exchange Knowledge</h3>
<p>
Teach what you know and learn something new without paying money.
</p>
</div>

</div>

</section>

</div>

)

}

export default Home
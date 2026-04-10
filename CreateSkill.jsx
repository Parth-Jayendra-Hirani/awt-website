import { useState } from "react"
import FormInput from "../components/common/FormInput.jsx"
import PrimaryButton from "../components/common/PrimaryButton.jsx"

function CreateSkill(){

const [title,setTitle]=useState("")
const [description,setDescription]=useState("")

function handleSubmit(e){
e.preventDefault()
alert("Skill Created")
}

return(

<div className="container">

<h1>Create Skill</h1>

<form onSubmit={handleSubmit} className="card">

<FormInput
label="Skill Title"
type="text"
value={title}
onChange={(e)=>setTitle(e.target.value)}
/>

<FormInput
label="Description"
type="text"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>

<PrimaryButton text="Create Skill"/>

</form>

</div>

)

}

export default CreateSkill
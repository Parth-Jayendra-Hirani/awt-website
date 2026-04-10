function Notifications(){

const alerts=[
"Alex sent a swap request",
"Maria accepted your request",
"New skill added in Graphic Design"
]

return(

<div className="container">

<h1>Notifications</h1>

<div className="grid">

{alerts.map((a,i)=>(

<div key={i} className="card">

<p>{a}</p>

</div>

))}

</div>

</div>

)

}

export default Notifications
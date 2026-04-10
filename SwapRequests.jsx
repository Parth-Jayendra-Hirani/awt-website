function SwapRequests(){

const requests=[
{user:"Alex",skill:"Web Development"},
{user:"Maria",skill:"Photography"},
{user:"John",skill:"Graphic Design"}
]

return(

<div className="container">

<h1>Swap Requests</h1>

<div className="grid">

{requests.map((req,i)=>(

<div key={i} className="card">

<h3>{req.user}</h3>

<p>Requested Skill:</p>

<p>{req.skill}</p>

<button className="primary-btn">Accept</button>

</div>

))}

</div>

</div>

)

}

export default SwapRequests
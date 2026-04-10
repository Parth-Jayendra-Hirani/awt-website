import { useState } from "react"

function useFormValidation(){

const [errors,setErrors]=useState({})

function validate(values){

let newErrors={}

if(!values.email){
newErrors.email="Email required"
}

if(!values.password){
newErrors.password="Password required"
}

setErrors(newErrors)

return Object.keys(newErrors).length===0
}

return{errors,validate}

}

export default useFormValidation
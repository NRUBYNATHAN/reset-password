import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";


export function SignUp() {
 
 
  const {values,handleChange,handleSubmit}=useFormik({
    initialValues:{
      name:"",
      email:"",
      password:""
    },
    onSubmit:async (values)=>{
      console.log(values)
     const data= await fetch("http://localhost:4000/user/signup",{
     method:"POST",
     headers: {"Content-type": "application/json",},
     body:JSON.stringify(values)
 })
const result=await data.json()

console.log(result)
},

  })
 
  return (
    
 <form onSubmit={handleSubmit}>
  <div className='signup'>
    <h1>Signup Here</h1>
  <TextField onChange={handleChange} value={values.name} name="name" label="name" variant="outlined"/>
  <TextField onChange={handleChange} value={values.email} name="email" label="email" variant="outlined"/>
  <TextField onChange={handleChange}  value={values.password} name="password" label="password" variant="outlined"/>
  <Button onClick={()=>alert('🎉your account was added successfully🎉')} type="submit" variant="contained">submit</Button>
 {/* {result ? <h2>successfully signup</h2> : <h2>invalid credentials</h2>} */}
  </div>
 </form>
 
  );
}

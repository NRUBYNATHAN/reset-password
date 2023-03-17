
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";



export function Reset() {

  const params = new URLSearchParams(window.location.search);
  console.log(params.get("id"))
  console.log(params.get("token"))


  const {values,handleChange,handleSubmit}=useFormik({
    initialValues:{
     password:"",
     
    },
    onSubmit:async (values)=>{
      console.log(values)
     const data= await fetch(`http://localhost:4000/user/reset-password/${params.get("id")}/${params.get("token")}`,{
     method:"POST",
     headers: {"Content-type": "application/json",},
     body:JSON.stringify(values)
 })
const result=await data.json()
// alert(result.status)
console.log(result)
},
  })
  return (
    
 <form onSubmit={handleSubmit}>
  <div className='reset'>
    <h1>Reset Here</h1>
  
  <TextField onChange={handleChange} value={values.password} name="password" label="password" variant="outlined"/>
  <Button onClick={()=>alert('🎉your password was reset successfully🎉')} type="submit" variant="contained">submit</Button>
  </div>
 </form>
 
  );
}

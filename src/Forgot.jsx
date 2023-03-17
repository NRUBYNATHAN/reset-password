import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
export function Forgot() {
  const {values,handleChange,handleSubmit}=useFormik({
    initialValues:{
     email:""
    },
    onSubmit:async (values)=>{
         console.log(values)
        const data= await fetch("http://localhost:4000/user/forgot-password",{
        method:"POST",
        headers: {"Content-type": "application/json",},
        body:JSON.stringify(values)
    })
 const result=await data.json()
 alert(result.status)
 console.log(result)
  },
  })
  return (
    <form onSubmit={handleSubmit}>
      <div className='forgot'>
        <h1>Forgot-Password</h1>
        <TextField name="email" onChange={handleChange} value={values.email} label="email" variant="outlined" />
        <Button onClick={()=>alert('kindly check your email🤗')} type="submit" variant="contained">submit</Button>
      </div>

    </form>
  );
}

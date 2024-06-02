
import { FieldValues, useForm } from "react-hook-form"



const Register = () => {


    

    const {register,getValues,handleSubmit, formState:{errors}} = useForm();
    console.log(errors);

const onHelpSubmit = (data:FieldValues) => {
    console.log(data)
    
}

    

  return (
    <>
    <div className="registerSpace">
    <h1>Register Form</h1>
    <form onSubmit={handleSubmit(onHelpSubmit)}>

        <label>First Name:</label>
        <input {...register('fName', {required:true,minLength:3})} id="fName" type="text"></input>
        {errors.fName?.type === 'required' && <p className="text-danger">Fist Name field is required</p>}
        {errors.fName?.type === 'minLength' && <p className="text-danger">First Name must be at least 3 characters long</p>}
        <br/>

        <label>Last Name:</label>
        <input {...register('lName', {required:true,minLength:3})} id="lName" type="text"></input>
        {errors.lName?.type === 'required' && <p className="text-danger">Last Name field is required</p>}
        {errors.lName?.type === 'minLength' && <p className="text-danger">Last Name must be at least 3 characters long</p>}
        <br/>

        <label>Email:</label>
        <input {...register('email', {required:true,minLength:3})}  id="email" type="text"></input>
        {errors.email?.type === 'required' && <p className="text-danger">Email field is required</p>}
        {errors.email?.type === 'minLength' && <p className="text-danger">Email must be at least 3 characters long</p>}
        <br/>

        <label>Password:</label>
        <input {...register('pWord', {required:true,minLength:3})}   id="pWord" type="text"></input>
        {errors.pWord?.type === 'required' && <p className="text-danger">Password field is required</p>}
        {errors.pWord?.type === 'minLength' && <p className="text-danger">Password must be at least 3 characters long</p>}
        <br/>

        <label >Confirm Password:</label>
        <input {...register('cWord', {required:true})}  id="cWord" type="text"></input>
        {errors.cWord?.type === 'required' && <p className="text-danger">Please Confirm Password</p>}
        {getValues('pWord') !== getValues('cWord') && <p>Passwords do not match</p>}
        <br/>
        
        <button  type="submit">Submit</button>
    </form>
    </div>
    </>
  )
}

export default Register
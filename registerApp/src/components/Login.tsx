
import { FieldValues, useForm } from "react-hook-form"

const Login = () => {

    
    const {register,getValues,handleSubmit, formState:{errors}} = useForm();
    console.log(errors);

const onHelpSubmit = (data:FieldValues) => {
    console.log(data)
    
}

return (
    <>
    <h1>Login Form</h1>
    <form onSubmit={handleSubmit(onHelpSubmit)}>

        <label>Email:</label>
        <input {...register('email', {required:true,minLength:3})}  id="email" type="text"></input>
        {errors.email?.type === 'required' && <p className="text-danger">Email field is required</p>}
        {errors.email?.type === 'minLength' && <p className="text-danger">Email must be at least 3 characters long</p>}

        <label>Password:</label>
        <input {...register('pWord', {required:true,minLength:3})}   id="pWord" type="text"></input>
        {errors.pWord?.type === 'required' && <p className="text-danger">Password field is required</p>}
        {errors.pWord?.type === 'minLength' && <p className="text-danger">Password must be at least 3 characters long</p>}

        <button  type="submit">Submit</button>
    </form>
    </>
  )
}

export default Login
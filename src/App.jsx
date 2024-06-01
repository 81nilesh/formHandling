import './App.css'
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout((d) => {
        resolve()
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    await delay(4)
    console.log(data)
  }


  return (
    <>
      {isSubmitting && <div>Loading....</div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input placeholder='username' {...register("username", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 16, message: "Max length is 16" } })} type="text" />
          {errors.username && <div className='text'>{errors.username.message}</div>}
          <br />
          <input placeholder='password' {...register("password", { required: { value: true, message: "This field is required" }, minLength: { value: 3, message: "Min length is 3" }, maxLength: { value: 16, message: "Max length is 16" } })} type="password" />
          {errors.password && <div className='text'>{errors.password.message}</div>}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  )
}

export default App

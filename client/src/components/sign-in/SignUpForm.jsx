import { useForm } from 'react-hook-form';

export default function SignUpForm({ onSubmit, errorMsg }) {
  const { register, handleSubmit, formState: {errors} } = useForm();

  // OR: get rid of this fucntion and changing onSubmit line to onSubmit={handleSubmit(onSubmit)} (data is implicitly passed)
  function onFormSubmit(data)  {
    onSubmit(data);
  }

  return (
    <form 
      onSubmit={handleSubmit(onFormSubmit)}
    >
      <div className="text-center text-slate-800 font-medium text-3xl mb-1">
        Sign Up
      </div>

      <div className="flex flex-col gap-1"> 
        <label htmlFor="firstName" className="lbl">First Name</label>
        <input 
          type="text"
          {...register("firstName", { required: "This is required." })}
          id="firstName"
          className="inp"
          placeholder="John"
        />
        <p className="text-red-500">{typeof errors.firstName?.message === "string" ? errors.firstName.message : ""}</p>
      </div>

      <div className="flex flex-col gap-1"> 
        <label htmlFor="lastName" className="lbl">Last Name</label>
        <input 
          type="text"
          {...register("lastName", { required: "This is required." })}
          id="lastName"
          className="inp"
          placeholder="Pork"
        />
        <p className="text-red-500">{typeof errors.lastName?.message === "string" ? errors.lastName.message : ""}</p>
      </div>

      <div className="flex flex-col gap-1"> 
        <label htmlFor="email" className="lbl">Email</label>
        <input 
          type="email"
          {...register("email", { required: "This is required." })}
          id="email"
          className="inp"
          placeholder="example@email.com"
        />
        <p className="text-red-500">{typeof errors.email?.message === "string" ? errors.email.message : ""}</p>
      </div>

      <div className="flex flex-col gap-1"> 
        <label htmlFor="password" className="lbl">Password</label>
        <input 
          type="password"
          {...register("password", { required: "This is required." })}
          id="password"
          className="inp"
          placeholder="Password"
        />
        <p className="text-red-500">{typeof errors.password?.message === "string" ? errors.password.message : ""}</p>
      </div>

      <p className="text-red-500">{errorMsg}</p>

      <button
        type="submit"
        className="w-full px-8 py-3 mt-3 self-center bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300 shadow-sm font-medium"
      >
        Sign Up
      </button>
    </form>
  );
}
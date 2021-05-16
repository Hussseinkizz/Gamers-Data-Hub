// ** Basic Usage:
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit, watch, formState: { errors } } = useForm();
//   const onSubmit = data => console.log(data);

//   console.log(watch("example")); // watch input value by passing the name of it

//   return (
//     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
//     <form onSubmit={handleSubmit(onSubmit)}>
//       {/* register your input into the hook by invoking the "register" function */}
//       <input defaultValue="test" {...register("example")} />
      
//       {/* include validation with required or other standard HTML validation rules */}
//       <input {...register("exampleRequired", { required: true })} />
//       {/* errors will return when field validation fails  */}
//       {errors.exampleRequired && <span>This field is required</span>}
      
//       <input type="submit" />
//     </form>
//   );
// }

// =============================================================
// ** Register Fields
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName")} />
//       <select {...register("gender")}>
//         <option value="female">female</option>
//         <option value="male">male</option>
//         <option value="other">other</option>
//       </select>
//       <input type="submit" />
//     </form>
//   );
// }

// ===============================================================
// ** Basic Validation
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, handleSubmit } = useForm();
//   const onSubmit = data => console.log(data);
   
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register("firstName", { required: true, maxLength: 20 })} />
//       <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
//       <input type="number" {...register("age", { min: 18, max: 99 })} />
//       <input type="submit" />
//     </form>
//   );
// }

// ========================================================
// ** Integrating with an existing form

// import React from "react";
// import { useForm } from "react-hook-form";

// // The following component is an example of your existing Input Component
// const Input = ({ label, register, required }) => (
//   <>
//     <label>{label}</label>
//     <input {...register(label, { required })} />
//   </>
// );

// // you can use React.forwardRef to pass the ref too
// const Select = React.forwardRef(({ onChange, name, label }, ref) => (
//   <>
//     <label>{label}</label>
//     <select name={name} ref={ref} onChange={onChange}>
//       <option value="20">20</option>
//       <option value="30">30</option>
//     </select>
//   </>
// ));

// const App = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data) => {
//     alert(JSON.stringify(data));
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input label="First Name" register={register} required />
//       <Select label="Age" {...register("Age")} />
//       <input type="submit" />
//     </form>
//   );
// };

// ===============================================================
// ** Integrating with global state 

// import React from "react";
// import { useForm } from "react-hook-form";
// import { connect } from "react-redux";
// import updateAction from "./actions";

// export default function App(props) {
//   const { register, handleSubmit, setValue } = useForm();
//   // Submit your data into Redux store
//   const onSubmit = data => props.updateAction(data);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input {...register("firstName")} defaultValue={props.firstName} />
//       <Input {...register("lastName")} defaultValue={props.lastName} />
//       <input type="submit" />
//     </form>
//   );
// }

// // Connect your component with redux
// connect(({ firstName, lastName }) => ({ firstName, lastName }), updateAction)(YourForm);

// =================================================================================
// ** Handling Errors 
// import React from "react";
// import { useForm } from "react-hook-form";

// export default function App() {
//   const { register, formState: { errors }, handleSubmit } = useForm();
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input {...register("firstName", { required: true })} />
//       {errors.firstName && "First name is required"}
//       <Input {...register("lastName", { required: true })} />
//       {errors.lastName && "Last name is required"}
//       <input type="submit" />
//     </form>
//   );
// }

// todo: make your own easier to use form component!

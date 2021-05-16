import SpinLoader from "./SpinLoader"

// show this on load...🙂 
export const LoaderUI = () => {
  return (
    <>
      <SpinLoader/>
    </>
  )
  
}

// show this on error... 😠 
export const ErrorUI = ({error}) => {
  return (
    <>
      <p className="text-red-600 text-center w-full">{error.message}</p>
    </>
  )
}

// show this on fetch...😦 
export const FetchUI = ({ fetching }) => {
  return (
    <>
      <div>{fetching && "Background Updating..."}</div>
    </>
  )
}


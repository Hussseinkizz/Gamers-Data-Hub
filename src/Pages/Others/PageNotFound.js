import { useLocation, useHistory } from 'react-router-dom'

const PageNotFound = () => {

  let location = useLocation()
  let history = useHistory()

  return (
    <section className='w-full text-center'>
      <h1 className='text-3xl md:text-4xl lg:text-5xl'>Oops, there's nothing like <span className='text-red-300'>{location.pathname}</span></h1>
      <button className='px-4 py-3 mt-10 bg-gray-100 rounded hover:bg-yellow-300 focus:bg-yellow-400'
      onClick={() => history.push('/')}>Return Home</button>
    </section>
  )
}

export default PageNotFound

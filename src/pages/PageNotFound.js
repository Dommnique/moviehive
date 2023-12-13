import PageNotFoundImg from '../assets/images/404.png';
import { Link } from 'react-router-dom';
import { Button } from '../components';
import { useEffect } from 'react';

export const PageNotFound = () => {
  useEffect(() => {
    document.title = "Page not found/Moviehive"
  })

  return (
    <main>
      <section className='flex flex-col justify-center py-9'>
        <div className='flex flex-col items-center my-5'>
          <p className='text-4xl text-gray-900 dark:text-white my-8 text-bold'>404! Page not found</p>
          <div className='max-w-lg'>
            <img className='rounded' src={PageNotFoundImg} alt="404 Page not found" />
          </div>
        </div> 

        <div className='flex justify-center py-3'>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}

import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form onSubmit="...">
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              value="..."
              placeholder='Enter your email'
              onChange="..."
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              value="...."
              placeholder='Enter password'
              onChange="...."
            />
          </div>

          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
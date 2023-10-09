import React from 'react'

const about = async () => {

const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache: 'no-store'})
const user = await res.json()


  return (
    <section>
      <div className="container">
        <h1>{new Date().toLocaleTimeString()}</h1>
          <h1 className='about_heading'>About page Data Fetching</h1>
          <div className="about_wrapper">
            {
              user.map(item=>
                <div className="about_item">
                  <h3>Name: {item.name}</h3>
                  <p>Email: {item.email}</p>
                  <p>Phone: {item.phone}</p>
                </div>
              )
            }
          </div>
      </div>
    </section>
  )
}

export default about
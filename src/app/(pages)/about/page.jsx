import React from 'react'

const about = async () => {

  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const user = await res.json()



  return (
    <section>
      <div className="container">
          <h1 className='about_heading'>About page Data Fetching</h1>
          <div className="about_wrapper">
            {
              user.map(item=>
                <div className="about_item">
                  <h3>Name: {item.name}</h3>
                  <p>Email: {item.email}</p>
                </div>
              )
            }
          </div>
      </div>
    </section>
  )
}

export default about
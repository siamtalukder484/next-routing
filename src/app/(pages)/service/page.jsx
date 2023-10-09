import Image from 'next/image'
import React from 'react'
// import Profile from '../../../../public/assets/images/siam.png'

const service = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="service_wrapper">
            <h1>
              service page here
            </h1>
            <Image 
              src="/assets/images/siam.png" 
              alt="Service Image"
              width={100} 
              height={100}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default service
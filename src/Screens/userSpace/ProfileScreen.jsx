import React from 'react'

function profileScreen() {
  return (
<section
  className="flex jusitfy-center items-center  bg-white"
  style={{
    backgroundImage: 'url("flex-ui-assets/elements/pattern-white.svg")',
    backgroundPosition: "center"
  }}
>
  <div className="container px-4 mx-auto">
    <div className="max-w-sm mx-auto">
      <div className="mb-6 text-center">
        <a className="inline-block mb-6" href="#">
          <img
            className="h-16"
            src="flex-ui-assets/logos/flex-circle-blue.svg"
            alt=""
          />
        </a>
        <h3 className="mb-4 text-2xl md:text-3xl font-bold">
        modifier informations
        </h3>
        <p className="text-lg text-coolGray-500 font-medium">
          Start your journey with our product
        </p>
      </div>
      <form action="" className='bg-white shadow-lg p-8  w-auto  md:w-[35rem] rounded-lg' >
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Nom*
          </label>
          <input
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            prenoms*
          </label>
          <input
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Numero*
          </label>
          <input
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="Patryk"
          />
        </div>
        <div className="mb-2">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Email*
          </label>
          <input
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="name"
            placeholder="dev@shuffle.dev"
          />
        </div>
        <div className="mb-4">
          <label
            className="block mb-2 text-coolGray-800 font-medium"
            htmlFor=""
          >
            Password*
          </label>
          <input
            className="appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            type="password"
            placeholder="************"
          />
        </div>
        <div className="flex flex-wrap items-center justify-between mb-2">
         
     
        </div>
        <a
          className="inline-block py-3 px-7 mb-4 w-full text-base text-blue-50 font-medium text-center leading-6 bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md shadow-sm"
          href="#"
        >
         modifier 
        </a>
    
      
       
      </form>
    </div>
  </div>
</section>

  
  )
}

export default profileScreen
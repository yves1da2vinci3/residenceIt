import React from 'react'

function SignupScreen() {
  return (
    <section>
    <div className="flex flex-wrap">
      <div className="pt-6 lg:pt-16 pb-6 w-full lg:w-1/2">
        <div className="max-w-md mx-auto">
          <div className="mb-6 lg:mb-20 w-full px-3 flex items-center justify-between">
            <a className="text-3xl font-bold leading-none" href="#">
              <img
                className="h-12"
                src="atis-assets/logo/atis/atis-mono-black.svg"
                alt=""
                width="auto"
              />
            </a>
            <a
              className="py-2 px-6 text-xs rounded-l-xl rounded-t-xl bg-blue-100 hover:bg-blue-200 text-blue-600 font-bold transition duration-200"
              href="#"
            >
              S'inscrire
            </a>
          </div>
          <div>
            <div className="mb-6 px-3">
              <span className="text-gray-500">S'inscrire</span>
              <h3 className="text-2xl font-bold">Créer un compte</h3>
            </div>
            <form action="">
              <div className="flex flex-wrap">
                <div className="mb-3 w-full lg:w-1/2 px-2">
                  <input
                    className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="Prenoms"
                  />
                </div>
                <div className="mb-3 w-full lg:w-1/2 px-2">
                  <input
                    className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="Nom"
                  />
                </div>
                <div className="mb-3 w-full lg:w-1/2 px-2">
                  <input
                    className="w-full p-4 text-xs bg-gray-50 outline-none rounded"
                    type="text"
                    placeholder="Numero de telephone"
                  />
                </div>
              </div>
              <div className="mb-3 flex p-4 mx-2 bg-gray-50 rounded">
                <input
                  className="w-full text-xs bg-gray-50 outline-none"
                  type="email"
                  placeholder="name@email.com"
                />
                <svg
                  className="h-6 w-6 ml-4 my-auto text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
              </div>
              <div className="mb-6 flex p-4 mx-2 bg-gray-50 rounded">
                <input
                  className="w-full text-xs bg-gray-50 outline-none"
                  type="password"
                  placeholder="mot de passe"
                />
                <button>
                  <svg
                    className="h-6 w-6 ml-4 my-auto text-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </button>
              </div>
              <div className="px-3 text-center">
                <button className="mb-2 w-full py-4 bg-blue-600 hover:bg-blue-700 rounded text-sm font-bold text-gray-50 transition duration-200">
                S'inscrire
                </button>
                <span className="text-gray-400 text-xs">
                  <span>Vous avez déjà un compte ?</span>
                  <a className="text-blue-600 hover:underline" href="#">
                  Se connecter
                  </a>
                </span>
               
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-full lg:w-1/2">
        <div className="absolute inset-0 bg-gray-800 z-10 opacity-50" />
        <img
          className="absolute inset-0 h-full ml-auto object-cover z-0"
          src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
          alt=""
        />
        <div
          className="absolute bottom-0 inset-x-0 mx-auto mb-12 max-w-xl text-center"
          style={{ zIndex: 10 }}
        >
          <h2 className="mb-2 text-2xl text-white font-bold font-heading">
          abobo Pk18  en face de la grande mosquée
          </h2>
          <div className="max-w-lg mx-auto mb-6">
            <p className="text-gray-300 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
          </div>
          <a
            className="inline-block py-2 px-6 rounded-t-xl leading-loose rounded-l-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200"
            href="#"
          >
Visiter la maison
          </a>
        
        </div>
      </div>
      <div className="lg:hidden">
        <div className="relative w-full">
          <img
            className="relative mb-4 object-cover"
            src="https://images.unsplash.com/photo-1565120130276-dfbd9a7a3ad7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
      
        </div>
        <div className="py-10 px-3 text-center" style={{ zIndex: 10 }}>
          <h2 className="mb-2 text-2xl font-bold">
          abobo Pk18  en face de la grande mosquée
          </h2>
          <p className="mb-6 text-gray-500 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
            efficitur nisl sodales egestas lobortis.
          </p>
          <a
            className="inline-block py-2 px-6 rounded-t-xl rounded-l-xl bg-blue-600 hover:bg-blue-700 text-gray-50 font-bold transition duration-200"
            href="#"
          >
Visiter la maison
          </a>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default SignupScreen
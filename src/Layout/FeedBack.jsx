import React from 'react'
import {BsFacebook, BsWhatsapp} from 'react-icons/bs'
function FeedBack() {
  return (
    <section className="relative pt-20 2xl:pt-40 bg-gray-800  bottom-0 z-40 ">
     {/* importation du lien  facebook */}
     <a className='bottom-8 right-8 z-10 absolute' href='https://www.facebook.com/residenceitabidjan/' target="_blank" >
     <BsFacebook size={44}  className="text-purple-600" />
     </a>
  <div className="hidden lg:block absolute top-0 right-0 h-full bg-gray-600 w-1/2" />
  <div className="container px-4 mx-auto">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-wrap -mx-4">
        <div className="relative w-full lg:w-1/2 px-4 pb-20 overflow-hidden">
          {/* <img
            className="hidden lg:block absolute bottom-0 right-0 w-full h-screen -mr-20 -mb-52"
            src="https://images.unsplash.com/photo-1596485206311-2da5fafb3606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt=""
          />
          <img
            className="hidden lg:block absolute bottom-0 right-0 -mr-52 -mb-64"
            src="https://images.unsplash.com/photo-1596485206311-2da5fafb3606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80"
            alt=""
          /> */}
          <div className="relative max-w-md">
            <div className="pb-16 mb-8 border-b border-gray-400">
              <span className="text-lg text-blue-400 font-bold">
                Avez vous une question?
              </span>
              <h2 className="mt-10 mb-16 text-5xl font-bold font-heading text-white">
         Contacter nous !
         <p className='text-gray-500 font-bold text-lg'>cliquer sur un numero.</p>
              </h2>
              <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <BsWhatsapp  size={24}  className="text-white" />
                  </span>
                  <p className="text-lg font-bold text-white">
                  (+225)   <a href="https://wa.me/2250787089013">07 87 08 90 13</a>
                  <br/>  
                     (+225) 27 21 54 02 21  
                  </p>
                </div>
              </div>
              <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg
                      className="w-5 h-4"
                      width={21}
                      height={14}
                      viewBox="0 0 21 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8109 0H2.1878C0.981688 0 0 0.980499 0 2.18676V11.8119C0 13.0182 0.981688 14 2.1878 14H18.8122C20.0183 14 21 13.0182 21 11.8119V2.18676C20.9987 0.980499 20.017 0 18.8109 0ZM19.2492 4.73317L11.716 8.67092C11.3393 8.86387 10.9193 8.96887 10.4993 8.96887C10.0794 8.96887 9.66858 8.86387 9.28273 8.67092L1.74945 4.73317V2.75511L10.0872 7.11288C10.3405 7.24414 10.6555 7.24414 10.9101 7.11288L19.2479 2.75511V4.73317H19.2492Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="text-lg font-bold text-white">
                    resdenceit.info@gmail.com
                  </p>
                </div>
              </div>
              <div className="py-6 px-8 mb-4 bg-gray-600 rounded-lg">
                <div className="flex items-center">
                  <span className="flex items-center justify-center w-12 h-12 mr-8 bg-blue-500 rounded-lg">
                    <svg
                      className="w-5 h-5"
                      width={23}
                      height={23}
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 11C16.0185 11 14 13.0962 14 15.6729C14 19.2285 17.8951 22.6871 18.0612 22.8339C18.3123 23.0554 18.6877 23.0554 18.9388 22.8339C19.1049 22.6885 23 19.2298 23 15.6729C23 13.0962 20.9815 11 18.5 11ZM18.5 17.4618C17.5077 17.4618 16.7003 16.6338 16.7003 15.6161C16.7003 14.5985 17.5077 13.7705 18.5 13.7705C19.4923 13.7705 20.2997 14.5985 20.2997 15.6161C20.2997 16.6338 19.4923 17.4618 18.5 17.4618Z"
                        fill="white"
                      />
                      <path
                        d="M9.01758 0C4.04824 0 0 4.04035 0 9C0 13.9597 4.04824 18 9.01758 18C9.90081 18 10.7583 17.8745 11.5604 17.6315C10.1794 14.5374 10.8571 11.7539 12.7236 9.9193C12.6912 9.9193 12.2597 9.73436 12.2272 9.72086C8.69567 8.37903 5.3927 12.6232 8.35888 16.156C6.02299 15.94 4.00361 14.6171 2.84987 12.7096C4.09829 12.4153 5.00721 11.3057 5.02344 9.9922C5.04373 9.16199 5.60505 8.59232 6.30433 8.43573C9.41794 7.77021 9.7128 3.90535 8.51307 1.83051C9.34355 1.78461 10.0442 1.80756 11.0383 2.10049C10.7881 4.61407 12.1501 7.66087 15.1596 7.37468L16.0158 7.27614C16.0875 7.57312 16.1335 7.87011 16.1605 8.18464C16.7272 8.08745 17.4468 8.06855 18 8.17519C17.5739 3.60027 13.7056 0 9.01758 0Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  <p className="text-lg font-bold text-white">
                    Treichville, Abidjan
                  </p>
                </div>
              </div>
            </div>
            <div className="max-w-xs">
              <p className="text-gray-400">
               disponible entre 8h et 17h
              </p>
            </div>
          </div>
        </div>
        <div className="relative w-full lg:w-1/2 px-4 pb-20">
          <div className="max-w-md lg:ml-20">
            <form action="#">
              <h3 className="mb-10 text-2xl font-bold text-white">
                Envoyer un message!
              </h3>
              <input
                className="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none"
                type="email"
                placeholder="example@shuffle.dev"
              />
              <input
                className="mb-3 w-full px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-full focus:outline-none"
                type="text"
                placeholder="Sujet"
              />
              <textarea
                className="w-full mb-6 px-12 py-4 bg-white font-bold placeholder-gray-900 rounded-3xl resize-none focus:outline-none"
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="votre message"
                defaultValue={""}
              />
              {/* <div className="flex mb-10">
                <input type="checkbox" />
                <p className="pl-4 max-w-xs text-sm text-gray-300">
                  By singning up, you agree to our Terms, Data Policy and
                  Cookies.
                </p>
              </div> */}
              <button className="py-4 px-12 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-full transition duration-200">
              Envoyer le  message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default FeedBack
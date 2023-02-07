export default function Home()
 { return(
    <>
     <section class="text-gray-600 body-font bg-gray-800   ">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col  items-center   ">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 
    items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hi, I am Divyani,
        <br class="hidden lg:inline-block"/>a frontend developer.
      </h1>
      <p class="mb-8 leading-relaxed text-gray-100">Welcome to my portfolio.</p>
      <div class="flex justify-center shadow-inner">
        <a href="/contact" class="inline-flex text-white shadow-lg shadow-gray-900 bg-gray-400
         border-0 py-2 px-6 focus:outline-none
         hover:bg-black
        rounded text-lg">Contact me
        </a>
        </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
      <img class="object-cover object-center rounded "  alt="hero" src="https://images.pexels.com/photos/4458424/pexels-photo-4458424.jpeg?auto=compress&cs=tinysrgb&w=600"/>
    </div>
    
  </div>
</section>
    </>
 )
    
}
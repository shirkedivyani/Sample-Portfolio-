export default function Contact(){
    return(
        <>
        <section class="text-gray-600 body-font relative  bg-gray-400">
  <div id="Contact " class="container px-5 py-14 mx-auto">
    <div class="flex flex-col text-center w-full mb-12">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Let's talk</h1>
     
    </div>
    <div class="lg:w-1/2 md:w-2/3 mx-auto">
      <div class="flex flex-wrap -m-2">
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="name" class="leading-7 text-sm text-white">Name</label>
            <input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border 
            border-gray-300  focus:bg-white focus:ring-2 focus:ring-sky-900 text-base outline-none
             text-gray-700 py-1  px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-1/2">
          <div class="relative">
            <label for="email" class="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300
             focus:bg-white focus:ring-2 focus:ring-sky-900 text-base outline-none text-gray-700 py-1
              px-3 leading-8 transition-colors duration-200 ease-in-out"/>
          </div>
        </div>
        <div class="p-2 w-full">
          <div class="relative">
            <label for="message" class="leading-7 text-sm text-white">Message</label>
            <textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 
             focus:bg-white focus:ring-2 focus:ring-sky-600 h-32 text-base outline-none text-gray-700
             py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div class="p-2 w-full ">
          <button class="flex mx-auto shadow-white text-white bg-gray-900
           border-0 py-2 px-8 focus:outline-none hover:bg-gray-500  shadow-lg shadow-gray-900 rounded text-lg">SUBMIT</button>
        </div>
        
           
      </div>
    </div>
  </div>
</section>
        
        </>
    )
}
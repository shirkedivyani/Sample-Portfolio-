export default function Gallery(){
    return(
        <>
        <section class="text-gray-600 body-font  bg-gray-300">
  <div class="container px-5 py-20 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="text-2xl font-medium title-font mb-4 text-gray-900">GALLERY</h1>
      
    </div>
    <div class="flex flex-wrap -m-4">
    <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" 
          src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"/>
         
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" 
          src="https://images.pexels.com/photos/3183165/pexels-photo-3183165.jpeg?auto=compress&cs=tinysrgb&w=600"/>
          
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
        <iframe width="280" height="225" src="https://youtube.com/embed/HAASl4PdgRI">

</iframe>
              
        </div>
      </div>
      <div class="p-4 lg:w-1/4 md:w-1/2">
        <div class="h-full flex flex-col items-center text-center">
          <iframe width="280" height="225" src="https://youtube.com/embed/VAjHiPAHfoM">

          </iframe>
          
        </div>
      </div>
    </div>
  </div>
</section>
        </>

    )
}
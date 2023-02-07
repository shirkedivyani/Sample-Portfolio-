
export default function Header(){
    return(
        <>

<header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-5 bg-black">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
           
        <a className="flex title-font font-medium  items-center  text-gray-900 mb-4 md:mb-0" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-8 h-8">
  <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" />
</svg>

      <span className="ml-3  text-3xl text-white ">𝐃𝐈𝐕𝐘𝐀𝐍𝐈</span>
    </a>
            

            <div class="flex items-center lg:order-2">
               
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm 
                text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
                 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2"
                  aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/home" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent 
                        lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/about" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                         lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                         lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                          lg:dark:hover:bg-transparent dark:border-gray-700">About Me</a>
                    </li>
                    <li>
                        <a href="/experience" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                         lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 
                         lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                          lg:dark:hover:bg-transparent dark:border-gray-700">Experience</a>
                    </li>
                    <li>
                        <a href="/gallery" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                         lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400
                          lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white 
                          lg:dark:hover:bg-transparent dark:border-gray-700">Gallery</a>
                    </li>
                    <li>
                        <a href="/contact" class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 
                        hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 
                        dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white
                         lg:dark:hover:bg-transparent dark:border-gray-700">Contact me</a>
                    </li>
                    
                </ul>
            </div>
        </div>
    </nav>
</header>
        </>
    )
}
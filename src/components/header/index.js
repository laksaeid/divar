import El from "../../library/EG";

const Navbar = () => {
    return (El({
        element: 'div',
        className: 'bg-gray-100 p-1 h-18 flex items-center justify-between',
        child: [
            El({
                element: 'div',
                className: 'flex items-center gap-3',
                child:[El({
                    element: 'ion-icon',
                    className: "md hydrated opacity-75 text-xl",
                    name:'search-outline',
                }), El({
                    element: 'input',
                    placeholder: 'جست و جو در همه آگهی ها',
                    className:'bg-inherit outline-0',
                })]
            }), El({
                element: 'div',
                className:'flex items-center gap-2 opacity-50',
                child:[El({
                    element: 'p',
                    className: 'text-2xl font-thin mb-1',
                    child:'|'
                }), El({
                    element: 'p',
                    innerText: 'تهران', 
                }), El({
                    element: 'ion-icon',
                    className:"md hydrated text-xl",
                    name:'location-outline',
                })]
            })
        ]
  }))
};

export default Navbar;

{/* <div>
<label for="voice-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos, Design Templates..." required>
        <button type="button" class="absolute inset-y-0 right-0 flex items-center pr-3">
            <svg aria-hidden="true" class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clip-rule="evenodd"></path></svg>
        </button>
    </div>
    
</div> */}
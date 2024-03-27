import { Link } from "react-router-dom";

const ErrorPages = () => {
    return (
        <section className="flex items-center h-full p-16 bg-slate-100 dark:text-gray-400">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
            <div className="max-w-md text-center">
                <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-400">
                    <span className="sr-only">Error</span>404
                </h2>
                <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                <p className="mt-4 mb-8 dark:text-gray-600">But dont worry, you can find plenty of other things on our homepage.</p>


                <Link to="/"> 
                <a href="#_" class="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-green-200 transition duration-300 ease-out border-2 border-green-400 rounded-full shadow-md group">
<span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-green-400 group-hover:translate-x-0 ease">
<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
</span>
<span class="absolute flex items-center justify-center w-full h-full text-green-500 transition-all duration-300 transform group-hover:translate-x-full ease">Back to Home </span>
<span class="relative invisible">Back to Home</span>
</a>
                 </Link>
               
            </div>
        </div>
    </section>
    );
};

export default ErrorPages;
class sheader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            ` <nav class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-white bg-green-900 border rounded-none shadow-md h-max border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4">
        <div class="flex items-center justify-between text-white">
            <a href="index.html"><img src="image-removebg-preview.png" alt="Logo" class="h-8 mr-2"></a>
            <div class="flex items-center gap-4">
                <div class="hidden mr-4 lg:block">
                    <ul class="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                        <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                            <a href="index.html" class="flex items-center">Home</a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                            <a href="aboutus.html" class="flex items-center">About Us</a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                            <a href="featurepage.html" class="flex items-center">Feature Page</a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                            <a href="#" class="flex items-center">Docs</a>
                        </li>
                        <li class="block p-1 font-sans text-sm antialiased font-normal leading-normal text-white">
                            <a href="contactus.html" class="flex items-center">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <!-- Google Translate Widget -->
                <div id="google_translate_element"></div>
                <div class="flex items-center gap-x-1">
                    <button
                        class="hidden select-none rounded-lg bg-gradient-to-tr from-gray-900 to-gray-800 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
                        type="button">
                        <a href="login.html"><span>Log in</span></a>
                    </button>
                </div>
                <button
                    class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
                    type="button">
                    <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                            stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
    </nav>
 `
    }
}

class sfooter extends HTMLElement
{
    connectedCallback()
    {
        this.innerHTML = 
        `<footer class="bg-green-800 text-white py-8">
                <div class="container mx-auto text-center">
                    <p class="mb-4">Contact us: <a href="mailto:info@yourdomain.com" class="underline">info@yourdomain.com</a></p>
                    <p class="mb-4">Follow us on 
                        <a href="#" class="text-blue-500 hover:underline">Facebook</a>, 
                        <a href="#" class="text-blue-400 hover:underline">Twitter</a>, 
                        <a href="#" class="text-pink-500 hover:underline">Instagram</a>
                    </p>
                    <p class="text-sm">© 2024 Your Company. All rights reserved.</p>
                </div>
            </footer>
            
            `
    }
}

customElements.define('s-header', sheader)
customElements.define('s-footer', sfooter)
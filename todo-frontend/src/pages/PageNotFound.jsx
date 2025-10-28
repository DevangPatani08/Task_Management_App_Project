import React from 'react';

const PageNotFound = () => {
    return (
        <main class="grid min-h-screen place-items-center bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">
            <div class="text-center">
                <p class="text-base font-semibold text-indigo-400">404</p>
                <h1 class="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">Page not found</h1>
                <p class="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Sorry, we couldn’t find the page you’re looking for.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6">
                    <a href="/" class="rounded bg-indigo-500 px-6 py-3 text-base/6 font-bold text-white shadow-xs hover:bg-indigo-700 transition-all duration-300 ease-in-out">Go back home</a>
                    <a href="/contact" class="text-base/6 font-semibold text-gray-900 hover:text-indigo-500 flex items-center justify-center gap-1 transition-all duration-300 ease-in-out">Contact support <span className="material-symbols-rounded">arrow_right_alt</span></a>
                </div>
            </div>
        </main>
    );
};

export default PageNotFound;
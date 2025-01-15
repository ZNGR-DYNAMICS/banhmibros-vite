import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import DatabaseViewer from './DatabaseViewer';
import Navigation from './Navigation';
import { useSwipeable } from 'react-swipeable';

function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [navHover, setNavHover] = useState(false);

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        onSwipedRight: () => setIsOpen(true),
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    return (
        <div {...swipeHandlers} className="relative h-dvh overflow-hidden">
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
            <div
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                isOpen ? 'translate-x-full' : ''
                } overflow-y-auto scroll-smooth`}
            >
                <header className='relative w-full h-screen'>
                    {/* Toggle Navigation Button */}
                    <div className='absolute top-8 left-8 mr-8'>
                        <div className='flex flex-col gap-8 lg:gap-16 circula-bold lg:circula-black text-white-500 transition-colors'>
                            <div className='flex'>
                                <button
                                    className="block transition duration-200 hover:text-bmb-orange"
                                    onClick={() => setIsOpen((prev) => !prev)}
                                    onMouseEnter={() => setNavHover(true)}
                                    onMouseLeave={() => setNavHover(false)}
                                    onFocus={() => setNavHover(true)}
                                    >
                                    <svg
                                        width="32"
                                        height="12"
                                        viewBox="0 0 32 12"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M0 0H32V2H0V0Z" />
                                        <path
                                            d="M0 10H24V12H0V10Z"
                                            className={`transition-transform duration-300 origin-left ${
                                                navHover ? 'scale-x-133' : 'scale-x-100'
                                            }`}
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className='flex flex-col gap-4 text-8xl md:text-8xl lg:text-9xl circula-bold md:circula-extrabold lg:circula-black'>
                                <h1 className='hover:text-bmb-orange transition-colors duration-300'>
                                    <a href="/home">Home</a>
                                </h1>
                                <h1 className="hover:text-bmb-orange transition-colors duration-300">
                                    <a href="/menu">Menu</a>
                                </h1>
                                <h1 className="hover:text-bmb-orange transition-colors duration-300">
                                    <a href="/banhmi">Banh Mi</a>
                                </h1>
                                <h1 className="hover:text-bmb-orange transition-colors duration-300">
                                    <a href="/order">Order</a>
                                </h1>
                            </nav>
                            <div className='hover:text-bmb-orange transition-colors duration-300 mt-0 md:mt-8 lg:mt-8'>
                                <a className="inline-flex gap-4 md:gap-8 justify-between items-center" href="#test">
                                    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl">
                                        AUTHENTIC VIETNAMESE STREETFOOD
                                    </h2>
                                    <svg className='flex-shrink-0 animate-arrow-down' width="32" height="48" viewBox="0 0 32 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path 
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M31.0102 29.9551C31.6835 30.6614 31.6835 31.8064 31.0102 32.5127L17.219 46.9805C16.5458 47.6868 15.4542 47.6868 14.781 46.9805L0.989768 32.5127C0.316542 31.8064 0.316542 30.6614 0.989768 29.9551C1.663 29.2489 2.75451 29.2489 3.42774 29.9551L14.2761 41.3357V2.29827C14.2761 1.29948 15.0479 0.489796 16 0.489796C16.9521 0.489796 17.7239 1.29948 17.7239 2.29827V41.3357L28.5723 29.9551C29.2455 29.2489 30.337 29.2489 31.0102 29.9551Z"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M13.7912 2.29827C13.7912 1.04656 14.7631 0 16 0C17.2369 0 18.2088 1.04656 18.2088 2.29827V40.1209L28.223 29.6154C29.087 28.7091 30.4955 28.7091 31.3595 29.6154C32.2135 30.5113 32.2135 31.9565 31.3595 32.8524L17.5682 47.3203C16.7043 48.2266 15.2957 48.2266 14.4318 47.3203L0.640521 32.8524C-0.213507 31.9565 -0.213508 30.5113 0.640522 29.6154C1.50447 28.7091 2.91304 28.7091 3.77699 29.6154L13.7912 40.1209V2.29827ZM16 0.979592C15.3328 0.979592 14.7609 1.5524 14.7609 2.29827V41.3357C14.7609 41.5355 14.6408 41.7152 14.4574 41.7899C14.274 41.8646 14.064 41.8193 13.9268 41.6754L3.07849 30.2949C2.59598 29.7887 1.82153 29.7887 1.33901 30.2949C0.846592 30.8114 0.84659 31.6564 1.33902 32.173L15.1303 46.6408C15.6128 47.147 16.3872 47.147 16.8697 46.6408L30.661 32.173C31.1534 31.6564 31.1534 30.8114 30.661 30.2949C30.1785 29.7887 29.404 29.7887 28.9215 30.2949L18.0732 41.6754C17.936 41.8193 17.726 41.8646 17.5426 41.7899C17.3592 41.7152 17.2391 41.5355 17.2391 41.3357V2.29827C17.2391 1.5524 16.6672 0.979592 16 0.979592Z"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='h-screen'>
                        <img
                            src='./BanhMi.png'
                            alt=''
                            className='w-full h-full object-cover object-center'
                        />
                    </div>
                </header>
                <main className='p-8'>
                    <h1 className='text-4xl text-bmb-green' id='test'>
                        Welcome to My App
                    </h1>
                    <p className="mt-4 text-lg font-bold font-poppins text-black-500">
                        Swipe right to open the navigation, or click the button in the
                        top-left corner.
                    </p>
                    <div className="flex gap-4">
                        <a href="https://vite.dev" target="_blank">
                            <img src={viteLogo} className="w-16 h-16" alt="Vite logo" />
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img src={reactLogo} className="w-16 h-16" alt="React logo" />
                        </a>
                    </div>
                    <h1 className="mt-6 text-2xl">Vite + React</h1>
                    <DatabaseViewer />
                </main>
            </div>
        </div>
    );
}

export default App;
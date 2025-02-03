import React from 'react';
import { useSwipeable } from 'react-swipeable';
import BanhMiLogo from '../assets/logo-banhmibros-black.svg';
import NavLink from './NavLink';
import Link from './Link';

interface NavigationProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, setIsOpen }) => {
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIsOpen(false),
        preventScrollOnSwipe: true,
        trackTouch: true,
    });

    return (
        <div
            {...swipeHandlers}
            className={`absolute inset-0 bg-white-500 text-black-500 h-dvh w-screen overflow-y-auto overflow-x-hidden transition-transform ease-in-out duration-500 ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
            {/* Navigation Right - Information */}
            <div className='absolute z-50 top-4 right-4 lg:top-8 lg:right-8 flex flex-col gap-8'>
                <button
                    className="self-end mt-2 md:mt-0 duration-200 hover:text-bmb-orange"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 22.6274L22.6274 0L25.4558 2.82843L2.82843 25.4558L0 22.6274Z"/>
                        <path d="M2.82843 0L25.4558 22.6274L22.6274 25.4558L0 2.82843L2.82843 0Z"/>
                    </svg>
                </button>
                <div className="hidden md:flex flex-col text-right gap-4 font-medium text-sm md:text-base lg:text-xl">
                    <h1 className="text-3xl md:text-4xl lg:text-6xl circula-bold">Banh Mi Bros</h1>
                    <div>
                        <p>Metzgergasse 15</p>
                        <p>9000 St.Gallen</p>
                    </div>
                    <div className='flex flex-col items-end'>
                        <Link href='mailto:hello@banh-mi-bros.ch'>hello[at]banh-mi-bros.ch</Link>
                        <Link href='tel:0784809223'>078 480 92 23</Link>
                    </div>
                    <div className="hidden md:flex lg:flex md:flex-col lg:flex-col mt-4 md:text-base items-end gap-2 font-poppins font-medium lg:text-xl">
                        <a href="https://instagram.com/banhmibros_ch/" className="flex flex-row md:gap-2 lg:gap-3 items-center hover:text-bmb-orange transition-colors duration-300">
                            <p>Instagram</p>
                            <img className="lg:h-6 lg:w-6 md:h-5 md:w-5" src="./icon-instagram.png" alt="Instagram Icon" />
                        </a>
                        <a href="https://www.facebook.com/people/Banh-Mi-Bros/61558393710150/" className="flex flex-row md:gap-2 lg:gap-3 items-center hover:text-bmb-orange transition-colors duration-300">
                            <p>Facebook</p>
                            <img className="lg:h-6 lg:w-6 md:h-5 md:w-5" src="./icon-facebook.png" alt="Facebook Icon" />
                        </a>
                        <a href="https://www.tiktok.com/@banh.mi.bros" className="flex flex-row md:gap-2 lg:gap-3 items-center hover:text-bmb-orange transition-colors duration-300">
                            <p>TikTok</p>
                            <img className="lg:h-6 lg:w-6 md:h-5 md:w-5" src="./icon-tiktok.png" alt="TikTok Icon" />
                        </a>
                    </div>
                    <div className='flex self-end mt-4'>
                        <img src={BanhMiLogo} className='md:w-24 lg:w-32' alt="Logo" />
                    </div>
                </div>
            </div>
            {/* Navigation Left - Links */}
            <div className='absolute top-4 left-4 lg:top-8 lg:left-8 flex flex-col flex-wrap gap-8 lg:gap-16'>
                <nav className='flex flex-col lg:gap-2 text-8xl md:text-8xl lg:text-9xl circula-bold md:circula-extrabold lg:circula-black'>
                    <NavLink className='' href="/">Home</NavLink>
                    <NavLink className='' href="/menu">Menu</NavLink>
                    <NavLink className='' href="/banh-mi">Banh Mi</NavLink>
                    <NavLink className='' href="/order">Order</NavLink>
                    <NavLink className='' href="/catering">Catering</NavLink>
                </nav>

                {/* Address (Small Screen) */}
                <div className="flex flex-col md:hidden gap-2 text-base font-medium">
                    <h1 className='text-3xl md:text-4xl circula-bold'>
                        Banh Mi Bros
                    </h1>
                    <div>
                        <p>Metzgergasse 15</p>
                        <p>9000 St.Gallen</p>
                    </div>
                    <div className='flex flex-col'>
                        <Link className='hover:text-bmb-orange transition-colors duration-300' href='mailto:hello@banh-mi-bros.ch'>hello[at]banh-mi-bros.ch</Link>
                        <Link className='hover:text-bmb-orange transition-colors duration-300' href='tel:0784809223'>078 480 92 23</Link>
                    </div>
                </div>

                {/* Socials (Small Screen) */}
                <div className="flex flex-row w-screen flex-wrap gap-4 pb-4 md:hidden lg:hidden font-poppins font-medium text-sm">
                    <a href="https://instagram.com/banhmibros_ch/" className="flex flex-row gap-2 items-center hover:text-bmb-orange transition-colors duration-300 min-w-0">
                        <img className="h-4 w-4" src="./icon-instagram.png" alt="Instagram Icon" />
                        <p>Instagram</p>
                    </a>
                    <a href="https://www.facebook.com/people/Banh-Mi-Bros/61558393710150/" className="flex flex-row gap-2 items-center hover:text-bmb-orange transition-colors duration-300 min-w-0">
                        <img className="h-4 w-4" src="./icon-facebook.png" alt="Facebook Icon" />
                        <p>Facebook</p>
                    </a>
                    <a href="https://www.tiktok.com/@banh.mi.bros" className="flex flex-row gap-2 pr-4 items-center hover:text-bmb-orange transition-colors duration-300 min-w-0">
                        <img className="h-4 w-4" src="./icon-tiktok.png" alt="TikTok Icon" />
                        <p>TikTok</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navigation;
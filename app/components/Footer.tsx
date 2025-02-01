import Link from './Link';

export default function Footer(){

    return (
        <section className="relative flex flex-col p-16 bg-black-300 text-white-500">
            <div className="absolute top-0 left-0 h-0.5 w-full bg-gray-500"></div>
            <div className="flex flex-row gap-32">
                <div className="flex flex-col gap-1">
                    <p>Banh Mi Bros</p>
                    <p>Metzgergasse 15</p>
                    <p>9000 St.Gallen</p>
                    <a href="mailto:hello@banh-mi-bros.ch">hello@banh-mi-bros.ch</a>
                    <a href="tel:0784809223">078 480 92 23</a>
                </div>
                <div className="flex flex-col gap-1">
                    <Link href="/menu">Menu</Link>
                    <Link href="/order">Order</Link>
                    <Link href="/process">Process</Link>
                    <Link href="/location">Location</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                <div className="flex flex-col gap-1">
                    <Link href="/instagram">Instagram</Link>
                    <Link href="/tiktok">TikTok</Link>
                    <Link href="/facebook">FaceBook</Link>
                </div>
                <div className='ml-auto'>
                    <a href="https://zngr-dynamics.ch">Site by <span className="font-medium text-white-500">ZNGR</span></a>
                </div>
            </div>
            <div className="flex flex-row py-16 gap-16">
                <Link href="/legal" data-en="Imprint" data-de="Impressum">Imprint</Link>
                <Link href="/legal" data-en="Privacy Policy" data-de="Datenschutz">Privacy Policy</Link>
            </div>
            <Link href="/about">About Us</Link>
        </section>
    )
}
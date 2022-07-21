import React from 'react'
const Nav = () => {
    return (
        <nav className="landing-page__nav w-max md:block hidden">
            <ul className="landing-page__nav-ul flex gap-5 font-medium">
                <li className="landing-page__nav-ul-link py-2 px-1">
                    <a href='#welcome' className=''>Home</a>
                </li>
                <li className="landing-page__nav-ul-link py-2 px-1">
                    <a href='#artikel' className=''>Artikel</a>
                </li>
                <li className="landing-page__nav-ul-link py-2 px-1">
                    <a href='#about' className=''>Tentang kami</a>
                </li>
                <li className="landing-page__nav-ul-link py-2 px-1">
                    <a href='#contact' className=''>Kontak kami</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav
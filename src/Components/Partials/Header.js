import React from "react"
import Logo from "./Logo"
import Nav from "./Nav"
import Login from "./Login"
import ToogleMenu from "./ToogleMenu"
const Header = ({toogleMenu, setToogleMenu}) => {
    return (
        <header className="landing-page__header w-full bg-slate-800 text-white px-2 sm:px-4 py-4 text-lg items-center">
            <div className="w-10/12 flex items-center justify-between mx-auto">
                <Logo />
                <Nav />
                <Login/>
                <ToogleMenu handleSetToogleMenu={setToogleMenu} onToogleMenu={toogleMenu}/>
            </div>
            {toogleMenu === true ? <Menu /> : <></>}
        </header>
    )
}
const Menu = () => {
    return (
        <div className="landing-page__menu md:hidden w-10/12 mx-auto h-max rounded bg-slate-900 mt-4 flex flex-col" data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        data-aos-offset="100">
            <nav className="landing-page__nav  md:hidden block p-3 w-full">
                <ul className="landing-page__nav-ul flex flex-col gap-2 font-medium w-full">
                    <li className="landing-page__nav-ul-link py-2 px-1">
                        <a href='#welcome' className=''>Home</a>
                    </li>
                    <hr className="bg-slate-900"/>
                    <li className="landing-page__nav-ul-link py-2 px-1">
                        <a href='#artikel' className=''>Artikel</a>
                    </li>
                    <hr/>
                    <li className="landing-page__nav-ul-link py-2 px-1">
                        <a href='#about' className=''>Tentang kami</a>
                    </li>
                    <hr/>
                    <li className="landing-page__nav-ul-link py-2 px-1">
                        <a href='#contact' className=''>Kontak kami</a>
                    </li>
                </ul>
            </nav>
            <div className="landing-page__header__button-login w-max self-end py-3 px">
                <a className="text-lg p-6" href="#login">Login</a>
            </div>
        </div>
    )
}
export default Header
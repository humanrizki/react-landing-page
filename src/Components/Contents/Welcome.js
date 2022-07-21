import React from "react";
const Welcome = () => {
    return (
        <>
            <div className="landing-page__welcome w-full bg-slate-800 p-3 text-white text-base" id="welcome">
                <div className="flex h-max mx-auto w-10/12 justify-between items-center mt-9">
                    <div className="landing-page__welcome_text md:w-2/4 w-full md:mb-0 mb-8">
                        <h1 className="text-2xl mb-5 font-medium">Selamat datang!</h1>
                        <p className="p-0 m-0">Sekolah Wirausaha memiliki tujuan untuk menciptakan pemuda / pemudi yang siap untuk berwirausaha diusia muda dengan hasil yang baik dan tidak menciptakan pemuda yang pesimis!</p>
                    </div>
                    <div className="landing-page__welcome_text md:w-max md:block hidden">
                        <img src="img/dftr.png" alt="welcome" className="w-60"/>
                    </div>  
                </div>
                
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 180 1440 100">
                <path fill="#1e293b" fill-opacity="1" d="M0,160L80,165.3C160,171,320,181,480,202.7C640,224,800,256,960,256C1120,256,1280,224,1360,208L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
            </svg>
        </>
        
    )
}
export default Welcome
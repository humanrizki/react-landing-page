import React from "react"
const About = () => {
    return (
            <div className="w-10/12 h-max mx-auto flex md:flex-row flex-col gap-6 bg-slate-800 rounded-lg justify-start md:items-center items-start mt-56 mb-52 text-white md:p-0" id="about" data-aos="fade-up" data-aos-duration="2000">
                <div className="md:w-3/5 w-full">
                    <img src="img/about.jpg" alt="about image" className="h-full w-full md:rounded-tl-lg md:rounded-bl-lg rounded-t-lg h-auto"/>
                </div>
                
                <div className="md:w-2/5 w-full">
                    <div className="p-3">
                        <h1 className="text-2xl font-medium mb-6">Tentang kami</h1>
                        <p className="text-sm">Red Umbrella ingin terlibat langsung untuk urusan pembangunan ekonomi tersebut melalui Sekolah Wirausaha Dtech adalah bertambahnya jumlah wirausaha usia produktif dan Mandiri secara Ekonomi”</p>
                    </div>
                </div>
            </div>
    )
}
export default About
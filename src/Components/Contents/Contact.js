import React from 'react'
const Contact = () => {
    return (
        <div className="landing-page__contact w-10/12 mx-auto mt-28 mb-28 flex gap-2" id='contact'>
            <div data-aos="fade-up" data-aos-duration="2000" className='md:w-3/5 lg:w-3/5'>
                <h1 className='text-4xl md:w-4/5 w-full font-bold text-slate-800 mb-3'>PELAJARI ILMU WIRAUSAHA SELAMA BOOTCAMP DALAM 44 HARI</h1>
                <p className='text-sm font-medium text-slate-500 mb-4'>Gambaran kelas</p>
                <p className='text-base text-slate-800 md:w-4/5 w-full mb-5'>Untuk awal pertemuan, kami akan mengajarkan apa itu wirausaha dan ilmu digital pendukung untuk wirausaha. Kalian akan dibimbing dari awal dengan tahap akhir akan mengadakan implementasi nyata dalam dunia wirausaha.</p>
                <div className='contact__action_view-joinlist mb-4'>
                    <div className='action flex gap-2'>
                        <button className='px-4 py-2.5 rounded-lg border-slate-800 border'>Contact kami</button>
                        <button className='px-4 py-2.5 rounded-lg text-white bg-slate-800'>Gabung ke-kelas</button>
                    </div>
                </div>
                <div className='md:hidden block contact__list-schedule w-full'  >
                    <div className='grid grid-cols-2 gap-x-9 gap-y-8 '>
                        <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                            <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                                <p className='text-base font-medium'>Sesi bootcamp</p>
                                <p className='text-xl'>Agu 17 - Sep 30</p>
                            </div>
                        </div>
                        <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                            <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                                <p className='text-base font-medium'>Pelajari</p>
                                <p className='text-xl'>Ilmu wirausaha</p>
                            </div>
                        </div>
                        <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                            <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                                <p className='text-base font-medium'>Selang waktu</p>
                                <p className='text-xl'>3 jam sehari</p>
                            </div>
                        </div>
                        <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000">
                            <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                                <p className='text-base font-medium'>dibuka untuk</p>
                                <p className='text-xl'>Siswa graduate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:block hidden contact__list-schedule md:w-2/5 lg:w-2/5'  >
                <div className='grid grid-cols-2 gap-x-9 gap-y-8 '>
                    <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
                        <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                            <p className='text-base font-medium'>Sesi bootcamp</p>
                            <p className='text-xl'>Agu 17 - Sep 30</p>
                        </div>
                    </div>
                    <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">
                        <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                            <p className='text-base font-medium'>Pelajari</p>
                            <p className='text-xl'>Ilmu wirausaha</p>
                        </div>
                    </div>
                    <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1500">
                        <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                            <p className='text-base font-medium'>Selang waktu</p>
                            <p className='text-xl'>3 jam sehari</p>
                        </div>
                    </div>
                    <div className='col-span-1' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="2000">
                        <div className='border-l-2 border-t-0 border-r-0 border-b-0 border-slate-800 pl-2'>
                            <p className='text-base font-medium'>dibuka untuk</p>
                            <p className='text-xl'>Siswa graduate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact
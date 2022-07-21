import React from "react"
import OneArticle from "./OneArticle"
const Article = () => {
    return (
        <div className="landing-page__article w-full mt-48" id="artikel">
            <div className="w-10/12 mx-auto grid-cols-1 grid md:grid-cols-3 gap-y-3 md:gap-3 ">
                <OneArticle title="Wirausaha terbaik dari..." 
                desc="Ini deskripsi gw bikin panjang aja dibanding harus pake lorem yang gk jelas arti dan maknanya! Ok, gw panjangin biar ada konten deskripsi yang jelas dari sebuah article ini!" 
                author="m.rizki_array"
                job="writter"/>
                <OneArticle title="ini judul 2" 
                desc="Ini deskripsi gw bikin panjang aja dibanding harus pake lorem yang gk jelas arti dan maknanya! Ok, gw panjangin biar ada konten deskripsi yang jelas dari sebuah article ini!" 
                author="m.rizki_array"
                job="writter"/>
                <OneArticle title="ini judul 3" 
                desc="Ini deskripsi gw bikin panjang aja dibanding harus pake lorem yang gk jelas arti dan maknanya! Ok, gw panjangin biar ada konten deskripsi yang jelas dari sebuah article ini!" 
                author="m.rizki_array"
                job="writter"/>
            </div>
            <div className="w-10/12 mx-auto mt-7 flex justify-center" data-aos="fade-up" data-aos-delay="500" data-aos-duration="2000">
                <button className="mx-auto border border-slate-800 rounded px-4 py-2.5">Load more article</button>
            </div>
        </div>
    )
}
export default Article
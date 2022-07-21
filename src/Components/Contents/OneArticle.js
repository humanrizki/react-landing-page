import React from "react"
const OneArticle = ({title, desc, author, job}) => {
    return (
        <div className="landing-page__article_one-article col-span-1 p-5 border border-slate-600 rounded shadow shadow-slate-800" data-aos="fade-up" data-aos-duration="2000">
            <h1 className="text-2xl font-medium">{title}</h1>
            <p className="text-sm mb-4 mt-1 font-medium text-slate-500">artikel</p>
            <p className="text-base">{desc}</p>
            <div className="author-profile mt-5 flex gap-4 items-center">
                <div>
                    <img src="img/logo3.png" className="w-9" alt="profile image"/>
                </div>
                <div>
                    <p className="text-base font-medium text-blue-500">{author}</p>
                    <p className="text-sm font-medium text-slate-500">{job}</p>
                </div>
            </div>
        </div>
    )
}
export default OneArticle
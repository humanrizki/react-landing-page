import React from 'react'
import {FilterRight} from 'react-bootstrap-icons'
const ToogleMenu = ({onToogleMenu, handleSetToogleMenu}) => {
    return (
        <div className='landing-page__header__button-toogle-menu md:hidden block'>
            <button onClick={handleSetToogleMenu.bind(this, !onToogleMenu)} className="text-lg"><FilterRight size={46}/></button>
        </div>
    )
}
export default ToogleMenu
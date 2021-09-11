import React, {useState, useEffect} from 'react';
import "./styles.scss";

// Icons 
import { AiOutlineSearch } from 'react-icons/ai';
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { GrMenu } from 'react-icons/gr';
import { GrClose } from 'react-icons/gr';

// Components
import SearchBar from './SearchBar'
import Menu from './Menu'
import {Link} from 'react-router-dom'

// Redux
import { connect, useDispatch, useSelector } from 'react-redux'
import { setHeaderMobileMenu } from '../../redux/Header/header.action'

const mapState = ({product}) => ({
    productData: product.products
})

const Header = () => {

    const dispatch = useDispatch()
    const { productData } = useSelector(mapState)

    const [onSearchClass, setOnSearchClass] = useState("")  
    const [onMenuBtnClick, setOnMenuBtnClick] = useState(false)
    console.log(onMenuBtnClick)
    
    useEffect(() => {
        dispatch(setHeaderMobileMenu(onMenuBtnClick))
    }, [onMenuBtnClick, dispatch])

    return (
    <div className="HeaderOrderElements">
            <nav className="header">
                <div className="header-leftNav">
                    <Link to="/">
                        <img src="https://cdn.shopify.com/s/files/1/1241/4530/files/logo_home_300x300.png?v=1582201056" alt="Logo"/>
                    </Link>
                </div>
                <div className="header-rightNav">
                    <li onClick={() => setOnSearchClass("header-open-search")}>
                        <AiOutlineSearch className="header-rightNav-search-icon"/>
                        <span>Buscar...</span>
                    </li>
                    <li>
                        <Link to="/account/login">
                            <HiOutlineUser className="header-rightNav-user-icon"/>
                        </Link>
                    </li>
                    <li>
                        <HiOutlineShoppingCart className="header-rightNav-cart-icon"/>
                        <span>{productData.length}</span>
                    </li>
                    <li>
                        {!onMenuBtnClick ? 
                        <GrMenu onClick={() => setOnMenuBtnClick(!onMenuBtnClick)} className="header-rightNav-menu-icon"/> :
                        <GrClose onClick={() => setOnMenuBtnClick(!onMenuBtnClick)} className="header-rightNav-menu-icon"/>
                        }
                    </li>
                </div>
            </nav>
            {onSearchClass ? <SearchBar onSearchClass={onSearchClass} setOnSearchClass={setOnSearchClass}/> : null}
            <Menu onMenuBtnClick={onMenuBtnClick}/>
    </div>     
    )
}

export default connect(null, {setHeaderMobileMenu})(Header);

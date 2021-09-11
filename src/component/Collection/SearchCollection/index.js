import React, { useState, Fragment, useEffect } from 'react'
import "./styles.scss"
// Icons
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { MdClose } from 'react-icons/md';
// Components
import SearchFilter from './SearchFilter';
import ItemFilter from "./SearchFilter/ItemFilter"
// Redux
import {useDispatch} from 'react-redux'
// Actions
import {addFilterCollectionProduct} from '../../../redux/FilterProducts/filterProduct.action'

const SearchCollection = () => {

    const dispatch = useDispatch()

    const [active, setActive] = useState(false)
    const [activeCollection, setActiveCollection] = useState("")
    const [arr, setArr] = useState([])
    const [Checked, setChecked] = useState([])
    const Elements = [
        {
            id: 1,
            img: "https://cdn.shopify.com/s/files/1/1241/4530/files/Materia_Magnetic.jpg?v=1590050430",
            title: "Materia Magnetic",
            filter: "",
            val: 0
        },
        {
            id: 2,
            img: "https://cdn.shopify.com/s/files/1/1241/4530/files/Atom_Oasis.jpg?v=1590050456",
            title: "Atom Oasis",
            filter: "",
            val: 0
        }
    ]
    const ElemPriceFilter = [
        {
            id: 3,
            val: 45,
            title: "Last then 45",
            filter: ""
        },
        {
            id: 4,
            val: 70,
            title: "Last then 70",
            filter: ""
        },
        {
            id: 5,
            val: 100,
            title: "Last then 100",
            filter: ""
        }
    ]

    const OrderByFilter = [
        {
            id: 6,
            filter: "A-Z",
            title: "A-Z",
            val: 0
        },
        {
            id: 7,
            filter: "Price",
            title: "Price",
            val: 0
        }
    ]

    const handleElementOnClick = (elemId, value) => {

        const currentIndex = Checked.indexOf(elemId)
        const newChecked = [...Checked]
        const newElementArr = [...arr]

        if(currentIndex === -1) {
            newChecked.push(elemId)
            newElementArr.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
            newElementArr.splice(currentIndex, 1)
        }
        setArr(newElementArr)

        setChecked(newChecked)
        console.log("Checked",Checked)
        console.log("newElementArr",arr)
    }
    
    const clearFilter = () => {
        setChecked([])
        setArr([])
    }

    const onFilterItemClick = (filterItemValue) => {
        setActive(!active)
        setActiveCollection(filterItemValue)
    }


    useEffect(() => {
        dispatch(addFilterCollectionProduct(arr))
    }, [arr])



    const renderFilter = () => {
        if(activeCollection === "Price") {
            return(
                <Fragment>
                    {ElemPriceFilter.map(el => {
                        return <ItemFilter
                            className={Checked.includes(el.id) ? "ItemFilter-active" : "ItemFilter"}
                            onClick={() => handleElementOnClick(el.id, el)} key={el.id}>Lest then {el.val}</ItemFilter>
                    })}
                </Fragment>
            )
        } else if(activeCollection === "Collection") {
            return(
                <Fragment>
                    <div className="Filter-collection">
                        {Elements.map((el, index) => (
                            <div 
                            key={index}
                            onClick={() => handleElementOnClick(el.id, el)}
                            className={Checked.includes(el.id) ? "Filter-collection__margin-active" : "Filter-collection__margin"}>
                                <img src={el.img} alt={el.title}/>
                                <p>{el.title}</p>
                            </div>
                        ))}
                    </div>
                </Fragment>
            )
        } else if(activeCollection === "OrderBy") {
            return (
                <Fragment>
                    {OrderByFilter.map(el => {
                        return <ItemFilter
                            className={Checked.includes(el.id) ? "ItemFilter-active" : "ItemFilter"} 
                            onClick={() => handleElementOnClick(el.id, el)} key={el.id}>{el.filter}</ItemFilter>
                    })}
                </Fragment>
            )
        }
    }

    return (
        <Fragment>
            <div className="SearchCollection">
                <div className="SearchCollection-left">
                    <div 
                    className="SearchCollection-left__item"
                    onClick={() => onFilterItemClick("Price")} >
                        Price {active && activeCollection === "Price" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                    <div 
                    className="SearchCollection-left__item"
                    onClick={() => onFilterItemClick("Collection")} >
                        Collection {active && activeCollection === "Collection" ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </div>
                </div>
                <div 
                className="SearchCollection-right"
                onClick={() => onFilterItemClick("OrderBy")} >
                    <div className="SearchCollection-right__item">Order By{active && activeCollection === "OrderBy"  ? <IoIosArrowUp /> : <IoIosArrowDown />}</div>
                </div>
            </div>
            {active && (
                <SearchFilter>
                    {renderFilter()}
                    <div className="Filter-collection__filter-active">
                        {arr.map(el => <p onClick={() => handleElementOnClick(el.id, el)} key={el.id}>{el.title} <MdClose /></p>
                            
                        )}
                        {arr.length > 0 ? <button onClick={() => clearFilter([])}>Clear Filters</button> : null}                        
                    </div>
                </SearchFilter>
            )}
        </Fragment>
    )
}

export default SearchCollection

import React, {useState, useEffect} from 'react'
import "./styles.scss"
import { useDispatch, useSelector } from 'react-redux'

// Component
import Button from '../Form/Button'
import Modal from '../Hoc/Modal'
import InputField from '../Form/InputField'
import ReactSelect from '../Form/Select'

// Actions
import { addProductStart, fatchProductsStart, deleteProductStart, editProductStart } from '../../redux/Product/product.action'

const mapState = ({ product }) => ({
    productsData: product.products
})

const AdminAddProduct = () => {
    const dispatch = useDispatch()
    const { productsData } = useSelector(mapState)

    useEffect(() => {
        dispatch(fatchProductsStart())
    }, [])

    const [modal, setModal] = useState(false)
    const [modalEdit, setModalEdit] = useState(false)
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState(0)
    const [category, setCategory] = useState("")
    const [collection, setCollection] = useState("")
    const [docId, setDocId] = useState("")
    const [error, setError] = useState(false)

    const getCat = (cat) => {
        setCategory(cat.value)
    }
    const getCol = (col) => {
        setCollection(col.value)
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        if(title.length < 3 || img.length === 0 || category === "") {
            setError(true)
            return
        }
       dispatch(addProductStart({
           title,
           img,
           price,
           category,
           collection
       }))
       resetForm()
    }
    const handleOnEditSubmit = (e) => {
        e.preventDefault()
        if(title.length < 3 || img.length === 0 || category === "") {
            setError(true)
            return
        }
       dispatch(editProductStart({
           title,
           img,
           price,
           category,
           collection,
           docId
       }))
       resetForm()
    }

    const handleOnEditClick = (DocId) => {
        setDocId(DocId)
        setModalEdit(true)
    }

    const resetForm = () => {
        setTitle("")
        setImg("")
        setPrice(0)
        setCategory("")
        setCollection("")
        setError(false)
        setModal(false)
        setModalEdit(false)
    }
    
    const optionsCategory = [
        { value: 'men', label: 'Men' },
        { value: 'women', label: 'Women' },
    ]
    
    const optionsCollection = [
    { value: 'materia magnetic', label: 'Materia Magnetic' },
    { value: 'atom oasis', label: 'Atom Oasis' },
  ]

    console.log("COLLECTION", collection)
    return (
        <div className="AdminAddProduct">
            <Button
            onClick={() => setModal(true)} 
            style={{marginTop: "2rem"}}
            >
                Add new product
            </Button>
            {modal && 
                <Modal 
                onDismiss={() => setModal(false)}
                title="ADD NEW PRODUCT" 
                > 
                    <form onSubmit={handleOnSubmit}>
                        {error === true ? <h4 style={{textAlign: 'center', color: "#bb0023"}}>Please fill all the fields</h4> : null}
                        <InputField value={title} onChange={(e) => setTitle(e.target.value)} fontSize={1.6} type="text" label="Title" />
                        <InputField value={img} onChange={(e) => setImg(e.target.value)} fontSize={1.6} type="text" label="Main img url" />
                        <InputField value={price} onChange={(e) => setPrice(e.target.value)} fontSize={1.6} type="number" label="Price" />
                        <div style={{display: 'flex', justifyContent: "center"}}>
                            <ReactSelect options={optionsCategory} getValue={getCat} title="Category"/>
                            <ReactSelect options={optionsCollection} getValue={getCol} title="Collection"/>
                        </div>
                        <Button type="submit">
                            add product
                        </Button>
                    </form>
                </Modal>
            }
             {/* Modal Edit */}
             {modalEdit && 
                <Modal 
                onDismiss={() => setModalEdit(false)}
                title="EDIT PRODUCT" 
                > 
                <form onSubmit={handleOnEditSubmit}>
                {error === true ? <h4 style={{textAlign: 'center', color: "#bb0023"}}>Please fill all the fields</h4> : null}
                <InputField value={title} onChange={(e) => setTitle(e.target.value)} fontSize={1.6} type="text" label="Title" />
                <InputField value={img} onChange={(e) => setImg(e.target.value)} fontSize={1.6} type="text" label="Main img url" />
                <InputField value={price} onChange={(e) => setPrice(e.target.value)} fontSize={1.6} type="number" label="Price" />
                <div style={{display: 'flex', justifyContent: "center"}}>
                    <ReactSelect options={optionsCategory} getValue={getCat} title="Category"/>
                    <ReactSelect options={optionsCollection} getValue={getCol} title="Collection"/>
                </div>
                <Button type="submit">
                    edit product
                </Button>
                </form>
                </Modal>
                }
            <div 
            className="AdminAddProduct-productsData">
                {productsData.map(item => {
                    return (
                    <ul className="AdminAddProduct-productsData__list" key={item.docID}>
                        <li><img src={item.productImg}/></li>
                        <li>{item.productTitle}</li>
                        <li>{item.productCategory}</li>
                        <li>{item.productCollection}</li>
                        <li>${item.productPrice}</li>
                        <li>
                            <Button 
                            style={{backgroundColor: "#19824dc4"}}
                            onClick={() => handleOnEditClick(item.docID)}
                            >
                                Edit
                            </Button>
                        </li>
                        <li>
                            <Button 
                            onClick={() => dispatch(deleteProductStart(item.docID))}
                            style={{backgroundColor: "#c85f5f"}}>
                                Delete
                            </Button>
                        </li>
                    </ul>
                    )
                })}
            </div>
        </div>
    )
}

export default AdminAddProduct

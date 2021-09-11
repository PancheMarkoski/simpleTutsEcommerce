import  ReactDOM  from 'react-dom'
import './styles.scss'

const Modal = ({children, title, onDismiss}) => {
    return ReactDOM.createPortal(
        <div 
        onClick={() => onDismiss()}
        className="Modal">
            <div
            onClick={(e) => e.stopPropagation()} 
            className="Modal-details">
                <h2>
                    {title}
                </h2>
                <div className="Modal-details__body">
                    {children}
                </div>
            </div>
        </div>,
        document.querySelector("#modal")
    )
}

export default Modal

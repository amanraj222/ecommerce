import { useState } from "react";
import Modal from "../UI/modal";
import "./AddProduct.css";


function AddProduct ({ showAddProduct, onCloseAddProduct, onAddProduct}) {
    const [productName, setProductName] = useState("");
    // const nameRef = useRef();
    function handleSubmit(event) {
        event.preventDefault(); 
        // const nameValue = nameRef.current.value;
        onAddProduct(productName);   
    }
    const handleProductNameChange = (event) => {
        const enteredName = event.target.value;
        setProductName(enteredName);
    }
    return (
        <Modal show={showAddProduct} onClose={onCloseAddProduct}>
            <div className="add-product-container">
                <div className="add-product-heading">Add Product</div>
                <form onSubmit={handleSubmit} className="add-product-form">
                    <div className="form-label">Enter Product Name</div>
                    {/* <input ref={nameRef} className="form-input" /> */}
                    <input className="form-input" value={productName} onChange={handleProductNameChange}/>
                    <button
                      type="submit"
                      className="yellow-button submit-button"
                    >Add Product</button>

                </form>
            </div>
        </Modal>
    );    
}

export default AddProduct;
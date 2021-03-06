import './styles.css';

const Product = () => {
    return (
        <div className="product-list col-12">
            <div className="row">
                <div className="col-3">
                    <img 
                        src="https://www.petlove.com.br/images/products/230249/product/Ra%C3%A7%C3%A3o_Seca_Nestl%C3%A9_Purina_Pro_Plan_Frango_C%C3%A3es_Adultos_Ra%C3%A7as_M%C3%A9dias_3105259_15.jpg?1627734333" 
                        className="img-fluid" />
                </div>
                <div className="col-6">
                    <h6>
                        <label className="badge badge-primary">R$ 45,00</label>
                    </h6>
                    <small>
                        <b>Ração Purina Pro Plan</b>
                    </small>
                </div> 
                <div className="col-3">
                    <button className="btn btn-secondary rounded-circle"><b>-</b></button>
                </div>
            </div>
        </div>
    )

}

export default Product;
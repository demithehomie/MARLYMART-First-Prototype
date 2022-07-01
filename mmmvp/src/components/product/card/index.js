import './styles.css';

const Product = () => {
    return (
        <div className="product col-3">
            <img 
                src="https://www.aprimoredecor.com.br/wp-content/uploads/2017/05/Pintrest-1-1.jpg"
                className="img-fluid align-center"
            />
            <button className="btn btn-primary rounded-circle">+</button>
            <h4>
            <label className="badge badge-primary">R$ 895,99</label>
            </h4>
            <small>
                <b>Cozinha Planejada em Vidro com estrutura de Alumínio Completa 0,9x2,1x0,8m </b>
            </small>
        </div>
    );
};

export default Product;
import Header from '../../components/header';
import Illustration from '../../assets/onion.jpg';

const Cadastro = () => {

return (
    <div className="container-fluid h-100 bg-primary">
       <Header smallerVersion />
        <div className="row">
        <div className="col-6 text-end my-auto">
            <img src={Illustration} className="img-fluid" />
        </div>

        <div className="col-6">
            <div className="box col-8">
                <h2 className="text-center">Pague menos. </h2>
                <h2 className="text-center">Receba tudo em casa.</h2>
                <br />
                <br />
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder='Nome Completo'
                
                />
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder='E-Mail'
                
                />
                 <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder='CPF'
                
                />
                
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder='Telefone'
                
                />
                <input
                    type="date"
                    className="form-control form-control-lg mb-3"
                    placeholder='Data de Nascimento'
                
                />
                <button className='btn btn-lg btn-block btn-secondary'>
                    Finalizar Cadastro
                </button> 
            </div>
        </div>
    </div>
    </div>
    );
};

export default Cadastro;
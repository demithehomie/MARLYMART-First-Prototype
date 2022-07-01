import LogoGrande from '../../assets/marlymart3.jpg';
import Logo from '../../assets/marlymart4.jpg';

import './styles.css';

const Header = ({ smallerVersion }) => {
    return  (
    <div className="col-12">
    <header className='py-4 px-4 text-center'>
        <img src={smallerVersion ?Logo : LogoGrande} className="img-fluid" />
    </header>
    <button className="btn btn-secondary cart-button">
      <span className="mdi mdi-cart"></span>    2 Itens
    </button>
</div>
    )
}

export default Header
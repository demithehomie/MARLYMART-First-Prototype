import Header from "../../components/header";
import Product from "../../components/product/card";

import './styles.css';

const Mktplace = () => {
    return (
        <div className="h-100">
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <img 
                            src="https://scontent.fsdu11-1.fna.fbcdn.net/v/t39.30808-6/237748982_4149391415168168_7303405092296037797_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGaOI6Gn52ZuBWb2xtMycSeZH6TCHZdsGhkfpMIdl2waLQM280BfS0DGqbjjOIGFQ5C05WdNscieFBhB61hZ5v8&_nc_ohc=WRZV2i4_Uq4AX8M66JY&_nc_pt=1&_nc_ht=scontent.fsdu11-1.fna&oh=00_AT88toMXuzWJLq2MgCLlfRJaGlrFiDEbWv8hmlcoV0cp8A&oe=623D1DC8"
                            className="img-fluid mktplace-image"
                            />
                            <b>Glasscompany</b>
                            <p>Móveis, Construção Civil</p>
                            <div className="mktplace-infos">
                            <span className="mdi mdi-star"></span>
                                <text>
                                    <b>5,0</b>
                                </text>
                            <span className="mdi mdi-cash-usd-outline"></span>
                            <text>$$$</text>
                            <span className="mdi mdi-crosshairs-gps "></span>
                            <text>  1,8 km</text>
                            </div>

                            <label className="badge badge-primary">Frete Grátis</label>
                        </div>
                    <div className="col-10">
                        <h5>Produtos</h5>
                        <br />
                        <div className="row">
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                               <Product />
                            ))}
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    );
};

export default Mktplace;
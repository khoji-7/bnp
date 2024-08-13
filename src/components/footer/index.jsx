import "./style.css";

import {NavLink} from "react-router-dom";

export default function footer() {
    return (
        <div className="footerParent">
            <div className="container">
                <div className="footer">
                    <div className="footerLogos">
                        <img
                            src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
                            alt=""
                            className="footerLogo"
                        />
                        <p className="footerText">
                            “Bukhara Natural Product” koʻp yillardan buyon butun dunyoda foydalanish uchun paxta
                            matolari ishlab chiqaradigan kompaniya hisoblanadi.
                        </p>
                    </div>
                    <div className="footerMenu">
                        <p className="footerTitle">menu</p>
                        <NavLink to="/" className="footerText">
                            Uy
                        </NavLink>
                        <NavLink to="/about" className="footerText">
                            Biz haqqimizda
                        </NavLink>
                        <NavLink to="/contact" className="footerText">
                            Contactg us
                        </NavLink>
                        <NavLink to="/collection" className="footerText">
                            Colleksiyalar
                        </NavLink>
                    </div>
                    <div className="footerMenu">
                        <p className="footerTitle">kontaktlar</p>
                        <p className="footerText">buxoro st Alpomish 80</p>
                        <p className="footerText">+998-94-899-99-49</p>
                        <p className="footerText">t.me/khoji.7</p>
                        <p className="footerText">buxoro st Alpomish 80</p>



                    </div>
                    <div className="inputPar">
                        <p className="footerTitle">elektron pochta orqali obuna boling</p>
                        <div  className="inputChild">
                            <input type="email" className="input" />
                            <button className="footerBtn">obuna bolish</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

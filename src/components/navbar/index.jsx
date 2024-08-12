import "./style.css";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navbar = () => {
    const [openModal, setOpenModal] = useState(false);
    const modalFunc = () => {
        setOpenModal(true);
    };

    return (
        <div className="container">
            <div className="navbarParent">
                <img
                    src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png"
                    alt=""
                    className="navbarLogo"
                />
                <div className="navbarLink">
                    <NavLink to="/" className="link" activeClassName="active">
                        Uy
                    </NavLink>
                    <NavLink to="/about" className="link" activeClassName="active">
                        Biz haqqimizda
                    </NavLink>
                    <NavLink to="/contact" className="link" activeClassName="active">
                        Contactg us
                    </NavLink>
                    <NavLink to="/collection" className="link" activeClassName="active">
                        Colleksiyalar
                    </NavLink>
                </div>
                <select name="lang" id="" className="select">
                    <option value="uz" className="option">
                        o'zbekcha
                    </option>
                    <option value="en" className="option">
                        english
                    </option>
                    <option value="ru" className="option">
                        russia
                    </option>
                </select>
                <button onClick={modalFunc} className="modalBtn">
                    <MenuIcon />
                </button>
                
                
            </div>
            
            {openModal && (
                    <div className="modal">
                        <div className="modalLinkPar">
                            <NavLink to="/" className="modalLink" activeClassName="active">
                                Uy
                            </NavLink>
                            <NavLink to="/about" className="modalLink" activeClassName="active">
                                Biz haqqimizda
                            </NavLink>
                            <NavLink to="/contact" className="modalLink" activeClassName="active">
                                Contactg us
                            </NavLink>
                            <NavLink to="/collection" className="modalLink" activeClassName="active">
                                Colleksiyalar
                            </NavLink>
                        </div>
                        <button onClick={() => setOpenModal(false)} className="modalBtnClose">
                            <CloseIcon />
                        </button>
                    </div>
                )}{" "}
        </div>
    );
};

export default navbar;

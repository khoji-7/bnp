import "./style.css";
import {NavLink} from "react-router-dom";




export default function news(){

    return(
        
        <div className="newsParent">
            <div className="container">
                <div className="newsChild">
                    <p className="newsTitle">
                        yangiliklar
                    </p>
                    <p className="newsText">
                        buxoro tabiiy mahsulot
                    </p>
                    
                    <div className="newsCardPar">
                    <NavLink to="/news" className="newsLink">
                    <div className="newsCard">
                            
                            <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/daniel-korpai-1074289-unsplash-768x430.png" alt="" className="newCardImg"/>
                            <p className="newsText">
                            10/05/2019  admin tomonidan
                            </p>
                            <p className="newsCardTitle">
                            Qanday qilib mukammal gadjetlarni tanlash mumkin
                            </p>
                            <p className="newsText">
                            Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepalikka urilganda ...
                            </p>
                           
                        </div>
                        </NavLink>
                        <NavLink to="/news" className="newsLink">
                        <div className="newsCard">
                            
                            <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/daniel-korpai-1074289-unsplash-768x430.png" alt="" className="newCardImg"/>
                            <p className="newsText">
                            10/05/2019  admin tomonidan
                            </p>
                            <p className="newsCardTitle">
                            Qanday qilib mukammal gadjetlarni tanlash mumkin
                            </p>
                            <p className="newsText">
                            Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepalikka urilganda ...
                            </p>
                            
                        </div>
                        </NavLink>
                        <NavLink to="/news" className="newsLink">
                        <div className="newsCard">
                            
                            <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/daniel-korpai-1074289-unsplash-768x430.png" alt="" className="newCardImg"/>
                            <p className="newsText">
                            10/05/2019  admin tomonidan
                            </p>
                            <p className="newsCardTitle">
                            Qanday qilib mukammal gadjetlarni tanlash mumkin
                            </p>
                            <p className="newsText">
                            Go'zal vodiy atrofimni bug' bilan to'ldirganda va meridian quyoshi tepalikka urilganda ...
                            </p>
                            
                        </div>
                        </NavLink>
                    </div>
                    
                </div>
            </div>
        </div>
    
    )
}
import "./style.css"


export default function header(){
    return(
        <div className="headerParent">
            <div className="container">
                <div className="headerMain">
                    <img src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png" alt="" className="headerMainImg"/>
                    
                        <p  className="headerMainTitle">
                            buxoro <br /> tabiiy <br /> mahsulot
                        </p>
                </div>
                <div className="headerSer">
                    <div className="header">
                        <div>
                        <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_delivery_1095359.svg" alt="" className="headerIcon"/>

                        </div>
                        <div className="headerTex">
                        <p className="headerTitle">
                        Yetkazib berish bepul
                        </p>
                        <p className="headerText">
                        Barcha buyurtmalar uchun bepul yetkazib berish
                        </p>
                        </div>
                    </div>
                    <div className="header">
                        <div>
                        <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_guarantee_952398.svg" alt="" className="headerIcon"/>

                        </div>
                        <div className="headerTex">
                        <p className="headerTitle">
                        Qaytish kafolati
                        </p>
                        <p className="headerText">
                        30 kunlik pulni qaytarish
                        </p>
                        </div>
                    </div>
                    <div className="header">
                        <div>
                        <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/Group-995.svg" alt="" className="headerIcon"/>

                        </div>
                        <div className="headerTex">
                        <p className="headerTitle">
                        24/7 onlayn qo'llab-quvvatlash
                        </p>
                        <p className="headerText">
                        24/7 texnik yordam
                        </p>
                        </div>
                    </div>
                    <div className="header">
                        <div>
                        <img src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Wallet_745515.svg" alt="" className="headerIcon"/>

                        </div>
                        <div className="headerTex">
                        <p className="headerTitle">
                        Xavfsiz to'lov
                        </p>
                        <p className="headerText">
                        Barcha to'lov usullari qabul qilinadi
                        </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>  
    )
}
import "./style.css";

export default function banner(){
    return(

       <div className="bannerParent">
            <div className="contaiener">
                <div className="bannerMain">
                    <div className="bannerMainTitlePar">
                        <p className="bannerMainTitle">
                            100%
                        </p>
                        <p className="bannerMainTitleText">
                            material sifati
                        </p>
                    </div>
                    <div className="bannerMainTextPar">
                        <p className="bannerMainTextTitle">
                            buxoro tabiiy mahsuloti
                        </p>
                        <p className="bannerMainText"> 
                        ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan
                        </p>
                        <button className="bannerBtn">
                            toplam
                        </button>
                    </div>
                </div>
                <img src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111.png" alt="" className="bannerImg"/>
            </div>
       </div>
    )
}
import Header from "../../components/header";
import Navbar from "../../components/navbar";
import Banner from "../../components/banner";
import Footer from "../../components/footer";
import Collection from "../../components/winterColection";
import News from "../../components/news";



const HomePage = () =>{

    return(
        <>
            <Navbar/>
            <Header/>
            <Banner/>
            <Collection/>
            <News/>
            <Footer/>
        </>
    )


}

export default  HomePage
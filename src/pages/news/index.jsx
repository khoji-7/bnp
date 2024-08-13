import "./style.css";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import NewsAbout from "../../components/newsAbout";
import Comments from "../../components/commets";

export default function newsPage(){

    return(
        <>
            <Navbar/>
            <NewsAbout/>  
            <Comments/>
            <Footer/>
        </>
    )
}
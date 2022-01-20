import Footer from "../../component/Footer"
import FooterStyle from "../../component/FooterStyle"
import HomepageNavbar from "../../component/HomepageNavbar"

const PageLayout =({children})=>{
    <>
        <HomepageNavbar></HomepageNavbar>
        
            {children}
        
        <FooterStyle></FooterStyle>
        <Footer></Footer>
    </>
}
export default PageLayout;
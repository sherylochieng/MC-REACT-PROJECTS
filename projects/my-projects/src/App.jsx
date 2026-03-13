
import './App.css'
import TeamSection from './components/week8/wednesday/TeamMemberCard/TeamMemberCard'
import NavSection from './components/week8/thursday/watch-store/landingpage/Narvbar/NavCard'
// import products from './components/week8/thursday/watch-store/landingpage/WatchProductsCard/Products'
import ProductCard from './components/week8/thursday/watch-store/landingpage/WatchProductsCard/ProductCard'
import Footer from './components/week8/thursday/watch-store/landingpage/Footer/footer'
import Timer from './components/week8/Friday/timer'
import Registration from './components/week9/Monday-forms/Registration'
import ProductGrid from './components/week9/wednesday-filter/ProductLIst-search/Product'
import SignPrevious from './components/week9/Thursday -controlled inputs/Form'
function App() {
  return(
    <div>
     
{/*         
          <Timer/> */}

          <h1>REGISTRATION FORM PROJECT,MARCH 9TH 2026</h1>
          <Registration/>


          <h1>SEARCH AND FILTER PROJECT PRODUCT GRID WEDNESDAY 11TH MARCH 2026</h1> 
          <ProductGrid/>

          <h1>CONTROLED INPUTS STYLING A FORM THURSDAY 12TH MARCH 2026 ASSINGMENT PROJECT</h1>
          <SignPrevious/>



      
    </div>
  )

  }
  
export default App




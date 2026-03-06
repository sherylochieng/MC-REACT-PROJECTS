
import './App.css'
import TeamSection from './components/week8/wednesday/TeamMemberCard/TeamMemberCard'
import NavSection from './components/week8/thursday/watch-store/landingpage/Narvbar/NavCard'
import products from './components/week8/thursday/watch-store/landingpage/WatchProductsCard/Products'
import ProductCard from './components/week8/thursday/watch-store/landingpage/WatchProductsCard/ProductCard'
import Footer from './components/week8/thursday/watch-store/landingpage/Footer/footer'

function App() {
  return(
    <div>
      {/* //WEDNESDAY ASSIGNMENT TEAMMEMBERCARD */}
      {/* <TeamSection /> */}


      {/* //THURSDAY ASSIGNMENT SIMPLE WATHSTORE */}
      <NavSection/>

      
      {/* MAIN CONTENT */}
      <main className="main-content">
        <h2 className="section-title">Our Collection</h2>

        {/* MAPPING PROCTS TO FORM PRODUCTCARD */}
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              inStock={product.inStock}
              isNew={product.isNew}
            />
          ))}
        </div>
      </main>

          <Footer/>
      
    </div>
  )

  }
  
export default App




import { useState } from "react";
import Nav from "./Navigation/Nav";
import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";

//Database
import products from "./Data/Data"

function App() {

  //input filter
  const[query,setQuery] = useState("");

  const handleInputChange = (event) =>{
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => product.title.
    toLowerCase().indexOf(query.toLocaleLowerCase()) !== -1);

    function filteredData(products, query) {
      let filteredProducts = products;
  
      // Filtering Input Items
      if (query) {
        filteredProducts = filteredItems;
      }
  
      return filteredProducts.map(
        ({ img, title, star, reviews, prevPrice, newPrice }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      );
    }
  
    const result = filteredData(products, selectedCategory, query);
  
  return (
    <div className="App">
     <Nav/>
     <Products/>
     <Recommended/>
    </div>
  );
}

export default App;

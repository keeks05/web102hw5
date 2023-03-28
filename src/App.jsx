import { useState, useEffect } from 'react'
import Card from "../Components/Card"
import './App.css'

function App() {
  const [listBrew, setListBrew] = useState(null)
  const [brew, setBrew] = useState(null);

  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const searchItems = searchValue => {
     setSearchInput(searchValue);

  }

  useEffect(() => {
    const fetchBrewData = async () => {
      const response = await fetch (
        "https://api.openbrewerydb.org/v1/breweries?per_page=20"
      );
      const json = await response.json();
      setListBrew(json);
      setBrew(json[0])
    };

    fetchBrewData().catch(console.error);
  }, []);


  console.log(listBrew)
  return (
    <div className="whole-page">
      <div className="left">
         <h2> 🍻 BrewDash</h2>
         <div className="nav">
            <h3> 🤌 Dashboard</h3>
            <h3> ✔️ Search</h3>
            <h3> 🔰 About</h3>
         </div>
      </div>
      <div className="main-content">
         {brew && <Card brew={brew}/>}

         <div className="search">
            <label>State
            <input
               type="text"
               placeholder="state"
               
               />
            </label>
            <label>Type
            <input
               type="text"
               placeholder="type"
               
               />
            </label>

               <button>Search</button>
         </div>
         <div className="brew-list">
            <div className="name-list">
               <h6>Name</h6>
               {listBrew && listBrew.map((brew) => 
               <div>
                  {brew.name}
               </div>
                  )
               }
            </div>
            <div className="type-list">
               <h6>Brewery Type</h6>
               {listBrew && listBrew.map((brew) => 
               <div>
                  {brew.brewery_type}
               </div>
                  )
               }
            </div>
            <div className="postal-list">
               <h6>Postal Code</h6>
               {listBrew && listBrew.map((brew) => 
               <div>
                  {brew.postal_code}
               </div>
                  )
               }
            </div>
            <div className="type-list">
               <h6>State</h6>
               {listBrew && listBrew.map((brew) => 
               <div>
                  {brew.state}
               </div>
                  )
               }
            </div>
            <div className="city-list">
               <h6>City</h6>
               {listBrew && listBrew.map((brew) => 
               <div>
                  {brew.city}
               </div>
                  )
               }
            </div>
            <div className="country-list">
               <h6>Country</h6>
               {listBrew && listBrew.map((brew) => 
               <div>
                  {brew.country}
               </div>
                  )
               }
            </div>
         </div>
      </div>
    </div>
  )
}

export default App

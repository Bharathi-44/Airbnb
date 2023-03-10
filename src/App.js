import "./App.css";
import Nav from "./components/nav";
import Banner from "./components/banner";
//import Card from "./components/card";
import data from "./data";
import Card2 from "./components/card2";

//to remove the hard code in App function ie sending the data while calling card we are using the item dirctly to props
// both Card and Card2 gives same op
// here dataElements will have all the cards of jsx  for each data
// that dataElements jsx is printed in app
function App() {
  let dataElements=data.map(function(eachData)
  {
    return <Card2
    img={eachData.coverImg}
    rating={eachData.stats.rating}
    reviewCount={eachData.stats.reviewCount}
    country={eachData.location}
    title={eachData.title}
    price={eachData.price}
    openSpots={eachData.openSpots}
    key={eachData.id}
    item={eachData}
    
    />
    
  })
  return (
    <div>
      <Nav />
      <Banner />
      <div className="row p-3">
      {dataElements}
      </div>
    </div>
  );
}
// sending props to Card component
//wen sending non strings they must be in {}
export default App;

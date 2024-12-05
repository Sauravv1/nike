import Hero from "./sections/Hero";
import CustomerReviews from "./sections/CustomerReviews";
import Footer from "./sections/Footer";
import PopularProducts from './sections/PopularProducts';
import Services from "./sections/Services";
import SpecialOffer from "./sections/SpecialOffer";
import Subscribe from "./sections/Subscribe";
import SuperQuality from "./sections/SuperQuality";
import Nav from "./components/Nav";

const App = () => (
  <main>
<Nav />
<Hero />
<PopularProducts />
<SuperQuality />
<Services />
<SpecialOffer />
<Subscribe />
<Footer />
  </main>
);

export default App;

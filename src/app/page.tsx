import Bestselling from "./Bestselling/page"
import Bestsell from "./bestsellingproducts/page"
import Categories from "./categories/page"
import Hero from "./Hero/page"
import Micbanner from "./Micbanner/page"
import Product from "./productsec/page"
import Salesec from "./salessec/page"
import Ourproducts from "./ourproducthead/page"
import Exploreproduct from "./ProductExplore/page"
import Featuredhead from "./featuredhead/page"
import Featuredproducts from "./Featuredproducts/page"
import Iconsec from "./iconssec/page"
export default function Home(){
  return(
    <div>
<Hero/>
<Salesec/>
<Product/>
<Categories/>
<Bestselling/>
<Bestsell/>
<Micbanner/>
<Ourproducts/>
<Exploreproduct/>
<Featuredhead/>
<Featuredproducts/>
<Iconsec/>
    </div>
  )
}
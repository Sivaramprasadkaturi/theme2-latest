import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import classes from "./CategoriesListTheme1.module.css";

const HomeBanner = () => {
  return (
    <>
      <Head>
        <title>B2BN Starter Home Page</title>
        <meta
          name="description"
          content="Placeholder description for the B2B Starter Marketplace Home Page"
        />
      </Head>


      <div className={classes.grid_img}>
        <img
          src="https://ik.imagekit.io/ofb/themes/Group_177_F9b4mQ-8e.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666928930600"
          style={{ height: "540px", width: "533px" }}
        />

        <div className={classes.shadow_swhow_mini}>
          <div className={classes.deroul_titre99}>
            Must have Kitchen Gadgets
          </div>
          <div className={classes.deroul_titre030}>
            Start your day with the perfect expresso
          </div>
          <button className={classes.deroul_soustitre}><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Shop Now</a>
                  </Link></button>
        </div>

        <div className="imagesItemLists">
          <div className="img-productlens">
            <img
              src="https://ik.imagekit.io/ofb/themes/Ad_Banner_2__1__ZeweJVjBV.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667546065730"
              height="300"
              className="imgProductsl"
            />
            <div className={classes.shadow_swhow_mini}>
              <div className={classes.deroul_titre02}>
                Best Lenses in the Industry
              </div>
              <div className={classes.deroul_titre03}>
                Discover the collection
              </div>

              <button className={classes.deroul_soustitrebtn}><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Shop Now</a>
                  </Link></button>
            </div>
          </div>
          <div className="img-ch">
            <div className="img-ch-1">
            <div className="img-ch-11">
            <img
              src="https://ik.imagekit.io/ofb/themes/Group_179_JhOLJo0d3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666929113581"
              className="img-productr imgProductsls"
            />
            </div>
            <div className={classes.shadow_swhow_mini}>
              <div className={classes.deroul_titre003}>
                Music like never before
              </div>
              <button className={classes.deroul_soustitrebtn3}><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Explore</a>
                  </Link></button>
            </div>
            </div>
            <div className="img-ch-2">
            <div className="img-ch-12">
            <img
              src="https://ik.imagekit.io/ofb/themes/Group_176_5i9S60Q_H.png?ik-sdk-version=javascript-1.4.3&updatedAt=1666237235578"
              className="img-productrr imgProductsls"
            />
            </div>
            <div className={classes.shadow_swhow_mini}>
              <div className={classes.deroul_titre004}>
                Experience the age of Virtual Reality
              </div>
              <button className={classes.deroul_soustitrebtn0003}>
              <Link href={`/shop/all-products/phone-wearables`}>
                    <a>Explore</a>
                  </Link>
              </button>
            </div>
            </div>
          </div>
        </div>
      </div>


      <div className="home-shopproductz">
        <div className="homecontents1-image-wrapper">
          <h1 className="kitchenGadets">Must have Kitchen Gadgets</h1>
          <h6 className="morning-tea">Start your day with the perfect expresso</h6>
          <button className="gadgetbuy-btn"><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Shop Now</a>
                  </Link></button>
        </div>

        <div className="homecontents2-image-wrapper">
          <h1 className="lensGadets">Best Lenses in the Industry</h1>
          <h6 className="different-collection">Discover the collection</h6>
          <button className="gadgetbuyshoping-btn"><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Shop Now</a>
                  </Link></button>
        </div>
      </div>

      <div className="home-shopitem3">
        <div className="homecontents3-image-wrapper">
          <h6 className="exp-music">Music like never before</h6>
          <button className="gadgetbuy-btnExplore"><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Explore</a>
                  </Link></button>
        </div>

        <div className="homecontents4-image-wrapper">
          <h6 className="exp-reality">Experience the age of Virtual Reality</h6>
          <button className="gadgetbuy-btn-explore"><Link href={`/shop/all-products/phone-wearables`}>
                    <a>Explore</a>
                  </Link></button>
        </div>
      </div>

      {/* <div>
          <div>
          <img src="https://ik.imagekit.io/ofb/themes/Group_51_OqAgPBm2x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052316554"/>
          </div>

          <div>

          <div className="kitchenGadget0">
          <img src="https://ik.imagekit.io/ofb/themes/Group_51_OqAgPBm2x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052316554"/>
          </div>
          <div>
          <img src="https://ik.imagekit.io/ofb/themes/Group_51_OqAgPBm2x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1665052316554"/>
          </div>

          </div>

        </div>

      </div> */}
    </>
  );
};

export default HomeBanner;

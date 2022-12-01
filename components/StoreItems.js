import React, { useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import StoreCard from "./StoreCard";
import styled from "styled-components";
import { categoryUrl } from "../preScripts/links";
import InfiniteScroll from "react-infinite-scroll-component";

// import StoreCard from "./StoreCard";
// import StoreMap from "./StoreMap";

const Wrapper = styled.div`
  .catItems {
    display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 30px;
  }

  @media screen and (max-width: 1024px) {
    .catItems {
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 15px;
    }
  }

  @media screen and (max-width: 786px) {
    .catItems {
      grid-template-columns: 1fr 1fr;
      grid-gap: 12px;
    }
  }

  @media screen and (max-width: 375px) {
    .catItems {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
  }
`;

export default function StoreItems({
  storeCid,
  currentScrollPage,
  setCurrentScrollPage,
  numOfPages,
  storeItems,
  setStoreItems,
  userLocationState,
  query
}) {
  const dispatch = useDispatch();

  const [loadMoreScrollPage, setLoadMoreScrollPage] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {
    if (loadMoreScrollPage !== true) {
      setLoadMoreScrollPage(true);
    }
  }, [loadMoreScrollPage]);

  const handleLoadNextScrollPage = async () => {
    const nextScrollPage = currentScrollPage + 1;

    console.log("handleLoadNextScrollPage", nextScrollPage);

    if (currentScrollPage < numOfPages) {
      try {
        console.log("store pagination fetch", userLocationState);
        const storesData = await fetch(
          categoryUrl({
            id: storeCid,
            query:
              query.length > 0 ? query.map(q => "&" + q.value).join("") : "",
            mpvp: nextScrollPage
          })
        );
        const data = await storesData.json();
        if (data[1].items) {
          setCurrentScrollPage(nextScrollPage);
          setStoreItems([...storeItems, ...data[1].items]);
        }
      } catch (err) {
        console.error("Error fetching stores scroll pagination", err);
      }
    }
  };
  return (
    <Wrapper>
      
      <div>


      <div className="searchj wrapj">
                  <input
                    type="text"
                    className="searchTermj"
                    placeholder="Search for Brands"
                    onChange={e => {
                      setSearchTerm(e.target.value);
                    }}
                    value={searchTerm}
                  />
                  <button type="submit" className="searchButtonj">
                    <img
                      className="afterloggedinsearchicon4 afterlogged"
                      src="https://ik.imagekit.io/ofb/themes/Path_3_VlEL1XROsa.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667559337696"
                    />
                  </button>
                </div>



        <InfiniteScroll
          className="catItems"
          dataLength={storeItems.length}
          next={handleLoadNextScrollPage}
          hasMore={currentScrollPage < numOfPages && loadMoreScrollPage}
          loader={<h1>Loading...</h1>}
        >
          {storeItems &&
              storeItems
                .filter(item => {
                  if (searchTerm == "") {
                    return item;
                  } else if (item.title.toLowerCase().includes(searchTerm)) {
                    return item;
                  }
                })
                .map(item => {
                  return (
                    <StoreCard
                      renderedBy={"sellers-page"}
                      itemCard={item}
                      key={item.id}
                    />
                  );
                })}
        </InfiniteScroll>
      </div>
    </Wrapper>
  );
}

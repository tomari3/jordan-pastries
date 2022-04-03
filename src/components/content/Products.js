import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchAPI } from "../../fetchAPI";
import { apiUrl } from "../../constants";
import { Link } from "react-router-dom";

const cart = [];

const ProductsCard = ({ item }) => {
  const authorsList = item.authors.map((author, i) => {
    return <p key={i}>{author.name}</p>;
  });

  return (
    <div className="app_products_gallery_products_product">
      <div className="app_products_gallery_products_product_image">
        <img src={item.formats["image/jpeg"]} />
      </div>
      <div className="app_products_gallery_products_product_text">
        <h1>
          <Link to={`/products/${item.id}`}>{item.title}</Link>
        </h1>
        <div>{authorsList}</div>
      </div>
      {/* <div className="app_products_gallery_products_product_btns">
        <button>+</button>
        <span>0</span>
        <button>-</button>
        <button>add</button>
      </div> */}
    </div>
  );
};

ProductsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

const Input = ({ inputFunc }) => {
  return <input name="search-bar" placeholder="Search" onChange={inputFunc} />;
};

Input.propTypes = {
  inputFunc: PropTypes.func.isRequired,
};

const ProductsGallery = () => {
  const [isNext, setIsNext] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [topic, setTopic] = useState("");
  const [nextApi, setNextApi] = useState(
    `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(
      search
    )}&author_year_start=${encodeURI(start)}&author_year_end=${encodeURI(
      end
    )}&topic=${encodeURI(topic)}`
  );

  useEffect(() => {
    const timeOutId = setTimeout(
      () =>
        (async function () {
          const response = await fetchAPI(
            `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(
              search
            )}&author_year_start=${encodeURI(
              start
            )}&author_year_end=${encodeURI(end)}&topic=${encodeURI(topic)}`
          );
          setData(response.results);
          setNextApi(response.next);
          if (response.next === null) {
            setIsNext(false);
          }
        })(),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [search, start, end, topic]);

  const handleInput = (value) => {
    switch (value.target.name) {
      case "search-bar":
        setSearch(value.target.value);
        setNextApi(
          `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(
            value.target.value
          )}&author_year_start=${encodeURI(start)}&author_year_end=${encodeURI(
            end
          )}&topic=${encodeURI(topic)}`
        );
      case "from-year":
        setStart(value.target.value);
        setNextApi(
          `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(
            search
          )}&author_year_start=${encodeURI(
            value.target.value
          )}&author_year_end=${encodeURI(end)}&topic=${encodeURI(topic)}`
        );
      case "to-year":
        setEnd(value.target.value);
        setNextApi(
          `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(
            search
          )}&author_year_start=${encodeURI(start)}&author_year_end=${encodeURI(
            value.target.value
          )}&topic=${encodeURI(topic)}`
        );
      case "topic":
        setTopic(value.target.value);
        setNextApi(
          `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(
            search
          )}&author_year_start=${encodeURI(start)}&author_year_end=${encodeURI(
            end
          )}&topic=${encodeURI(value.target.value)}`
        );
    }
  };

  const fetchMore = async () => {
    if (isNext) {
      const response = await fetchAPI(nextApi);
      const newData = [...data, ...response.results];
      if (response.next === null) {
        setIsNext(false);
      }
      setData(newData);
      setNextApi(response.next);
    }
  };

  return (
    <div className="app_products_gallery">
      <div className="flex-column">
        <div className="app_products_gallery_search-bar">
          <Input placeholder="Books" inputFunc={handleInput} />
        </div>
        <div className="app_products_gallery_filter-sort">
          <div className="app_products_gallery_filter-sort_filter">
            <input
              name="from-year"
              placeholder="from year"
              onChange={handleInput}
            />
            <input
              name="to-year"
              placeholder="to year"
              onChange={handleInput}
            />
            <input name="topic" placeholder="topic" onChange={handleInput} />
          </div>
          <div className="app_products_gallery_filter-sort_sort"></div>
        </div>
      </div>

      <div className="app_products_gallery_products">
        {data.map((e) => {
          return <ProductsCard key={e.id} item={e} />;
        })}
      </div>
      <div>
        {data.length !== 0 ? (
          isNext ? (
            <div className="app_products_gallery_products_load-more">
              <button onClick={fetchMore}>Load More</button>
            </div>
          ) : (
            <div className="app_products_gallery_products_load-more">
              That&apos;s all
            </div>
          )
        ) : (
          <div className="app_products_gallery_products_load-more">loading</div>
        )}
      </div>
    </div>
  );
};

const ProductsPrompt = ({ headline, subHeadline }) => {
  return (
    <div className="app_products_prompt-wrapper">
      <h1>{headline}</h1>
      <p>{subHeadline}</p>
    </div>
  );
};

ProductsPrompt.propTypes = {
  headline: PropTypes.string.isRequired,
  subHeadline: PropTypes.string.isRequired,
};

const Products = () => {
  return (
    <main data-testid="products" className="app_products">
      <div className="app_products_prompt">
        <ProductsPrompt
          headline={"Books"}
          subHeadline={"Search by title, author, year or even prizes"}
        />
      </div>
      <div className="app_products_gallery_wrapper">
        <ProductsGallery />
      </div>
    </main>
  );
};

export default Products;

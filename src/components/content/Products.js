import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { fetchAPI } from "../../fetchAPI";
import { apiUrl } from "../../constants";

const ProductsCard = ({ title, image, authors }) => {
  const authorsList = authors.map((author, i) => {
    return <p key={i}>{author.name}</p>;
  });

  return (
    <div>
      <h1>{title}</h1>
      <div>{authorsList}</div>
      <img src={image} height={100} width={100} />
    </div>
  );
};

ProductsCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  authors: PropTypes.array,
};

const Input = ({ inputFunc }) => {
  return <input placeholder="Books" onChange={inputFunc} />;
};

Input.propTypes = {
  inputFunc: PropTypes.func.isRequired,
};

const ProductsGallery = () => {
  const [isNext, setIsNext] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [nextApi, setNextApi] = useState(
    `${apiUrl}?mime_type=image&page=${1}
    )}&search=${encodeURI(search)}`
  );

  useEffect(() => {
    const timeOutId = setTimeout(
      () =>
        (async function () {
          const response = await fetchAPI(
            `${apiUrl}?mime_type=image&page=${1}&search=${encodeURI(search)}`
          );
          console.log(response);
          setData(response.results);
          setNextApi(response.next);
          if (response.next === null) {
            setIsNext(false);
          }
        })(),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [search]);

  const fetchMore = async () => {
    if (isNext) {
      const response = await fetchBooks(nextApi);
      const newData = [...data, ...response.results];
      if (response.next === null) {
        setIsNext(false);
      }
      setData(newData);
      setNextApi(response.next);
    }
  };

  return (
    <div>
      <div>
        <Input
          placeholder="Books"
          inputFunc={(value) => {
            setSearch(value.target.value);
            setNextApi(
              `${apiUrl}?page=${1}&search=${encodeURI(value.target.value)}`
            );
          }}
        />
      </div>

      <div>
        {data.map((e) => {
          return (
            <ProductsCard
              key={e.id}
              title={e.title}
              authors={e.authors}
              image={e.formats["image/jpeg"]}
            />
          );
        })}
      </div>
    </div>
  );
};

const ProductsFilterSort = () => {
  return (
    <div>
      <div>
        <ul>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
          <li>filter</li>
        </ul>
      </div>
      <div>
        <span>sort</span>
      </div>
    </div>
  );
};

const ProductsPrompt = ({ headline, subHeadline }) => {
  return (
    <div>
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
    <main data-testid="products">
      <div>
        <ProductsPrompt
          headline={"Books"}
          subHeadline={"Search by title, author, year or even prizes"}
        />
      </div>
      <div>
        {/* <ProductsFilterSort /> */}
        <ProductsGallery />
      </div>
    </main>
  );
};

export default Products;

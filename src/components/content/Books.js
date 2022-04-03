import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchAPI } from "../../fetchAPI";
import { apiUrl } from "../../constants";

function Books() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      const response = await fetchAPI(`${apiUrl}?ids=${encodeURI(id)}`);
      setData(response.results);
    })();
    console.log(data[0]);
  }, []);

  return data[0] ? (
    <div className="app_book">
      <div className="app_book_titles">
        <div className="app_book_titles_text">
          <h1>{data[0].title}</h1>
          {data[0].authors.map((author, i) => {
            return <p key={i}>{author.name}</p>;
          })}
        </div>
      </div>
      <div className="app_book_details">
        <div className="app_book_titles_image">
          <img src={data[0].formats["image/jpeg"]} />
        </div>
        <div className="app_book_details_shelves">
          {data[0].bookshelves.map((shelve, i) => {
            return <p key={i}>{shelve}</p>;
          })}
        </div>
        <div className="app_book_details_subjects">
          {data[0].bookshelves.map((subject, i) => {
            return <p key={i}>{subject}</p>;
          })}
        </div>
        <p>{data[0].download_count}</p>
      </div>
      <div className="app_book_downloads">
        <h1>downloads</h1>
        <div>
          <a href={data[0].formats["application/epub+zip"]}>epub</a>
          <a href={data[0].formats["application/rdf+xml"]}>rdf/xml</a>
          <a href={data[0].formats["application/x-mobipocket-ebook"]}>ebook</a>
          <a href={data[0].formats["application/zip"]}>zip</a>
          <a href={data[0].formats["image/jpeg"]}>image</a>
          <a href={data[0].formats["text/html"]}>html</a>
          <a href={data[0].formats["text/html; charset=utf-8"]}>html/utf-8</a>
          <a href={data[0].formats["text/plain; charset=utf-8"]}>text</a>
        </div>
      </div>
    </div>
  ) : (
    <h1>wait</h1>
  );
}

export { Books };

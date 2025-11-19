import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleFilmPage() {
  const [item, setItem] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://ghibliapi.herokuapp.com/films/${id}`)
      .then((res) => res.json())
      .then((data) => setItem(data))
      .catch((error) => console.error("Error fetching film data:", error));
  }, [id]);

  if (!item) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <img src={item.image} alt={`${item.title} Poster`} />
      </div>

      <div>
        <h1>{item.title}</h1>
        <p>
          Directed by {item.director}. Produced by {item.producer}.
        </p>
        <p>
          The film was released in <strong>{item.release_date}</strong> and
          earned a <strong>{item.rt_score}</strong> score on{" "}
          <a
            href="https://www.rottentomatoes.com/"
            target="_blank"
            rel="noreferrer"
          >
            Rotten Tomatoes
          </a>
          .
        </p>

        <h2>Description</h2>
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default SingleFilmPage;

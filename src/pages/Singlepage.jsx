import { useEffect, useContext } from "react";
import showsContext from "../context/shows/showsContext";
import Loader from "../components/Loader";



const Singlepage = ({match}) => {
  const { getSingleShow, singleShow, loading } = useContext(showsContext)

  useEffect(()  => {
    getSingleShow(match.params.id)

    //eslint-disable-net-line
  }, [])

  const removeTags = (text) => {
    if (text === null || text === "") {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, "");
  };

  return (
    <>
    {loading ? (<Loader />) :
    <div className="singleshow">
      <img src={singleShow.image ? singleShow.image.medium : "https://bitsofco.de/content/images/2018/12/broken-1.png"} alt={singleShow.name} />
      <div className="singleshow__info">
        <h1>{singleShow.name}</h1>
        {singleShow.genres && singleShow.genres.map(genre => (
          <span key={genre} className="singleshow__genre">{genre}</span>
        ))}
        <p>
          <strong>Status:</strong> {singleShow.status && singleShow.status}
        </p>
        <p>
          <strong>Rating:</strong> {singleShow.rating ? singleShow.rating.average : "Not rated yet"}
        </p>
        <p>
          <strong>Official Site:</strong> {singleShow.officialSite ? (<a href={singleShow.officialSite} target="_blank" rel="noreferrer">{singleShow.officialSite}</a>) : "No official site"}
        </p>
        <p>
          {singleShow.summary && removeTags(singleShow.summary)}
        </p>
      </div>
    </div>
    }
    </>


  )

}

export default Singlepage;
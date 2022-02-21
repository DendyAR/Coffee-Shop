import { useState, useEffect } from "react";

export default function FavoriteProducts() {
    const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      const data = await fetch(
        `http://api.tvmaze.com/search/shows?q=${search}`
      ).then((res) => res.json());
    console.log(data);
      setItem(data);
    }
    setTimeout(() => {
      setLoading(true);
      fetchData();
    }, 1500);
  }, [search]);

  return (
    <>{item.map((value)=> {
        return(
    <div className="card-item">
          <img src={value?.show?.image?.medium} alt="" />
          <h2>Beef Spaghetti</h2>
          <h3>IDR: 40000</h3>
        </div>
        )
    })
    }
    </>
  )
}

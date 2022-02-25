import { useState, useEffect } from "react";

export default function FavoriteProducts() {
    const [item, setItem] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await fetch(
        `http://api.tvmaze.com/search/shows?q=`
      ).then((res) => res.json());
    console.log(data);
      setItem(data);
    }
    fetchData()
  }, []);

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

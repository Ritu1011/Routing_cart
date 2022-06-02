// import axios  from "axios"
// import { useEffect, useState } from "react"
// import { Link } from "react-router-dom"


// function Product(){
// const [loading, setLoading]=useState(true)
// const [data, setData] = useState(null);

// useEffect(()=>{
//     setLoading(true);
//     axios({
//         // url:"http://localhost:3000/Product",
//         method:"GET"
//     }).then((res)=>{
//         setLoading(false)
//         setData(res.data)
// })
// .catch((err) => {
//     setLoading(false);
//   },[data]);
// })
// console.log(data)

// //////////////////
//  return (
//     <>
// {loading && <div>...Loading</div>}

// {
//     data?.data?.map((item)=>(
//        <div style={{ marginBottom: "1rem" }} key={item.id}>
//            <div>Name: {item.name}</div>
//           <Link to={`/product/${item.id}`}>See More</Link>
//        </div>
//     ))
// }
//     </>
// )
// }

// export default Product


import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Style.css"
import Button from "./Button";

function Product() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page,setPage] =useState(1)
  useEffect(() => {
    setLoading(true);
    axios({
      url: "http://localhost:8080/AllCategory",
      method: "GET",
      params:{
        _page:page,
        _limit:8,
        
      }
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page]);
  console.log(data);
  return (
    <>
    <div className="container">
      {loading && <div>...Loading</div>}
      {data.map((item) => (

        <div  key={item.id}>
         
          <div><Link to={`/product/${item.id}`}><img src={item.image} alt="" /></Link>  </div>
          <h4> {item.name}</h4>
      </div>
      ))}
    </div>
    <Button title="PREV" id="PREV" disabled={page===1}   onClick={()=>setPage(page-1)}/>
    <Button id="NEXT" disabled={page===2} title="NEXT" onClick={()=>setPage(page+1)}/>
    </>
  );
}

export default Product;
import axios from "axios";
import { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";

function  MenDetails(){
   const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const params = useParams();
    useEffect(() => {
      setLoading(true);
      const { id } = params;
      axios({
        url: `http://localhost:8080/Mens/${id}`,
        method: "GET"
      })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
        });
    }, [params.id]);


    return (
        <div>
          {loading && <div>...Loading</div>}
       
             <div className="container_D">
            <div  className="table" key={data?.id}>
              <img src={data?.image} alt="" />
              <button className="Add">ADD TO CART</button>
              </div>

              {/* ???????/ */}
              <div className=" details_D">
              <h3  className="name_h3"> {data?.name}</h3>
              <h4> {data.size}</h4>
              <h3  className="name_D"> {data?.price}</h3>
              <div className="lorem"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque praesentium molestias ducimus, culpa eum est, in sunt neque accusamus, soluta sapiente? Nisi iure ut veritatis, dolorem a atque veniam autem?</div>
              </div>

              {/*  */}
              </div>
        
        </div>
      );
    }
    
    export default  MenDetails
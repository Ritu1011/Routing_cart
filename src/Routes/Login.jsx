// // import "./Style.css"
// function Login(){

//     return(
//         <>
//       <h2>LOGIN</h2>
//       <div className="login">
//           <div>
//           <input type="email" placeholder="Email"/>
//           <br />
//           <br />
//           <input type="text" placeholder="Password"/>
//           </div>
//           <p>Terms & Conditions</p>
//           <button>LOGIN</button>
//       </div>
//         </>
//     )
// }
// export default Login

import axios from "axios";
import { useContext } from "react";
import { Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

function Login() {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();

  const loginUser = async () => {
    axios({
      url: "https://reqres.in/api/login",
      method: "POST",
      data: {
        email: "eve.holt@reqres.in",
        password: "cityslicka"
      }
    })
      .then((res) => {
        alert("success");
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: res.data.token
        });
        // on success move to users
        const redirect = searchParams.get("redirectTo");
        if (redirect) {
          navigate(redirect);
        } else {
          navigate("/users");
        }
      })
      .catch((err) => {
        alert("failure");
      });
  };

  if (state.isAuth) {
    // redirect user to dashboard
    return <Navigate to="/" />;
  }

  return (
    <>
      <h2> Login</h2>
      <button onClick={loginUser}>Login</button>
    </>
  );
}
export default Login;

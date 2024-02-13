import React, { useEffect } from "react";
import "./home.css";
// import data from "../data.json"
import axios from "axios";
import { Link} from "react-router-dom";

const Home = () => {
  const [data, setData] = React.useState([]);
  const [userData, setUserData] = React.useState({});
//   const navigate = useNavigate();

useEffect(() => {
  const getCookie = (name) => {
    const cookieArray = document.cookie.split("; ");
    const cookie = cookieArray.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  };
  const name = getCookie("name");
  const email = getCookie("email");
  const username = getCookie("username");

  console.log("User Data:", { name, email, username });

  setUserData({ name, email, username });
}, []);


  useEffect(() => {
    async function getApi() {
      try {
        const res = await axios.get("http://localhost:3000/");
        console.log(res.data);
        setData(res.data);
      } catch (err) {
        console.log(err);
      }
    }
    getApi();
  }, []);

  const clearCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleLogout = (e) => {
    clearCookie("name");
    clearCookie("email");
    clearCookie("username");
    console.log("Updated Cookies:", document.cookie);
  };
  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3000/deleteUser/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav>
  <h2>Welcome</h2>
  {userData.name && <p>Name: {userData.name}</p>}
  {userData.email && <p>Email: {userData.email}</p>}
  {userData.username && <p>Username: {userData.username}</p>}
  <Link to="/login">
    <button onClick={handleLogout}>Logout</button>
  </Link>
</nav>

      <div className="flex navbar">
        <h1>Incredible Breakfast Fusion</h1>
        <div className="flex navbar_side">
          <Link to="/weird">
            <button className="active">Add +</button>
          </Link>
          <button className="active">Home</button>
          <button className="active">About</button>
        </div>
      </div>
      <div className="grid-cont">
        {data.map((data) => {
          return (
            <>
              <div className="box box1">
                <div>
                  <p>{data["WeirdCombos"]}</p>
                  <div className="flex">
                    <p>{data["FoodItem1"]}</p>
                    <p>+</p>
                    <p>{data["FoodItem2"]}</p>
                  </div>
                  <p>{data.Description}</p>
                  <br />
                  <button
                    onClick={() =>
                      navigate(`/update/${data._id}`, { state: { data } })
                    }
                  >
                    Edit
                  </button>
                  <button onClick={(e) => handleDelete(data._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Assets/Styles/Accueil.css"

type Infotype = {
  id: string;
  name: string;
  email: string;
};
export default function Accueil() {
  const navigate = useNavigate();
  const [info, setInfo] = useState<Infotype | null>(null);

      const userId = localStorage.getItem("userId");

const URL = process.env.REACT_APP_API_URL;

  useEffect(() => {

    if (!userId) {
      navigate("/");
      return;
    }

 fetch(`${URL}/users?id=${userId}`)
      .then((response) => response.json())
      .then((data: Infotype) => {
        setInfo(data);
      });
  }, [userId, navigate, URL]);

  if (!info) return <div>Chargement...</div>;
  return (
    <>
      <button type="button" onClick={() =>{localStorage.removeItem("userId"); navigate("/")}}>
        Log Out
      </button>
        <div className="description_container" key={info.id}>
          <h1>Bienvenue, {info.name}</h1>
          <p>Ton adresse mail est : {info.email}</p>
          <p>Ton identifiant est : {info.id}</p>
        </div>
    </>
  );
}

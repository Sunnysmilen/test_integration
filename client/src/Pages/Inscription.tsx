import { useNavigate } from "react-router-dom";
import "../Assets/Styles/Connexion.css";
import { Bounce, toast, ToastContainer } from "react-toastify";
import { useRef } from "react";


export default function Connexion() {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

const URL = process.env.REACT_APP_API_URL;

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    try {
      const response = await fetch(`${URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (nameRef.current as HTMLInputElement).value,
          email: (emailRef.current as HTMLInputElement).value,
        }),
      });      
      const data= await response.json();

      if (response.status === 200) {
          localStorage.setItem("userId", data.user.id); 

        toast.success("Vous êtes inscrit, vous allez être redirigé");
        setTimeout(() => {
          navigate("/user");
        }, 2000);
      } else {
        toast.error("Erreur : vérifiez vos coordonnées !");
      }
    } catch (err) {
      toast.error("Erreur: ne vous inquiétez la page va se rafraichir");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <div className="formulaire_container">
        <form onSubmit={handleSubmit} className="formulaire">
          <h1 className="title_connexion">S'inscrire</h1>
          <input
            type="text"
            id="nom"
            placeholder="Entrez votre nom"
            ref={nameRef}
          />
          <input
            type="email"
            id="email"
            placeholder="Entrez votre email"
            ref={emailRef}
            required
            title="Votre email doit suivre ce format"
            pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
          />
          <input
            type="submit"
            value="Valider inscription"
            className="button_validation"
          />
          <section>
            <button type="button" onClick={() => navigate("/login")} disabled>
              Se connecter
            </button>
          </section>
        </form>
      </div>
    </>
  );
}


import "./Register.css";
import { useState } from "react";

function Register() {
    const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
function handleSubmit(e) {
  e.preventDefault();

  console.log("Prénom :", firstName);
  console.log("Nom :", lastName);
  console.log("Email :", email);
  console.log("Mot de passe :", password);
  console.log("Confirmation :", confirmPassword);
}

  return (
    <div className="register-page">
      <h1>Créer un compte</h1>
      <p>Rejoins CodeLearnWay pour apprendre à coder !</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">Prénom</label>
        <input
  id="firstName"
  type="text"
  placeholder="Ton prénom"
  value={firstName}
  onChange={(e) => setFirstName(e.target.value)}
/>

        <label htmlFor="LastName">Nom</label>
        <input
  id="LastName"
  type="text"
  placeholder="Ton Nom"
  value={lastName}
  onChange={(e) => setLastName(e.target.value)}
/> 
        <label htmlFor="email">Email</label>
     <input
  id="email"
  type="email"
  placeholder="Ton Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

        <label htmlFor="password">Mot de passe</label>
           <input
  id="password"
  type="password"
  placeholder="Ton mot de passe"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

        <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
        <input
          id="confirmPassword"
          type="password"
          placeholder="Confirme ton mot de passe"
           value={confirmPassword}
  onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
}

export default Register;

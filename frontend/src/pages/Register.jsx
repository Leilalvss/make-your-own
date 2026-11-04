
import "./Register.css";
import { useState } from "react";
import { UserRound, Mail, LockKeyhole, Eye, EyeOff } from "lucide-react";

function Register() {
    const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
 
function handleSubmit(e) {
  e.preventDefault();
  setError("");

  // Vérifier les champs vides
  if (
    firstName.trim() === "" ||
    lastName.trim() === "" ||
    email.trim() === "" ||
    password === "" ||
    confirmPassword === ""
  ) {
    setError("Tous les champs sont obligatoires !");
    return;
  }

  // Vérifier la longueur du mot de passe
  if (password.length < 8) {
    setError("Le mot de passe doit contenir au moins 8 caractères !");
    return;
  }

  // Vérifier si les mots de passe correspondent
  if (password !== confirmPassword) {
    setError("Les mots de passe ne correspondent pas !");
    return;
  }

  alert("Formulaire valide ! L'inscription sera bientôt disponible.");
}

return (
  <div className="register-page">
    <div className="register-content">

      <div className="register-logo">
        <span className="logo-icon">&lt;/&gt;</span>
        <span className="logo-text">
          Code<span className="logo-learn">Learn</span><span className="logo-way">Way</span>
        </span>
      </div>

      <h1>Créer un compte !</h1>
      <p className="register-subtitle">
        Rejoins la communauté et commence ton apprentissage.
      </p>

  
<form onSubmit={handleSubmit}>
  <label htmlFor="firstName">Prénom</label>
  <div className="input-group">
    <UserRound className="field-icon" size={21} />
    <input
      id="firstName"
      type="text"
      placeholder="Ton prénom"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      required
    />
  </div>

  <label htmlFor="lastName">Nom</label>
  <div className="input-group">
    <UserRound className="field-icon" size={21} />
    <input
      id="lastName"
      type="text"
      placeholder="Ton nom"
      value={lastName}
      onChange={(e) => setLastName(e.target.value)}
      required
    />
  </div>

  <label htmlFor="email">Adresse e-mail</label>
  <div className="input-group">
    <Mail className="field-icon" size={21} />
    <input
      id="email"
      type="email"
      placeholder="ex : example@gmail.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  <label htmlFor="password">Mot de passe</label>
  <div className="input-group">
    <LockKeyhole className="field-icon" size={21} />
    <input
      id="password"
      type={showPassword ? "text" : "password"}
      placeholder="Ton mot de passe"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      minLength={8}
      required
    />
    <button
      type="button"
      className="eye-button"
      onClick={() => setShowPassword(!showPassword)}
      aria-label={showPassword ? "Masquer le mot de passe" : "Afficher le mot de passe"}
    >
      {showPassword ? <EyeOff size={21} /> : <Eye size={21} />}
    </button>
  </div>

  <label htmlFor="confirmPassword">Confirmer le mot de passe</label>
  <div className="input-group">
    <LockKeyhole className="field-icon" size={21} />
    <input
      id="confirmPassword"
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Confirme ton mot de passe"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
      required
    />
    <button
      type="button"
      className="eye-button"
      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      aria-label={showConfirmPassword ? "Masquer la confirmation" : "Afficher la confirmation"}
    >
      {showConfirmPassword ? <EyeOff size={21} /> : <Eye size={21} />}
    </button>
  </div>

  {error && <p className="error-message" role="alert">{error}</p>}

  <button type="submit" className="register-submit">
    S'inscrire
  </button>
</form>
    </div> 
  </div>   
);
}

export default Register;

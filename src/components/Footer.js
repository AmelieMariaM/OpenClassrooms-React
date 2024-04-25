import { useState } from "react";
import "../styles/Footer.css";

const missingElement = "@";

function Footer(handleBlur) {
  const [inputValue, setInputValue] = useState("email");

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  function handleBlur() {
    if (!inputValue.includes(missingElement))
      alert("Attention, il n'y pas d'@, ceci n'est pas une adresse valide");
  }

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">
        Pour les passionné·e·s de plantes 🌿🌱🌵
      </div>
      <div className="lmj-footer-elem">
        Laissez-nous votre mail :
        <input
          placeholder="Entrez votre mail"
          value={inputValue}
          onChange={handleInput}
          onBlur={handleBlur}
        />
      </div>
    </footer>
  );
}

export default Footer;

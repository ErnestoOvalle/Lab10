import { useState } from 'react';
import CryptoJS from 'crypto-js';

const llave = '12345678';

const cifrar = (texto) => {
  var textoCifrado = CryptoJS.AES.encrypt(texto, llave).toString();
  return textoCifrado;
};

const descifrar = (texto) => {
  var bytes = CryptoJS.AES.decrypt(texto, llave);
  var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
  return textoDescifrado;
};

function App() {
  const [textoPlano, setTextoPlano] = useState('');
  const [textoCifrado, setTextoCifrado] = useState('');
  const [textoOriginal, setTextoOriginal] = useState('');

  return (
    <div className="App">
      <h1>Lab 10 - Cipher and Decipher</h1>

      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="texto">Texto plano:</label>
        <br />
        <input
          id="texto"
          type="text"
          value={textoPlano}
          onChange={(e) => setTextoPlano(e.target.value)}
        />
        <br />
        <br />

        <button type="button" onClick={() => setTextoCifrado(cifrar(textoPlano))}>
          Cifrar
        </button>
        <p>Texto Cifrado: {textoCifrado}</p>

        <button type="button" onClick={() => setTextoOriginal(descifrar(textoCifrado))}>
          Descifrar
        </button>
        <p>Texto Descifrado: {textoOriginal}</p>
      </form>
    </div>
  );
}

export default App;

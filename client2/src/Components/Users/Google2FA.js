import { useState } from 'react';
import axios from 'axios';

function Google2FA() {
  const [secret, setSecret] = useState('');
  const [qrCode, setQRCode] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('/2fa/verify', { code })
      .then((response) => {
        alert('Verification successful!');
      })
      .catch((error) => {
        alert('Verification failed!');
      });
  };


  
  const handleSetup = (event) => {
    event.preventDefault();

    axios.post('/2fa/setup')
      .then((response) => {
        setSecret(response.data.secret);
        setQRCode(response.data.qr_code);
      })
      .catch((error) => {
        alert('Could not set up two-factor authentication!');
      });
  };

  return (
    <div>
      <h1>Two-Factor Authentication</h1>
      {qrCode ? (
        <img src={qrCode} alt="QR code" />
      ) : (
        <button onClick={handleSetup}>Set up two-factor authentication</button>
      )}
      {secret ? (
        <form onSubmit={handleSubmit}>
          <label>
            Verification code:
            <input type="text" value={code} onChange={(event) => setCode(event.target.value)} />
          </label>
          <button type="submit">Verify</button>
        </form>
      ) : null}
    </div>
  );
}

export default Google2FA;
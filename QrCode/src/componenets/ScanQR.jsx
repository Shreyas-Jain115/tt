import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRCodeScanner() {
  const [scannedData, setScannedData] = useState(null);
  const [error, setError] = useState(null);

  const handleScan = (data) => {
    if (data) {
      setScannedData(data);
    }
  };

  const handleError = (err) => {
    console.error("QR scan error:", err);
    setError('Error scanning QR code. Please try again.');
  };

  return (
    <div>
      <h1>QR Code Scanner</h1>

      {/* QR Code Scanner */}
      <div>
        <h3>Scan the QR Code:</h3>
        <QrReader
          onResult={(result, error) => {
            if (result) handleScan(result?.text);
            if (error) handleError(error);
          }}
          style={{ width: '100%' }}
        />
      </div>

      {/* Display scanned data */}
      {scannedData && (
        <div>
          <h3>Scanned QR Code Data:</h3>
          <p>{scannedData}</p>
        </div>
      )}

      {/* Error message */}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default QRCodeScanner;


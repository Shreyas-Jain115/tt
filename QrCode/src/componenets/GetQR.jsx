// GetQR.js
const GetQR = ({ qr_var, GenQR }) => {
    return (
        <>
            {qr_var && <img src={qr_var} alt="Generated QR Code" />}
        </>
    );
};

export default GetQR;

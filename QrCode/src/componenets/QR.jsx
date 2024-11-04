// QR.js
import { useState,useEffect } from "react";
import QRCode from "qrcode";
import GetQR from "./GetQR";
const getDate=() => {
    const t=new Date();

    return t.getMinutes()+":" + t.getSeconds();
}
const QR = () => {
    const [qr_var, set_qrvar] = useState("");
    const GenQR = () => {
        let data = {
            "class_name": "CSE",
            "sem": "3",
            "date":getDate(),
        };
        let jsondata = JSON.stringify(data);

        QRCode.toDataURL(jsondata, (err, url) => {
            if (err) return console.log("error");
            set_qrvar(url);  
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            GenQR();
        }, 5000); // 5000ms = 5 seconds

        // Cleanup the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <GetQR qr_var={qr_var} GenQR={GenQR} />
        </>
    );
};

export default QR;

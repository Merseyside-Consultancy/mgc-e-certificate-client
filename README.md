# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


<!-- import { useState, useRef } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import "./style.css";
import Swal from "sweetalert2";
import QRCode from "qrcode.react";

const imageHostingToken = import.meta.env.VITE_Image_Upload_Token;

const Admin = () => {
  const [nameValue, setNameValue] = useState('');
  const [courseValue, setCourseValue] = useState('');
  const [dateValue, setDateValue] = useState('');
  const [detailValue, setDetailValue] = useState('');
  const [excelRows, setExcelRows] = useState([]);
  const [qrCodeValue, setQrCodeValue] = useState('');

  const canvasRef = useRef(null);

  const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingToken}`;

  const handleExcelChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(sheet);

        setExcelRows(rows);

        // Use the first row data to set values
        if (rows.length > 0) {
          const row = rows[0];
          setNameValue(row.name || '');
          setCourseValue(row.course || '');
          setDateValue(row.date || '');
          setDetailValue(row.detail || '');
        }
      };

      reader.readAsArrayBuffer(file);
    }
  };

  const generateCertificate = async (rowData) => {
    return new Promise(async (resolve, reject) => {
      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const img = new Image();
  
      img.crossOrigin = "Anonymous";
  
      const processImage = async () => {
        try {
          const aspectRatio = img.width / img.height;
          const canvasWidth = 800;
          const canvasHeight = canvasWidth / aspectRatio;
  
          canvas.width = canvasWidth;
          canvas.height = canvasHeight;
  
          context.drawImage(img, 0, 0, canvas.width, canvas.height);
  
          // Set the new data
          setNameValue(rowData.name || '');
          setCourseValue(rowData.course || '');
          setDateValue(rowData.date || '');
          setDetailValue(rowData.detail || '');
  
          // Wait for text values to be set
          await new Promise((resolve) => setTimeout(resolve, 100));

        context.font = '28pt Barlow, sans-serif';
        context.fillStyle = 'black';
        const nameText = rowData.name ? String(rowData.name).toUpperCase() : '';
        context.fillText(nameText, 115, 600);
  
      const maxWidthCourse = 400;
      const lineHeightCourse = 30;
  
      context.font = 'bold 20pt Barlow, sans-serif';
      context.fillStyle = 'black';
  
      const wordsCourse = rowData.course ? String(rowData.course).toUpperCase().split(' ') : [];
      let currentLineCourse = '';
  
      wordsCourse.forEach((word) => {
        const testLineCourse = currentLineCourse + (currentLineCourse ? ' ' : '') + word;
        const testWidthCourse = context.measureText(testLineCourse).width;
  
        if (testWidthCourse > maxWidthCourse && currentLineCourse !== '') {
          context.fillText(currentLineCourse, 115, 460, 700);
          currentLineCourse = word;
        } else {
          currentLineCourse = testLineCourse;
        }
      });
  
      // Draw the remaining part of the line
      context.fillText(currentLineCourse, 115, 460 + lineHeightCourse, 700);
  
      context.font = '11pt Barlow, sans-serif';
      context.fillStyle = 'black';
      const dateText = rowData.date ? String(rowData.date) : '';
      context.fillText(dateText, 208, 755);
  
      const maxWidthDetail = 400;
      const lineHeightDetail = 30;
  
      context.font = '11pt Barlow, sans-serif';
  
      const detailLines = rowData.detail ? String(rowData.detail).split('\n') : [];
      detailLines.forEach((line, index) => {
        const words = line.split(' ');
        let currentLine = '';
  
        words.forEach((word) => {
          const testLine = currentLine + (currentLine ? ' ' : '') + word;
          const testWidth = context.measureText(testLine).width;
  
          if (testWidth > maxWidthDetail && currentLine !== '') {
            context.fillText(currentLine, 292, 640 + index * lineHeightDetail, 800);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        });
  
        // Draw the remaining part of the line
        context.fillText(currentLine, 292, 640 + index * lineHeightDetail, 800);
      });
  
      // Draw additional lines
      context.font = '11pt Barlow, sans-serif';
      context.fillStyle = 'black';
      context.fillText('has successfully completed', 115, 600 + detailLines.length * 30 + 10, 800);
  
      context.font = 'bold 11pt Barlow, sans-serif';
      context.fillStyle = 'black';
      context.fillText('at Merseyside Consultancy', 115, 620 + detailLines.length * 30 + 30, 800);

      const qrCodeCanvas = document.createElement("canvas");
        qrCodeCanvas.width = 60;
        qrCodeCanvas.height = 60;
        const qrCodeContext = qrCodeCanvas.getContext("2d");
        qrCodeContext.fillRect(0, 0, 60, 60);
        qrCodeContext.drawImage(canvasRef.current, 0, 0, 60, 60);

        // Draw QR code image on the main canvas
        context.drawImage(qrCodeCanvas, 120, 800, 100, 100);
  
      // Convert the canvas content to a Blob
      canvas.toBlob(async (blob) => {
        const formData = new FormData();
        formData.append('image', blob, 'e_certificate_image.png');

        try {
          const response = await axios.post(imageHostingUrl, formData);
          const certificateImage = response.data.data.display_url;

          // Include nameText and certificateImage in the resolved data
          const resultData = { nameText, certificateImage };

          setQrCodeValue(`http://localhost:5173/singleCertificate/${encodeURIComponent(nameText)}`);

          resolve(resultData);
        } catch (error) {
          reject(error);
        }
      });
    } catch (error) {
      reject(error);
    }
  };

  img.onload = processImage;
  img.src = "https://i.ibb.co/N9RDyJy/e-Certificate-2.jpg";
});
};

  

const handleUpload = async () => {
  const certificatesData = [];

  for (let i = 0; i < excelRows.length; i++) {
    const row = excelRows[i];
    try {
      const modifiedRowData = await generateCertificate(row);
      certificatesData.push(modifiedRowData);
    } catch (error) {
      console.error('Error generating certificate:', error);
      // Handle the error if needed
    }
  }

  fetch('http://localhost:5000/certificates', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(certificatesData),
})
  .then(async (res) => {
    const data = await res.json();

    if (res.status === 200) {
      if (data.insertedCount > 0) {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Certificates Uploaded',
          showConfirmButton: false,
          timer: 1000,
        });
      }

      if (data.existingCount > 0) {
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Some certificates already exist',
          text: `${data.existingCount} certificates were not added as they already exist: ${data.existingCertificates.join(', ')}`,
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Some certificates already exist',
        showConfirmButton: false,
        timer: 1000,
      });
    }
  })
  .catch((error) => {
    console.log(error);
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'An error occurred',
      text: 'Failed to Upload',
      showConfirmButton: false,
      timer: 2000,
    });
  });
};



  return (
    <div className="Admin">
      <div className="Meta">
        <h1 className="text-3xl font-bold text-center">Merseyside Global College</h1>
        <p className="text-xl font-bold mt-10 ms-96">Drag your file or choose your file</p>
        <input type="file" accept=".xlsx, .xls" onChange={handleExcelChange} />
      <button className="btn btn-info " onClick={handleUpload}>
        Upload
      </button>
      </div>

      <div id="downloadWrapper">
        <div id="certificateWrapper">
          <p className="name uppercase ">{nameValue}</p>
          <p className="course uppercase w-80">{courseValue}</p>
          <p className="date">{dateValue}</p>
          <QRCode className="qr" value={qrCodeValue} size={60} />
          <p className="detail w-96">has successfully completed {detailValue} <span className="font-bold">at Merseyside Consultancy</span></p>
          <canvas ref={canvasRef} style={{ display: 'none' }} />
          <img id="c-img" src="https://i.ibb.co/N9RDyJy/e-Certificate-2.jpg" alt="Certificate" />
        </div>
      </div>
    </div>
  );
};

export default Admin; -->
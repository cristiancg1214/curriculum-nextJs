"use client";

import { InitComponent } from "@/components/InitComponent";
import LoadingModal from "@/components/LoadingModal/LoadingModal";
import "bootstrap/dist/css/bootstrap.min.css";
// import html2pdf from "html2pdf.js";
import { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import DownloadIcon from '@mui/icons-material/Download';
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);
  const handleExportPDF = () => {
    const content = document.getElementById("export-content"); // ID del contenido a exportar

    // html2pdf().from(content).save("CV Cristian Camilo Gutiérrez Vargas.pdf");
  };
  return (
    <div style={{ marginTop: "3%" }}>
      <div className="container" style={{ width: "80%" }}>
        {!isLoading && (
          <div style={{ textAlign: "right" }}>
            {/* <IconButton
              onClick={() => {
                handleExportPDF();
              }}
            >
             <DownloadIcon/>
            </IconButton> */}
          </div>
        )}
        {isLoading && <LoadingModal message="Cargando curriculum" />}
        {!isLoading && <InitComponent />}
      </div>
    </div>
  );
}

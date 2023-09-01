"use client";

import { useEffect, useState } from "react";
import LoadingModal from "@/components/LoadingModal/LoadingModal";
import { Header } from "@/components/Header/Header";
import { InitContent } from "@/components/InitContent/InitContent";

import { MiddelContent } from "@/components/middelContent/MiddelContent";
import { FinishContent } from "./finishContent/FinishContent";
export const InitComponent = () => {
  return (
    <div id="export-content">
      <Header />
      <InitContent />
      <MiddelContent />
      <FinishContent />
    </div>
  );
};

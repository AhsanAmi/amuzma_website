export const FULL_CATALOGUE_PDF = "/assets/documents/Amuzma Full Catalogue.pdf";

/**
 * Maps product page slugs to their catalogue PDF in public/assets/documents.
 * Products without an entry have no dedicated catalogue yet, and the
 * "Product catalogue" link is hidden for them.
 */
export const PRODUCT_CATALOGUE_PDFS: Record<string, string> = {
  "cnc-router-forte-13cr": "/assets/documents/CNC Router 13CR.pdf",
  "cnc-router-forte-15cr": "/assets/documents/CNC Router 15CR.pdf",
  "dust-collector-dc2200": "/assets/documents/Dust Collector Amuzma DC2200.pdf",
  "dust-collector-abs5000": "/assets/documents/Dust Collector Amuzma ABS5000.pdf",
  "dust-collector-rdc3800": "/assets/documents/Dust Collector Amuzma RDC3800.pdf",
  "spindle-moulder-elite-30sm": "/assets/documents/Spindal 30SM.pdf",
  "edge-banding-e5": "/assets/documents/edge banding Elite E5.pdf",
  "edge-banding-p6": "/assets/documents/edge banding Elite P6.pdf",
  "planer-elite-41pf": "/assets/documents/Planer 41PF.pdf",
  "planer-elite-41cm-cs": "/assets/documents/thicknesser 41CM.pdf",
  "thicknesser-elite-41th": "/assets/documents/Thicknesser Elite 41TH.pdf",
  "thicknesser-firma-63th": "/assets/documents/Thicknesser Firma 63th (1).pdf",
  "band-saw-65bs": "/assets/documents/Band Saw 65BS (1).pdf",
  "beam-saw-firma-33bs": "/assets/documents/Beam-saw-Firma-33BS.pdf",
  "panel-saw-firma-40pl": "/assets/documents/Panel Saw 40PL.pdf",
  "panel-saw-firma-35ps": "/assets/documents/Panel Saw Firma 35PS U.pdf",
  "panel-saw-forte-40pa": "/assets/documents/Panel Saw Forte 40PA n.pdf",
  "panel-saw-elite-35ts": "/assets/documents/Panel Saw 35TS.pdf",
};

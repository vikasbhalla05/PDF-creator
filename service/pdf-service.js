import PDFDocument from "pdfkit";

const buildPDF = (stream) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();

    doc.pipe(stream);
    doc.fontSize(25).text("Here is some vector graphics...", 100, 80);
    doc.end();

    stream.on("finish", resolve);
    stream.on("error", reject);
  });
};

export default { buildPDF };

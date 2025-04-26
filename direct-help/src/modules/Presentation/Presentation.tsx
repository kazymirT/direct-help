'use client'
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.mjs',
//   import.meta.url,
// ).toString();

const Presentation = () =>  {
  return (
    <Document file={'/Trucks4U.pdf'}>
      {Array.from(new Array(13), (_el, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          className='presentation'
        />
      ))}
    </Document>
  );
};

export default Presentation;

// import PdfReader from "pdfreader";

// or with destructuring
import pkg from 'pdfreader';
const { PdfReader } = pkg;

new PdfReader().parseFileItems("IIITDelhiBrochure.pdf", (err, item) => {
    if (err) console.log(err);
    else if (!item) console.warn("End of file");
    else if (item.text) console.log(item.text);
});

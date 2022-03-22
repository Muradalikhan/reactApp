import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// -----------------------------------------------
import jsPDF from "jspdf";

function App() {
  const generatePdf = () => {
    const doc = new jsPDF();
    // doc.text("This is the default font.", 20, 20);

    // doc.setFont("courier", "normal");
    // doc.text("This is courier normal.", 20, 30);

    // doc.setFont("times", "italic");
    // doc.text("This is times italic.", 20, 40);

    // doc.setFont("helvetica", "bold");
    // doc.text("This is helvetica bold.", 20, 50);

    // doc.setFont("courier", "bolditalic");
    // doc.text("This is courier bolditalic.", 20, 60);

    // doc.setFont("times", "normal");
    // doc.text("This is centred text.", 105, 80, null, null, "center");

    doc.setTextColor("#000");
    doc.setCharSpace(0.2);
    doc.setFontSize(22);
    doc.setFont("arial", "bold");
    doc.text("this is title", 105, 20, null, null, "center");

    doc.setTextColor("#000");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    var line = 25; // Line height to start text at
    var lineHeight = 7;
    var leftMargin = 20;
    var wrapWidth = 180;
    var longString = [
      "Sunt anim nostrud id proident consequat ad reprehenderit.",
      "Nulla ullamco labore laborum irure sunt laborum. Sint dolore quis commodo voluptate consectetur sint sint laboris minim. Incididunt in deserunt consectetur exercitation cupidatat ad ullamco consectetur eu laboris consequat officia amet. Reprehenderit consectetur dolore proident ullamco ea sunt dolore ad Lorem eu in ad.",
      "Culpa eiusmod eu eiusmod consectetur.",
      "Ad laboris ex nisi reprehenderit laboris magna enim.",
    ];
    var splitText = doc.splitTextToSize(longString, wrapWidth);
    for (var i = 0, length = splitText.length; i < length; i++) {
      // loop thru each line and increase
      doc.text(splitText[i], leftMargin, line);
      line = lineHeight + line;
    }
    doc.save("a4.pdf");
  };

  return (
    <div className="App">
      <h1 className="m-5">React Pdf Generator</h1>
      <button className="btn btn-success" onClick={generatePdf}>
        Download pdf
      </button>
    </div>
  );
}

export default App;

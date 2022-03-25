import React, { Component } from "react";
import jsPDF from "jspdf";
// ------------------------------------------------------
import { singleLine } from "./customeFunc";
import { bulletWith2line } from "./customeFunc";
import { bulletWith1line } from "./customeFunc";
import { fieldWithLable } from "./customeFunc";
import { fieldWithLongLable } from "./customeFunc";
import { ContactfieldWithLable } from "./customeFunc";
import { FinancialfieldWithLable } from "./customeFunc";
// ------------------------------------------------------

export default class CustomPdfDesign extends Component {
  generateCustomPdf = () => {
    const doc = new jsPDF();
    //Heading start*********************************
    doc.setFontSize(50);
    doc.setFont("Helvetica", "bold");
    doc.setTextColor("green");
    doc.text("CapöSim", 200, 25, "right");

    doc.setFontSize(16);
    doc.setFont("Helvetica", "normal");
    doc.setTextColor("black");
    doc.text("Capital Funding", 200, 30, "right");

    //page header*********************************
    singleLine(
      doc,
      "Requirements for Secured Revolving Lines of Credit",
      10,
      50,
      16,
      "Helvetica",
      "bold",
      "green"
    );

    //paragraph start ******************************
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.setFont("Helvetica", "normal");
    let line = 60;
    let lineHeight = 5;
    let leftMargin = 10;
    let wrapWidth = 190;
    let longString = [
      "The items listed below are required to process your loan with Capö Sim Investor Solutions. Please complete the applicable forms and provide the documentation listed below. We are readily available should you have any questions. Please type or write in ink when filling out all forms..",
    ];
    let splitText = doc.splitTextToSize(longString, wrapWidth);
    for (let i = 0, length = splitText.length; i < length; i++) {
      doc.text(splitText[i], leftMargin, line);
      line = lineHeight + line;
    }
    //paragraph start End ****************************

    //single line *********************************
    singleLine(
      doc,
      "Tax returns must include all schedules.",
      10,
      75,
      12,
      "Helvetica",
      "bold"
    );
    //single line with background fill ************************
    doc.setFillColor("green");
    doc.rect(10, 85, 190, 7, "F");
    singleLine(
      doc,
      "Preliminary Information",
      12,
      90,
      12,
      "Helvetica",
      "bold",
      "white"
    );
    //bullet with 2 lines*********************************

    bulletWith2line(doc);

    // //single line **********************************
    singleLine(
      doc,
      "The following documentation may be necessary to complete the loan.",
      10,
      205,
      12
    );
    singleLine(
      doc,
      "Additional information may also be required.",
      10,
      210,
      12
    );

    //bullet with 1 line*********************************

    bulletWith1line(doc);

    //single line **********************************
    singleLine(
      doc,
      "Please send completed applications to contact@caposim.com",
      35,
      265,
      12,
      "Helvetica",
      "bold"
    );
    singleLine(
      doc,
      "All photocopied documents must bear original signatures",
      40,
      270,
      12,
      "Helvetica",
      "bold"
    );
    // footer ***************************************************
    singleLine(
      doc,
      "123 South Kenton Street, 21st Floor, Los Angeles, California, 90091 Tel: 310-123-4567 www.caposim.com",
      10,
      290,
      11,
      "Helvetica",
      "normal",
      "#3a3a3a"
    );
    // =========================================page 2===========================================
    doc.addPage();

    // page header*********************************
    singleLine(
      doc,
      "Borrower Application",
      10,
      30,
      16,
      "Helvetica",
      "bold",
      "green"
    );

    //paragraph start ******************************
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.setFont("Helvetica", "normal");
    line = 40;
    lineHeight = 5;
    leftMargin = 10;
    wrapWidth = 190;
    longString = [
      "Please complete and submit this application with any additional documentation which may assist in the underwriting of your loan request. A complete application will enable us to expedite your loan request and respond with an accurate quote.",
    ];
    splitText = doc.splitTextToSize(longString, wrapWidth);
    for (let i = 0, length = splitText.length; i < length; i++) {
      doc.text(splitText[i], leftMargin, line);
      line = lineHeight + line;
    }
    //paragraph  End ****************************
    // ************************ Lender information section************************
    doc.setFillColor("green");
    doc.rect(10, 60, 190, 7, "F");
    singleLine(
      doc,
      "Lender Information",
      12,
      65,
      12,
      "Helvetica",
      "bold",
      "white"
    );
    fieldWithLable(doc);
    // ************************ Contact information section************************
    doc.setFillColor("green");
    doc.rect(10, 125, 190, 7, "F");
    singleLine(
      doc,
      "Contact Information",
      12,
      130,
      12,
      "Helvetica",
      "bold",
      "white"
    );
    ContactfieldWithLable(doc);
    // ************************ Financial information section************************
    doc.setFillColor("green");
    doc.rect(10, 180, 190, 7, "F");
    singleLine(
      doc,
      "Financial Summary",
      12,
      185,
      12,
      "Helvetica",
      "bold",
      "white"
    );
    FinancialfieldWithLable(doc);
    // footer ***************************************************
    singleLine(
      doc,
      "123 South Kenton Street, 21st Floor, Los Angeles, California, 90091 Tel: 310-123-4567 www.caposim.com",
      10,
      290,
      11,
      "Helvetica",
      "normal",
      "#3a3a3a"
    );
    // =========================================page 3===========================================
    doc.addPage();
    // page header*********************************
    singleLine(
      doc,
      "Private Mortgage Investment Experience",
      10,
      30,
      16,
      "Helvetica",
      "bold",
      "green"
    );

    //paragraph start ******************************
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.setFont("Helvetica", "normal");
    line = 40;
    lineHeight = 5;
    leftMargin = 10;
    wrapWidth = 190;
    longString = [
      "Please select answers to the following questions from the dropdown list provided.If none of the options available are a perfect match then select the response that is the closest fit to your circumstances.",
    ];
    splitText = doc.splitTextToSize(longString, wrapWidth);
    for (let i = 0, length = splitText.length; i < length; i++) {
      doc.text(splitText[i], leftMargin, line);
      line = lineHeight + line;
    }
    //paragraph  End ****************************

    // ************************ Lender information section************************
    doc.setFillColor("green");
    doc.rect(10, 60, 190, 7, "F");
    singleLine(
      doc,
      "Lender Information",
      12,
      65,
      12,
      "Helvetica",
      "bold",
      "white"
    );
    fieldWithLongLable(doc);
    // ************************ Manager Bios section************************
    singleLine(doc, "Manager Bios", 10, 160, 12);
    doc.setFillColor("#d2e2f7");
    doc.rect(10, 165, 190, 35, "F");
    //paragraph start ******************************
    doc.setFontSize(12);
    doc.setTextColor("#000");
    doc.setFont("Helvetica", "normal");
    line = 210;
    lineHeight = 5;
    leftMargin = 10;
    wrapWidth = 190;
    longString = [
      "The undersigned applies for the loan indicated in this application to be secured by the property escribed herein, and represents that the property will not be used for any illegal or restricted purpose, and that all statements made in this application and the attachments are true and are made for the purpose of obtaining the loan.",
    ];
    splitText = doc.splitTextToSize(longString, wrapWidth);
    for (let i = 0, length = splitText.length; i < length; i++) {
      doc.text(splitText[i], leftMargin, line);
      line = lineHeight + line;
    }
    //paragraph  End ****************************
    //******************singer section **************************************** */
    singleLine(doc, "Signer #1 ", 10, 240);
    doc.setFillColor("#d2e2f7");
    doc.rect(30, 235, 80, 10, "F");

    singleLine(doc, "Date", 132, 240);
    doc.setFillColor("#d2e2f7");
    doc.rect(145, 236, 10, 5, "F");

    singleLine(doc, "/", 157, 240);
    doc.setFillColor("#d2e2f7");
    doc.rect(160, 236, 10, 5, "F");

    singleLine(doc, "/", 172, 240);
    doc.setFillColor("#d2e2f7");
    doc.rect(175, 236, 25, 5, "F");

    // --------------------------------------

    singleLine(doc, "Signer #1 ", 10, 255);
    doc.setFillColor("#d2e2f7");
    doc.rect(30, 250, 80, 10, "F");

    singleLine(doc, "Date", 132, 255);
    doc.setFillColor("#d2e2f7");
    doc.rect(145, 251, 10, 5, "F");

    singleLine(doc, "/", 157, 255);
    doc.setFillColor("#d2e2f7");
    doc.rect(160, 251, 10, 5, "F");

    singleLine(doc, "/", 172, 255);
    doc.setFillColor("#d2e2f7");
    doc.rect(175, 251, 25, 5, "F");

    //******************singer section **************************************** */

    // footer ***************************************************
    singleLine(
      doc,
      "123 South Kenton Street, 21st Floor, Los Angeles, California, 90091 Tel: 310-123-4567 www.caposim.com",
      10,
      290,
      11,
      "Helvetica",
      "normal",
      "#3a3a3a"
    );
    // --------------------save document-------------------------------
    doc.save("custome.pdf");
  };
  render() {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.generateCustomPdf}>
          Download Custome Pdf
        </button>
      </div>
    );
  }
}

export const singleLine = (
  doc,
  text,
  left,
  top,
  size,
  family,
  weight,
  color
) => {
  doc.setFontSize(size ? size : 12);
  doc.setFont(family ? family : "Helvetica", weight ? weight : "normal");
  doc.setTextColor(color ? color : "black");
  doc.text(text, left, top, "left");
};

export const bulletWith2line = (doc) => {
  const arr = [
    {
      firstLine: "Completed Lender Questionnaire",
      secLine: "",
    },
    {
      firstLine: "Borrower Application",
      secLine:
        "The application must be signed. Applicant may provide additional an attachment.",
    },
    {
      firstLine: "Company Tax Returns",
      secLine:
        "2 years of tax returns for all applicants or guarantors with 20% borrowing entity",
    },
    {
      firstLine: "Individual Federal Income Tax Returns",
      secLine:
        "2 years of tax returns for all applicants or guarantors with 20% borrowing entity",
    },
    {
      firstLine: "Tax Returns or K-1s",
      secLine:
        "2 years for any other entities that affect personal or business cash flow.",
    },
    {
      firstLine: "Signed Capö Sim Credit Information Authorization Form",
      secLine: "Separate form for each individual guarantor.",
    },
    {
      firstLine: "Personal Financial Statement",
      secLine:
        "Separate form for each individual guarantor. Can use form 1006.",
    },
    {
      firstLine: "Corporate Financial Statement/P&L's",
      secLine: "",
    },
  ];

  let i = 0;
  arr.map((item, ind) => {
    if (ind > 0) i = i + 13;
    return (
      //single line **********************************
      <>
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(10, 95 + i, 5, 5, "F")}
        {singleLine(doc, item.firstLine, 20, 99 + i, 12, "Helvetica", "bold")}
        //---------------------------------------------------
        {singleLine(doc, item.secLine, 20, 104 + i, 12)}
      </>
    );
  });
};

export const bulletWith1line = (doc) => {
  const arr = [
    {
      firstLine:
        "Entity formation documents (Corporations, LLC`s, Partnerships, Trusts, etc.)",
    },
    {
      firstLine:
        "Copies of financial statements and documents for verification.",
    },
    {
      firstLine:
        "Spreadsheet of completed loans and current inventory (address, date loan made)",
    },
  ];

  let i = 0;
  arr.map((item, ind) => {
    if (ind > 0) i = i + 8;
    return (
      //single line **********************************
      <>
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(10, 220 + i, 5, 5, "F")}
        {singleLine(doc, item.firstLine, 20, 224 + i, 12)}
      </>
    );
  });
};

export const fieldWithLable = (doc) => {
  const arr = [
    {
      label: "Name of Company",
    },
    {
      label: "Addresss",
    },
    {
      label: "State",
    },
    {
      label: "Entity Type ",
    },
    {
      label: "Tax ID",
    },
    {
      label: "Referred by ",
    },
  ];

  let i = 0;
  arr.map((item, ind) => {
    if (ind > 0) i = i + 8;
    return (
      //single line **********************************
      <>
        {singleLine(doc, item.label, 10, 75 + i, 12)}
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(50, 71 + i, 150, 7, "F")}
      </>
    );
  });
};

export const fieldWithLongLable = (doc) => {
  const arr = [
    {
      label: "How many loans have been made?",
    },
    {
      label: "What is the structure of your portfolio?",
    },
    {
      label: "Number of defaults since inception?",
    },
    {
      label: "Were there losses on those defaults? ",
    },
    {
      label: "Is the fund seeking to grow?",
    },
    {
      label: "Can the fund support senior debt? ",
    },
    {
      label: "What are managements growth goals? ",
    },
    {
      label: "Do you have a compliance officer?  ",
    },
    {
      label: "Do you have a compliance officer? ",
    },
  ];

  let i = 0;
  arr.map((item, ind) => {
    if (ind > 0) i = i + 8;
    return (
      <>
        {singleLine(doc, item.label, 10, 75 + i, 12)}
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(100, 71 + i, 50, 7, "F")}
      </>
    );
  });
};

export const ContactfieldWithLable = (doc) => {
  const arr = [
    {
      label: "Name of Title",
    },
    {
      label: "Address",
    },
    {
      label: "Phone",
    },
    {
      label: "Date of Birth ",
    },
    {
      label: "SS#",
    },
  ];

  let i = 0;
  arr.map((item, ind) => {
    if (ind > 0) i = i + 8;
    return (
      //single line **********************************
      <>
        {singleLine(doc, item.label, 10, 139 + i, 12)}
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(50, 135 + i, 150, 7, "F")}
      </>
    );
  });
};

export const FinancialfieldWithLable = (doc) => {
  const arr = [
    {
      label1: "Borrower 2012 ",
      label2: "Liabilities $ ",
      label3: "Cash Flow $",
    },
    {
      label1: "Borrower 2011",
      label2: "Liabilities $ ",
      label3: "Cash Flow $",
    },
    {
      label1: "Guarantor A 2012",
      label2: "Liabilities $ ",
      label3: "Cash Flow $",
    },
    {
      label1: "Guarantor A 2011 ",
      label2: "Liabilities $ ",
      label3: "Cash Flow $",
    },
    {
      label1: "Guarantor B 2012",
      label2: "Liabilities $ ",
      label3: "Cash Flow $",
    },
    {
      label1: "Guarantor B 2011",
      label2: "Liabilities $ ",
      label3: "Cash Flow $",
    },
  ];

  let i = 0;
  arr.map((item, ind) => {
    if (ind > 0) i = i + 8;
    return (
      //single line **********************************
      <>
        {singleLine(doc, item.label1, 10, 195 + i, 12)}
        {singleLine(doc, item.label2, 50, 195 + i, 12)}
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(75, 190 + i, 40, 7, "F")}
        {singleLine(doc, item.label3, 120, 195 + i, 12)}
        {doc.setFillColor("#d2e2f7")}
        {doc.rect(150, 190 + i, 50, 7, "F")}
      </>
    );
  });
};

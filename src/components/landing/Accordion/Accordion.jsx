import React from "react";
import style from "./Accordion.module.css";

import { Accordion as Accord } from "@mui/material";
import AccordionSummary from "@mui/material/AccordionSummary";

import AccordionDetails from "@mui/material/AccordionDetails";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
function Accordion({ summary, detail }) {
  return (
    <div className={style.accord}>
      <Accord>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
          expandIcon={<ExpandMoreIcon />}
          className={style.header}
        >
          {summary}
        </AccordionSummary>
        <AccordionDetails className={style.details}>{detail}</AccordionDetails>
      </Accord>
    </div>
  );
}

export default Accordion;

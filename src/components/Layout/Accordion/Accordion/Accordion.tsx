import { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { Box } from "../../../Box/Box";
import { Typography } from "../../../General/Typography";
import './accordion.css';

const Accordion = () => {
  const [showAccordion, setShowAccordion] = useState(false);
  return (
    <Box style={{ flexDirection: "column" }}>
      <Box
        style={{
          width: "100%",
          margin: "10px",
          marginBottom: "0px",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Typography elementType={5}>ds </Typography>
        <BiChevronDown onClick={() => setShowAccordion(!showAccordion)} />
      </Box>
        <Box
        className= {showAccordion ? "twizzle-accordion visible" : "twizzle-accordion hidden"}
          style={{
            width: "100%",
            margin: "10px",
            backgroundColor: "red",
            height: "150px",
          }}
        >
          Accordion description
        </Box>
    </Box>
  );
};

export default Accordion;

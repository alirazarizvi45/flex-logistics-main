import {
  Box,
  Container,
  Grid,
  Typography,
  Collapse,
  Divider,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import mingcuteCar from "../../assets/mingcuteCar.png";
import map from "../../assets/map.png";
import CommonButton from "../../components/CommonButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CustomizeInput } from "../../components/CustomizeInput";
import { Element } from "react-scroll";
const Faq = () => {
  const [expanded1, setExpanded1] = useState(false);
  const [expanded2, setExpanded2] = useState(false);
  const [expanded3, setExpanded3] = useState(false);
  const [expanded4, setExpanded4] = useState(false);
  const [expanded5, setExpanded5] = useState(false);
  const [expanded6, setExpanded6] = useState(false);
  const getButtonColor = (index) => {
    switch (index) {
      case 1:
        return expanded1 ? "#F2B705" : "#373A41";
      case 2:
        return expanded2 ? "#F2B705" : "#373A41";
      case 3:
        return expanded3 ? "#F2B705" : "#373A41";
      case 4:
        return expanded4 ? "#F2B705" : "#373A41";
      case 5:
        return expanded5 ? "#F2B705" : "#373A41";
      case 6:
        return expanded6 ? "#F2B705" : "#373A41";
      default:
        return "#373A41";
    }
  };
  const handleToggle = (index) => {
    switch (index) {
      case 1:
        setExpanded1(!expanded1);
        break;
      case 2:
        setExpanded2(!expanded2);
        break;
      case 3:
        setExpanded3(!expanded3);
        break;
      case 4:
        setExpanded4(!expanded4);
        break;
      case 5:
        setExpanded5(!expanded5);
        break;
      case 6:
        setExpanded6(!expanded6);
        break;
      default:
        break;
    }
  };
  const getExpandedState = (index) => {
    switch (index) {
      case 1:
        return expanded1;
      case 2:
        return expanded2;
      case 3:
        return expanded3;
      case 4:
        return expanded4;
      case 5:
        return expanded5;
      case 6:
        return expanded6;
      default:
        return false;
    }
  };
  const getButtonIcon = (index) => {
    switch (index) {
      case 1:
        return expanded1 ? <RemoveIcon /> : <AddIcon />;
      case 2:
        return expanded2 ? <RemoveIcon /> : <AddIcon />;
      case 3:
        return expanded3 ? <RemoveIcon /> : <AddIcon />;
      case 4:
        return expanded4 ? <RemoveIcon /> : <AddIcon />;
      case 5:
        return expanded5 ? <RemoveIcon /> : <AddIcon />;
      case 6:
        return expanded6 ? <RemoveIcon /> : <AddIcon />;
      default:
        return <AddIcon />;
    }
  };
  const faqData = [
    {
      question: "How do I book a ride with Flex Logistics?",
      answer:
        "Booking is simple! Choose your ride, set your destination, and confirm. Your reliable driver or rider will be on their way.",
    },
    {
      question: "What types of rides are available?",
      answer:
        "Flex Logistics utilizes a network of carriers and optimized routes to efficiently transport goods.",
    },
    {
      question: "Are the drivers and riders trustworthy?",
      answer:
        "Yes, Flex Logistics operates globally to provide transportation services worldwide.",
    },
    {
      question: "What payment options are available?",
      answer:
        "Flex Logistics transports a wide range of goods, including perishable items, electronics, and industrial equipment.",
    },
    {
      question: " How can I track the status of my booked ride ?",
      answer:
        "You can track your shipment through our online portal or mobile app, using your unique tracking ID.",
    },
  ];
  return (
    <Element name="faq" className="element">
      <Box
        sx={{
          backgroundImage: `url(${map})`,
          backgroundPosition: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          minHeight: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",

              justifyContent: "center",
              alignItems: "center",
              padding: "70px 0px",
            }}
          >
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                }}
              >
                <img
                  src={mingcuteCar}
                  alt="solarbus"
                  style={{
                    width: "25px",
                    height: "25px",
                    objectFit: "contain",
                  }}
                />
                <Typography
                  variant="h4"
                  color="#F2B705"
                  textTransform="uppercase"
                  letterSpacing={4}
                >
                  FAQ’s
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="h2"
                  color="#373A41"
                  fontWeight="bolder"
                  pt={2}
                >
                  Explore Your Queries
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontSize="17px"
                  color="#5A5A5A"
                  pt={1}
                >
                  Frequently Asked Questions about Flex Logistics
                </Typography>
              </Box>

              {faqData.map((faq, index) => (
                <Box key={index} mt={2}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <CommonButton
                      onClick={() => handleToggle(index + 1)}
                      sx={{
                        backgroundColor: getButtonColor(index + 1),
                        color: "#fff",
                        padding: "10px",
                        "&:hover": {
                          backgroundColor: getButtonColor(index + 1),
                        },
                      }}
                    >
                      {getButtonIcon(index + 1)}
                    </CommonButton>

                    <Typography
                      sx={{
                        backgroundColor: "#E6E6E6",
                        padding: "10px",
                        fontWeight: "600",
                        flexGrow: 1,
                      }}
                      color="#464343"
                      variant="subtitle1"
                    >
                      {faq.question}
                    </Typography>
                  </Box>

                  <Collapse
                    in={getExpandedState(index + 1)}
                    timeout="auto"
                    unmountOnExit
                    sx={{ marginTop: "10px" }}
                  >
                    <Typography color="#000000" sx={{ padding: "10px" }}>
                      {faq.answer}
                    </Typography>
                  </Collapse>
                </Box>
              ))}
            </Grid>

            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  backgroundColor: "#F2B705",
                  padding: "20px 30px",
                  borderRadius: "5px",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "5px",
                  }}
                >
                  <Typography variant="h3" color="#373A41">
                    Get in Touch
                  </Typography>
                  <Divider
                    sx={{
                      borderBottom: "3px solid #373A41",
                      width: "12%",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    paddingTop: "20px",
                  }}
                >
                  <CustomizeInput fullWidth placeholder="Full name" />
                  <CustomizeInput fullWidth placeholder="Email Address" />
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    placeholder="Message"
                    sx={{
                      backgroundColor: "#fff",
                    }}
                  />
                </Box>
                <Box pt={2}>
                  <CommonButton
                    sx={{
                      backgroundColor: "#373A41",
                      color: "#fff",
                      textTransform: "none",
                    }}
                    fullWidth
                  >
                    Send Now
                  </CommonButton>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Element>
  );
};
export default Faq;

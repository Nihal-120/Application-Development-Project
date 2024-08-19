import React from "react";
import styled from "styled-components";
// import lighthouse from "../assets/lighthouse.png";
import { BiWorld } from "react-icons/bi";
import { Bs0Circle, Bs0CircleFill, Bs0Square, Bs0SquareFill, BsAirplaneEnginesFill, BsHeadphones, BsPerson, BsSquareFill } from "react-icons/bs";
import { GiAbstract030 } from "react-icons/gi";
import Testimonial from "./Review";
import { Box } from "@mui/material";
import Footer from "./Footer";

export default function Offer() {
  const data = [
    {
      text: "Best Travel Guide Always for your Services",
      icon: <BsPerson />,
      color: "brown",
    },
    {
      text: "World Class Services Provided For You",
      icon: <BiWorld />,
      color: "green",
    },
    {
      text: "24/7 Strong Customer Support",
      icon: <BsHeadphones />,
      color: "brown",
    },
    {
      text:"Responsive & Friendly Design",
      icon: <BsPerson/>,
      color: "green",
    },
    {
      text:"Smart Booking Process",
      icon: <Bs0CircleFill/>,
      color: "brown",
    },
    {
      text:"Unlimited Travel Packages",
      icon: <Bs0SquareFill/>,
      color: "brown",
    },
    {
      text:"Clear Pricings",
      icon: <Bs0CircleFill/>,
      color: "brown",
    },
    {
      text:"Group Discount",
      icon: <Bs0SquareFill/>,
      color: "brown",
    },
    {
      text:"Effective Payment Integration",
      icon: <Bs0SquareFill/>,
      color: "brown",
    },
    {
      text:"Effective Search Filters",
      icon: <Bs0CircleFill/>,
      color: "brown",
    },
    {
      text:"Booking Details",
      icon: <Bs0SquareFill/>,
      color: "brown", 
    },
    {
      text:"Google Map Integration",
      icon: <Bs0CircleFill/>,
      color: "brown", 
    },
    {
      text:"Testimonials and Customer Reviews",
      icon: <Bs0SquareFill/>,
      color: "brown", 
    },
  ];

  return (
    <div>
      <Box
        style={{
          backgroundImage:
            'url("https://wallpapercave.com/wp/wp4845135.jpg',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        sx={{
          background: "rgb(249,250,251)",
          minHeight: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Section id="offer">
          <div className="image">
            <img
              style={{ marginLeft: "0px" }}
              src="https://i.redd.it/ru9ug3djit9a1.jpg"
              width="700px"
            />
            <img
              style={{ marginLeft: "0px" }}
              src="https://wallpapers.com/images/featured/2160x3840-dk9asom1hkjqfnwk.jpg"
              width="700px"
            />
          </div>
          <div className="content">
            <div className="title">
              <h1 style={{ color: "black" }}>
                We are Offering in Total 793 Tours Across the World
              </h1>
            </div>
            <ul className="list">
              {data.map(({ text, icon, color }) => (
                <li key={text}>
                  <div
                    style={{
                      color: color,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "2rem",
                    }}
                  >
                    {icon}
                  </div>
                  <div className="text">
                    <h3 style={{ color: "black" }}>{text}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Section>
        <Testimonial />
        <Footer />
      </Box>
    </div>
  );
}

const Section = styled.section`
  margin: 8rem 0;
  display: flex;
  gap: 5rem;

  .image {
    img {
      height: 35rem;
    }
  }
  .content {
    .title {
      margin: 2rem 0;
      h1 {
        font-size: 3rem;
      }
    }
    .list {
      list-style-type: none;
      li {
        display: flex;
        align-items: center;
        gap: 2rem; /* Adjust gap as needed */
        margin: 2rem 0; /* Adjust margin as needed */
        .text {
          h3 {
            font-size: 1.5rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    flex-direction: column;
    margin: 5rem 1rem;
    gap: 2rem;
    .image {
      img {
        max-inline-size: 100%;
        block-size: auto;
      }
    }
    .content {
      .title {
        h1 {
          font-size: 2rem;
          text-align: center;
        }
      }
      .list {
        li {
          gap: 1rem;
          margin: 2rem 0;
          .text {
            h3 {
              font-size: 1rem;
            }
          }
        }
      }
    }
  }
`;

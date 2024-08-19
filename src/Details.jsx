import { Box } from "@mui/material";
import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";

const cards = [
  {
    name: "Taj Mahal",
    img: "https://images.pexels.com/photos/1583339/pexels-photo-1583339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "The Taj Mahal is an ivory-white marble mausoleum on the south bank of the Yamuna river in the Indian city of Agra",
    Location: "India,Agra",
  },
  {
    name: "Mehrangarh Fort",
    img: "https://images.pexels.com/photos/16910734/pexels-photo-16910734/free-photo-of-mehrangarh-fort-in-jodhpur-in-india.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Famous indian tourist landmark and attraction of India - Mehrangarh Fort, Jodhpur, Rajasthan, India on sunset",
    Location: "India,Jaipur",
  },
  {
    name: "Munnar",
    img: "https://images.pexels.com/photos/13691355/pexels-photo-13691355.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Green hills of tea plantations in Munnar",
    Location: "India,Munnar",
  },
  {
    name: "Pololem beach",
    img: "https://t3.ftcdn.net/jpg/00/77/00/26/240_F_77002615_Gl1Hk6qZpi2xCAlX8EUTRLBqC4ei6QfC.jpg",
    description: "India, Goa, Palolem beach",
    Location: "India,Goa",
  },
  {
    name: "The City Palace",
    img: "https://t4.ftcdn.net/jpg/03/19/46/47/240_F_319464774_i5NSxsN5fdHgF8OOZxD4VuNKequMkqbI.jpg",
    description: "Woman posing at City Palace , Jaipur, Rajasthan, India",
    Location: "India,Jaipur",
  },
  {
    name: "Backwaters du Kerala",
    img: "https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "backwaters du kerala",
    Location: "India,Kerala",
  },
  {
    name: "Gingee Fort",
    img: "https://t3.ftcdn.net/jpg/06/53/30/88/360_F_653308826_36lyEUWVTJ4f1X2huOxVQxfn3HqJ1bSB.jpg",
    description:
      "A wide view of Gingee Fort which is perched on a mountain top.The sweet named mutamitai is famous in gingee",
    Location: "India,Ginjee",
  },
  {
    name: "Sri Ranganathaswamy temple",
    img: "https://t4.ftcdn.net/jpg/00/41/41/89/240_F_41418971_I2OMfd4Gm203Q8Voe0YNoeCIPwqrxya5.jpg",
    description: "Hindu temple in Tiruchirappalli, Tamil Nadu, India",
    Location: "India,Tiruchirappalli",
  },
  {
    name: "Kotagiri hill",
    img: "https://images.pexels.com/photos/27131971/pexels-photo-27131971/free-photo-of-fog-over-forest-on-hill.jpeg",
    description:
      "Nature background green environment -Tea Garden at Kotagiri hill India.",
    Location: "India,Kotagiri",
  },
  {
    name: "Tower bridge",
    img: "https://images.pexels.com/photos/726484/pexels-photo-726484.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Tower bridge at sunrise in autumn",
    Location: "London",
  },
  {
    name: "Big Ben house",
    img: "https://images.pexels.com/photos/11010565/pexels-photo-11010565.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Big Ben and Houses of Parliament",
    Location: "London",
  },
  {
    name: "City center",
    img: "https://images.pexels.com/photos/9208721/pexels-photo-9208721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description: "Historical buildings in London city center, England, UK",
    Location: "London",
  },
  {
    name: "Tewkesbury Abbey",
    img: "https://images.pexels.com/photos/24499695/pexels-photo-24499695/free-photo-of-view-of-the-abbey-of-sauvelade-france.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Drone shot over Tewkesbury Abbey in Tewkesbury, England on garden",
    Location: "London",
  },
  {
    name: "Olympic Stadium",
    img: "https://as1.ftcdn.net/v2/jpg/04/60/17/30/1000_F_460173078_tWEBVVdLjLfQOl6SftVAmRC8Fgj1a9ZX.jpg",
    description: "UK, London, Aerial view The Olympic Stadium at sunset",
    Location: "London",
  },
  {
    name: "The London Skyline",
    img: "https://as2.ftcdn.net/v2/jpg/02/10/70/65/1000_F_210706570_mDkiM7NFQqGlibkHggcsi7HobaSbgi4I.jpg",
    description: "The London Skyline Panoramic.",
    Location: "London",
  },
  {
    name: "Muswell hill",
    img: "https://as2.ftcdn.net/v2/jpg/01/65/06/03/1000_F_165060346_KUAXnjtVlNygfzP3gAuQPiNQdh6wemno.jpg",
    description:
      "London, England - Typical brick houses and flats and panoramic view of london on a nice summer morning with blue sky and clouds taken from Muswell Hill",
    Location: "London,England",
  },
  {
    name: "Castello di Moszna",
    img: "https://as1.ftcdn.net/v2/jpg/07/15/93/64/1000_F_715936448_0me7FfZpNjjEADk4EFmg7E7vgq7kzv77.jpg",
    description: "Castello di Moszna",
    Location: "London",
  },
  {
    name: "Georgian residential",
    img: "https://as2.ftcdn.net/v2/jpg/02/15/72/45/1000_F_215724590_ulnMU6UyacCG5JlMcO9aqaSeHl9yRYIB.jpg",
    description:
      "Facade of Georgian residential town houses made in yellow and red brick in a luxury residential area of West London.",
    Location: "London,West London",
  },
  {
    name: "Barrika beach",
    img: "https://as1.ftcdn.net/v2/jpg/05/29/32/12/1000_F_529321283_Y1rGrLuKDAr4u5hBImriIMqlXnWJwM1S.jpg",
    description: "Barrika beach in a cloudy night, Basque country, Spain.",
    Location: "Spain,Basque country",
  },
  {
    name: "Bahia de la concha",
    img: "https://as1.ftcdn.net/v2/jpg/07/63/26/14/1000_F_763261460_O3FXAq7X1OpEFJ4aNkLvgTOY5jxx0819.jpg",
    description:
      "Aerial view of Bahía de la concha, Antiguo, Donostia-San Sebastián, Gipuzkoa, Spain.",
    Location: "Spain,Gipuzkoa",
  },
  {
    name: "Lighthouse Pollenca",
    img: "https://as2.ftcdn.net/v2/jpg/08/77/00/41/1000_F_877004102_5BfdLdJLWR33bAHTg1AkqQTDxYzj1zW4.jpg",
    description:
      "Lighthouse on the bay of Pollenca, Mallorca, Balearic islands, Spain, Mediterranean, Europe",
    Location: "Spain,Balearic Islands",
  },
  {
    name: "Royalty Free",
    img: "https://as2.ftcdn.net/v2/jpg/06/93/54/09/1000_F_693540999_aiC4mMpE5niuYGs0fhOQCTtPfKqdUkiC.jpg",
    description: "Royalty Free",
    Location: "Spain",
  },
  {
    name: "Mediterranean Sea",
    img: "https://as1.ftcdn.net/v2/jpg/03/98/52/72/1000_F_398527272_RKyh0wQ8EwxooooUvVFBavfsDqTGHdqZ.jpg",
    description:
      "Spain, Mallorca, Santanyi, Helicopter view of coastal village surrounded by blue waters of Mediterranean Sea in summer",
    Location: "Spain,Mallorca",
  },
  {
    name: "Albarracin",
    img: "https://as1.ftcdn.net/v2/jpg/02/15/13/64/1000_F_215136419_0V5EOW9pJG7OINMn55mofAUs4A2vkW7b.jpg",
    description: "Albarracin, Aragon, Spain.",
    Location: "Spain,Aragon",
  },
  {
    name: "Belmonte Castle",
    img: "https://as2.ftcdn.net/v2/jpg/06/47/73/07/1000_F_647730733_X0WMWfBP1D2SXXaIrypStSlXVigqlciu.jpg",
    description:
      "15Th Century Belmonte Castle; Belmonte, Cuenca, Castilla La Mancha, Spain",
    Location: "Spain,Castilla La Mancha",
  },
  {
    name: "Lighthouse of Faro de Cabo Mayor",
    img: "https://as1.ftcdn.net/v2/jpg/04/19/46/44/1000_F_419464458_8pu222RnBrm1O0a1CykvY7GIMcJ9ig4h.jpg",
    description:
      "Scenic view of small island with lighthouse called Faro de Cabo Mayor connected with coastline by bridge under dramatic cloudy sky at sunset time in Santander in Spain.",
    Location: "Spain",
  },
  {
    name: "Lavender field Spain",
    img: "https://as1.ftcdn.net/v2/jpg/04/50/74/26/1000_F_450742640_cwSnJ0T4fEOc0aUY6bxdJ6sA5k4Umtu0.jpg",
    description: "Lavender field at sunrise with golden and violet colors.",
    Location: "Spain",
  },
  {
    name: "Great wall China",
    img: "https://t4.ftcdn.net/jpg/00/90/15/29/240_F_90152948_fAFZ0kHq7Sgnvd5tltgLiIVpODr1XNc3.jpg",
    description: "Great Wall China.",
    Location: "China",
  },
  {
    name: "Fenghuang",
    img: "https://as1.ftcdn.net/v2/jpg/02/98/42/22/1000_F_298422217_YH5SvdeBGJqqbdBZs5B3bx0lJE0nSgRq.jpg",
    description:
      "Street decorated with traditional Chinese umbrellas, Fenghuang.",
    Location: "China,Fenghuang",
  },
  {
    name: "Zhangjiajie Wulingyuan",
    img: "https://as1.ftcdn.net/v2/jpg/02/48/78/18/1000_F_248781821_kr84rWxuPg71P58GFon89NPjJixiIyhs.jpg",
    description: "Zhangjiajie Wulingyuan China.",
    Location: "China",
  },
  {
    name: "Chongsheng Monastery",
    img: "https://as2.ftcdn.net/v2/jpg/00/91/73/41/1000_F_91734119_mKewqBvDvfItQBh27ypo1f6D1zAqFKVr.jpg",
    description: "Chongsheng Monastery.",
    Location: "China",
  },
  {
    name: "Hunan province",
    img: "https://as1.ftcdn.net/v2/jpg/01/69/00/44/1000_F_169004466_pQdXdpLkkq54nsY4K59KSvPITT2Bi2tN.jpg",
    description:
      "The road up the hill with a beautiful view,Hunan province,China.",
    Location: "China,Hunan province",
  },
  {
    name: "Paro Taktsang Bhutan",
    img: "https://as2.ftcdn.net/v2/jpg/03/00/09/91/1000_F_300099161_Pb4fuBabwjVuxcCkkv2yxfCScQsVNmCd.jpg",
    description: "Paro Taktsang in Bhutan.",
    Location: "China,Bhutan",
  },
  {
    name: "Temple of Heaven Beijing",
    img: "https://as2.ftcdn.net/v2/jpg/00/66/86/83/1000_F_66868352_BSIMQiSVhRObMwBcZWf3oMuPWgur9DWB.jpg",
    description: "Temple of Heaven in Beijing, China.",
    Location: "China,Beijing",
  },
  {
    name: "Lijiang China",
    img: "https://as2.ftcdn.net/v2/jpg/01/20/07/59/1000_F_120075921_ahUnQC9Whq84y9NY9Z6yYXA4UJ0THOli.jpg",
    description: "China - Lijiang.",
    Location: "China,Lijiang",
  },
  {
    name: "Nachi Falls",
    img: "https://as2.ftcdn.net/v2/jpg/03/67/34/09/1000_F_367340940_RPtfarIzHqKUtNx15kAI2EJY75Qtt1iA.jpg",
    description: "Temple and Nachi Falls.",
    Location: "China",
  },
  {
    name: "Andaman and Nicobar",
    img: "https://t3.ftcdn.net/jpg/03/37/20/46/240_F_337204667_ymMIWNRQ0ieBbe9IHNKdOqUkfK9yIF67.jpg",
    description: "Andaman and Nicobar Islands, India",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Havelock island",
    img: "https://as2.ftcdn.net/v2/jpg/01/58/25/99/1000_F_158259934_QFgAdTdg53uTATTQfWZWIlwaxQbSdGrt.jpg",
    description: "Mangrove tree at Havelock island, Andaman and Nicobar, India",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Swaraj Dweep",
    img: "https://as2.ftcdn.net/v2/jpg/07/04/82/25/1000_F_704822582_KOY45V0uFOIiiE8vgcIwnMiaAlwJRotD.jpg",
    description:
      "Solitary mangrove tree on the beach at low tide at the coast of a tropical island on a sunny day on Swaraj Dweep or Havelock island in Andaman and Nicobar island archipelago in India.",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Elephant Beach",
    img: "https://as1.ftcdn.net/v2/jpg/04/81/10/62/1000_F_481106246_twXh8V0sjSlvcuCqxDZHHSRr7hpiMsh3.jpg",
    description: "Elephant Beach, Havelock Island, Andaman, India",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Neil island",
    img: "https://as2.ftcdn.net/v2/jpg/02/13/90/13/1000_F_213901344_g0yLbwSfphxvp7uNY744GfrAbu19cYu8.jpg",
    description:
      "a portion of sea arch Neil island, Andaman and Nicobar, India",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Port Blair Jail Wings",
    img: "https://as2.ftcdn.net/v2/jpg/00/26/37/31/1000_F_26373144_aDHRY5KrCkRpV1WvHH7dmxP0TjY0EL6f.jpg",
    description: "Port Blair Jail Wings.",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Jolly bouy island",
    img: "https://as2.ftcdn.net/v2/jpg/03/23/24/67/1000_F_323246729_sNsediXrdq6OZULP94dVS2qvBCvx16pk.jpg",
    description:
      "The most beautiful Jolly bouy island in andaman and nicobar islands.",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Radhanagar Beach",
    img: "https://as1.ftcdn.net/v2/jpg/04/81/10/68/1000_F_481106889_mgxI1OuGA6SMoMM3TOkLBQfs2mjGw2lw.jpg",
    description: "Sunset on the sea, Radhanagar Beach, Havelock Island.",
    Location: "Andaman and Nicobar",
  },
  {
    name: "Faroe Islands",
    img: "https://as2.ftcdn.net/v2/jpg/02/43/02/81/1000_F_243028108_HFDSxWqp8UqVpQSNH454HZXg7h9T3UYA.jpg",
    description:
      "Flowers with a view of Drangarnir in the background standing in the ocean in Faroe Islands, Denmark. Dark moody day at this iconic location.",
    Location: "Andaman and Nicobar",
  },
  {
    name: "TAerial view Capetown",
    img: "https://as2.ftcdn.net/v2/jpg/01/52/58/91/1000_F_152589155_fl9I45bnrcX0AZ4zPZTRgu6BO2bUxHcS.jpg",
    description: "TAerial view of Capetown, South Africa.",
    Location: "South Africa,Capetown",
  },
  {
    name: "Savannah Forest",
    img: "https://as1.ftcdn.net/v2/jpg/02/94/84/68/1000_F_294846823_EDmzSopDAYZ9x5cX3y0ZcNmo0LXDYXDc.jpg",
    description: "Cheetah walks down twisted tree in savannah.",
    Location: "Africa",
  },
  {
    name: "African safari view",
    img: "https://as2.ftcdn.net/v2/jpg/07/31/31/79/1000_F_731317976_fZ22CdGmZHaIgWshImfYpToVIbZ5s1mH.jpg",
    description:
      "Tourist couple on an African safari to view wildlife in an open grassy field as the sun comes up.",
    Location: "Africa",
  },
  {
    name: "Aerial view Cape Town",
    img: "https://as1.ftcdn.net/v2/jpg/02/92/78/36/1000_F_292783691_qYXzNyikvZmW95yP9WTtuCzaZy8mEK8v.jpg",
    description: "Cape Town aerial view.",
    Location: "South Africa,Capetown",
  },
  {
    name: "Graskop",
    img: "https://as2.ftcdn.net/v2/jpg/06/24/94/73/1000_F_624947317_pCFHwvpwuPMIAyhGi3O2d8iT53qofolE.jpg",
    description:
      "Panorama shot of the Blyde River Canyon, dam and the mountains with lush foliage, Panorama Route, Graskop, Mpumalanga, South Africa.",
    Location: "South Africa,Mpumalanga",
  },
  {
    name: "Baobab trees Baobabs",
    img: "https://as2.ftcdn.net/v2/jpg/01/63/23/53/1000_F_163235373_Xzz4MLDDFGhBbM7tqsMYSNB0aueQYxFv.jpg",
    description:
      "Beautiful Baobab trees at sunset at the avenue of the baobabs in Madagascar",
    Location: "South Africa, Madagascar",
  },
  {
    name: "Gambia Mangroves",
    img: "https://as2.ftcdn.net/v2/jpg/03/05/71/21/1000_F_305712104_yZkiQ5QKwKgDzp4f1pbVq75oEYjq3ZSr.jpg",
    description:
      "Gambia Mangroves. Aerial view of mangrove forest in Gambia. Photo made by drone from above. Africa Natural Landscape..",
    Location: "South Africa,Gambia",
  },
  {
    name: "Pyramids of Giza",
    img: "https://as2.ftcdn.net/v2/jpg/02/58/51/97/1000_F_258519703_3922elpnwnYxW4N3egJpTEbgJsLesi0m.jpg",
    description: "The Pyramids of Giza and the Great Sphinx, Egypt.",
    Location: "North Africa,Egypt",
  },
  {
    name: "Port Said Egypt",
    img: "https://as2.ftcdn.net/v2/jpg/02/45/93/55/1000_F_245935551_xNOVJXIoM3hHooZ2T7GLotDGCPFQzSpm.jpg",
    description: "Port Said, Egypt.",
    Location: "North Africa,Egypt",
  },
];

function DetailsPage() {
  const { id } = useParams();
  const card = cards[id];
  const navigate = useNavigate();

  return (
    <div className="bg-light">
      <Box
        style={{
          backgroundImage:
            'url("https://wallpapers.com/images/hd/light-blue-2160-x-3840-background-6tahvel26illolhf.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: "100vh",
        }}
      >
        <div className="py-6">
          <div className="container px-4">
            <div className="row gx-4">
              <div className="col-md-6">
                <div
                  className="h-64 md:h-80 rounded bg-secondary mb-4 d-flex align-items-center justify-content-center"
                  style={{
                    height: "35rem",
                    marginTop: "50px",
                  }}
                >
                  <span className="display-1">
                    <img
                      src={card.img}
                      alt={card.description}
                      style={{
                        width: "100%",
                        height: "35rem",
                      }}
                    />
                  </span>
                </div>

                {/* <div className="row gx-2 mb-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="col">
                    <button className="btn btn-secondary w-100 h-100 d-flex align-items-center justify-content-center">
                      <span className="display-6">{i}</span>
                    </button>
                  </div>
                ))}
              </div> */}
              </div>
              <div className="col-md-6 pt-3">
                <h2 className="mb-2 fw-bold text-secondary display-4">
                  {card.name}
                </h2>
                <p className="text-muted">
                  <a
                    href="#"
                    className="text-secondary text-decoration-underline"
                  >
                    {card.Location}
                  </a>
                </p>

                <div className="d-flex align-items-center my-4">
                  <div className="me-4">
                    <div className="d-flex py-2 px-3">
                      <span className="text-secondary me-1 mt-1">✵</span>
                      <span className="fw-bold text-secondary display-3">
                        Review
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        aria-hidden="true"
                        className="bi bi-star-fill text-warning"
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3.612 15.443 4.693 9.566.752 6.276l5.164-.754L8 1.173l2.084 4.349 5.164.754-3.94 3.29 1.08 5.877L8 13.187l-4.389 2.256z" />
                      </svg>
                    ))}
                  </div>
                </div>

                <p className="text-muted">{card.description}</p>

                <div className="d-flex py-4 justify-content-center justify-content-md-start">
                  <button
                    onClick={() => navigate("/payment")}
                    className="btn btn-secondary text-white fw-semibold"
                  >
                    Book Now
                  </button>
                </div>
                <p>
                  For further details or any queries regarding booking or any
                  other please contact us!
                </p>
                <div>
                  <h1 className="mb-5 h4 fw-bold text-secondary">
                    Contact Details
                  </h1>
                  <div className="row gx-2">
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-person-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 14s-1 0-1-1 1-4 5-4 5 4 5 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                          </svg>
                        </span>
                        : Nag
                      </h1>
                    </div>
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-envelope-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm.05 1.555L8 9.745l7.95-4.19A2 2 0 0 0 14 4H2a2 2 0 0 0-1.95 1.555z" />
                          </svg>
                        </span>
                        : sdsdjaosdod@gmail.com
                      </h1>
                    </div>
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-telephone-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.654 1.328a.678.678 0 0 1 1.018-.063l2.18 2.18c.198.198.291.48.244.757l-.547 3.278a.678.678 0 0 1-.738.576L4.295 7.208a11.487 11.487 0 0 0 4.042 4.042l.575-1.516a.678.678 0 0 1 .576-.738l3.278-.547a.678.678 0 0 1 .757.244l2.18 2.18a.678.678 0 0 1-.063 1.018l-2.745 2.745c-.346.346-.83.527-1.32.527a15.567 15.567 0 0 1-11.02-4.567 15.567 15.567 0 0 1-4.567-11.02c0-.49.181-.974.527-1.32L3.654 1.328z" />
                          </svg>
                        </span>
                        : 1234567890
                      </h1>
                    </div>
                    <div className="col-6">
                      <h1 className="h6 fw-bold text-muted d-flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-geo-alt-fill me-2 text-secondary"
                            viewBox="0 0 16 16"
                          >
                            <path d="M12 5.318a4 4 0 1 0-8 0 4 4 0 0 0 8 0zm-4 9.025C5.403 11.973 2 8.736 2 5.318 2 2.835 4.24 1 8 1s6 1.835 6 4.318c0 3.418-3.403 6.655-6 9.025z" />
                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                          </svg>
                        </span>
                        : xyz street
                      </h1>
                    </div>
                  </div>
                </div>
                {/* <div>
                <h1 className="mt-5 mb-5 h4 fw-bold text-secondary">
                  Product Reviews
                </h1>
                <div className="row">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="col-6">
                      <div className="d-flex align-items-center mb-3">
                        <div className="progress w-75">
                          <div
                            className="progress-bar bg-warning"
                            role="progressbar"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                        <span className="ms-3 text-secondary">
                          {rating}
                          <svg
                            aria-hidden="true"
                            className="bi bi-star-fill text-warning ms-1"
                            width="20"
                            height="20"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443 4.693 9.566.752 6.276l5.164-.754L8 1.173l2.084 4.349 5.164.754-3.94 3.29 1.08 5.877L8 13.187l-4.389 2.256z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  ))}
                </div> */}
                <h1 className="mt-5 mb-5 h4 fw-bold text-secondary">FAQs</h1>
                <div>
                  {[
                    {
                      question: "Is this place good?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                    {
                      question: "What is the return policy?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                    {
                      question: "How long does travel take?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                    {
                      question: "Is there any discount?",
                      answer:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis venenatis, dui et condimentum cursus, ligula nisl malesuada felis, non ultricies magna nisi eu orci.",
                    },
                  ].map((faq, i) => (
                    <div key={i} className="accordion mb-3" id="faqAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${i}`}
                            aria-expanded="true"
                            aria-controls={`collapse${i}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`collapse${i}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">{faq.answer}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default DetailsPage;

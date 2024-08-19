import React, { useState } from "react";
import {
  Grid,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Pagination,
  Box,
} from "@mui/material";
import { useWishlist } from "./WishlistContext";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import { toast } from "sonner";

export default function FavoritePage() {
  const { wishlist, removeFromWishlist } = useWishlist();
  const handleRemoveFromWishlist = (cardId) => {
    // Logic to remove from wishlist
    removeFromWishlist(cardId);

    toast.error("place has been removed from your favourites!");
  };
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Handle page change
  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  // Paginate the wishlist items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = wishlist.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <Box
        style={{
          backgroundImage:
            'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjk5Ni0wMjEta3JvaXJjdmEuanBn.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // minHeight: "100vh",
        }}
      >
        <Container sx={{ py: 8 }} maxWidth="lg">
          <Typography variant="h4" align="center" gutterBottom>
            Your Favorite Places
          </Typography>
          <Grid container spacing={10}>
            {currentItems.length > 0 ? (
              currentItems.map((card) => (
                <Grid item key={card.id} xs={12} sm={6} md={4} lg={3}>
                  <Card
                    sx={{
                      width: "120%",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={card.img}
                      alt={card.name}
                    />
                    <CardContent>
                      <Typography variant="h5">{card.name}</Typography>
                      <Typography>{card.description}</Typography>
                      <Typography>{card.Location}</Typography>
                    </CardContent>
                    <CardActions>
                      <Link
                        to={`/details/${card.id - 1}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button>View Details</Button>
                      </Link>
                    </CardActions>
                    <CardActions>
                      <Button
                        size="small"
                        color="secondary"
                        onClick={() => handleRemoveFromWishlist(card.id)}
                      >
                        Remove from Favourite
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Typography
                variant="h6"
                align="center"
                style={{ paddingTop: "200px", paddingLeft: "500px" }}
              >
                No items in your favorites.
              </Typography>
            )}
          </Grid>
          {/* Pagination Controls */}
          {wishlist.length > itemsPerPage && (
            <Pagination
              count={Math.ceil(wishlist.length / itemsPerPage)}
              page={currentPage}
              onChange={handlePageChange}
              color="primary"
              sx={{ mt: 4, display: "flex", justifyContent: "center" }}
            />
          )}
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </Box>
    </div>
  );
}

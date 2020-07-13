import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import RecipeItem from "./RecipeItem";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

function RecipeApp() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");

  const editSearch = (newSearch) => {
    setSearch(newSearch);
  };

  useEffect(() => {
    // https://developer.edamam.com/ - where we getting the API
    const APP_ID = "0a6f51df";
    const APP_KEY = "e0dab08929946848bd8a70fa38f7dca3";

    const req = `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const getRecipes = async () => {
      const response = await axios.get(req);
      const data = await response.data;
      setRecipes(data.hits);
    };
    getRecipes();
  }, [search]);

  return (
    <>
      <Navbar editSearch={editSearch} />
      <Container maxWidth='md' style={{ margin: "60px auto" }}>
        <Grid
          direction='row'
          justify='center'
          alignItems='stretch'
          container
          spacing={3}>
          {recipes.map((recipe, i) => (
            <Grid key={i} item xs={12} sm={6}>
              <RecipeItem {...recipe} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default RecipeApp;

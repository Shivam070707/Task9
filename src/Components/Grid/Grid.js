import * as React from "react";
import { Card, Grid } from "@mui/material";
import BasicCard from "/src/Components/Cards/cards.js";
export default function MainGrid() {
  return (
    <Grid lg={12} md={12} sm={12} xs={12} container>
      <Grid lg={4} md={12} sm={12} xs={12}>
        <Card style={{ margin: "10%" }}>
          <BasicCard
            title="Moon Fever"
            txt1=" So what are these strange lights in the sky? Are they aliens invading
      from Mars?Are they coming to start the next ice age?"
            bname1="Lost"
            price="$415"
            bname2="design"
            bname3="Hubble"
          />
        </Card>
      </Grid>
      <Grid lg={4} md={12} sm={12} xs={12}>
        <Card style={{ margin: "10%" }}>
          <BasicCard
            title="Space the final frontier"
            txt1="Usually the astronomy magzine or site will give you a general time and location to be ready to look when the meteroids start to falll"
            bname1="project"
            price="$87"
            bname2="Digital"
          />
        </Card>
      </Grid>
      <Grid lg={4} md={12} sm={12} xs={12}>
        <Card style={{ margin: "10%" }}>
          <BasicCard
            title="Moon Gazing"
            txt1="Comets are big source of meteroids because of the nature of those long tails. A large amount of dust,ice and other space debris."
            bname1="Lost"
            price="$200"
            bname2="design"
          />
        </Card>
      </Grid>
      <Grid lg={12} md={12} sm={12} xs={12}></Grid>
      <Grid lg={12} md={12} sm={12} xs={12}>
        <br />
        Portfolio
        <Card style={{ backgroundColor: "blue" }}>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </Card>
      </Grid>
    </Grid>
  );
}

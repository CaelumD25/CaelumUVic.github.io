import {Container, Box, Typography} from "@mui/material";
import Card from "../components/GeneralCard";
import pacman from "../assets/images/portfolio_pacman.gif";
import housing from "../assets/images/portfolio_housing.png";
import website from "../assets/images/portfolio_website.png";
import canPlan from "../assets/images/portfolio_canplan.png";
import propinquity from "../assets/images/portfolio-propinquity.png"

import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Grid from "@mui/material/Grid2";
import Background from "../components/Background.tsx";

function Projects() {
  return (
    <>
      <CustomNavbar/>
      <Container className={"projects-page"}>
        <Typography variant={"h1"} gutterBottom>
          Projects
        </Typography>
        <hr/>
        <Box sx={{flexGrow: 1}}>
          <Grid container spacing={3}>
            <Grid sx={{marginTop: 0}} size={{xs: 12, md: 6}}>
              <Card
                title={"Propinquity"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectPropinquity.md"}/>
                }
                imgSource={propinquity}
                imgAlt={"Propinquity Logo"}
              />
            </Grid>
            <Grid sx={{marginTop: 0}} size={{xs: 12, md: 6}}>
              <Card
                title={"CanPlan"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectCanPlan.md"}/>
                }
                imgSource={canPlan}
                imgAlt={"Filler image for CanPlan"}
              />
            </Grid>
            <Grid sx={{marginTop: 0}} size={{xs: 12, md: 6}}>
              <Card
                title={"This Website!"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectWebsite.md"}/>
                }
                imgSource={website}
                imgAlt={"Picture representing this website, assets from Nord"}
              />
            </Grid>

            <Grid sx={{marginTop: 0}} size={{xs: 12, md: 6}}>
              <Card
                title={"AI Pacman"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectPacman.md"}/>
                }
                imgSource={pacman}
                imgAlt={
                  "A short git of running the maze with a A* ghost and human player"
                }
              />
            </Grid>

            <Grid sx={{marginTop: 0}} size={{xs: 12, md: 6}}>
              <Card
                title={"Rental Monitor"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectHousing.md"}/>
                }
                imgSource={housing}
                imgAlt={"The picture used to represent the telegram bot"}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Background/>
    </>
  );
}

export default Projects;

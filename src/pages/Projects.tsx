import { Container, Box } from "@mui/material";
import Card from "../components/GeneralCard";
import pacman from "../assets/images/portfolio_pacman.gif";
import housing from "../assets/images/portfolio_housing.png";
import website from "../assets/images/portfolio_website.png";
import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Grid from "@mui/material/Grid2";
import Background from "../components/Background.tsx";

function Projects() {
  return (
    <>
      <CustomNavbar />
      <Container>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid size={{ xs: 12 }}>
              <h1>Projects</h1>
              <hr />
            </Grid>

            <Grid sx={{ marginTop: 0 }} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                title={"This Website!"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectWebsite.md"} />
                }
                imgSource={website}
                imgAlt={"Picture representing this website, assets from Nord"}
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                title={"AI Pacman"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectPacman.md"} />
                }
                imgSource={pacman}
                imgAlt={
                  "A short git of running the maze with a A* ghost and human player"
                }
              />
            </Grid>

            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                title={"Rental Monitor"}
                bodyText={
                  <MarkdownToHTML src={"content/projects/ProjectHousing.md"} />
                }
                imgSource={housing}
                imgAlt={"The picture used to represent the telegram bot"}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Background />
    </>
  );
}

export default Projects;

import {
  Box,
  Container,
  Typography,
  Divider,
  useMediaQuery,
} from "@mui/material";
import it from "../assets/images/experience_IT.png";
import experience2 from "../assets/images/experience_2.png";
import experienceCanAssist from "../assets/images/experience_canassist.png";
import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Background from "../components/Background.tsx";
import Grid from "@mui/material/Grid2";
import {useTheme} from "@mui/material/styles";

function Experience() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <CustomNavbar/>
      <Container className={"experience-page"} sx={{overflowX: "hidden"}}>
        <Typography variant="h1" gutterBottom>
          Experience
        </Typography>
        <Divider sx={{mb: 4}}/>
        <Box>
          <Grid container spacing={3}>
            <Grid size={{xs: 12, md: 9}}>
              <MarkdownToHTML src="content/experience/ExperienceCanAssist.md"/>
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
              <Box
                component="img"
                src={experienceCanAssist}
                sx={{
                  width: "100%",
                  mb: 1.5,
                  display: "block",
                }}
                alt="Picture of the CanAssist and the people I worked with"
                title="Dion Struwig, Dylan Stiles, Patrick Hartmann-Rourke, Caelum Dudek(Me), and Summer Johnson(Not Pictured)"
              />
            </Grid>
          </Grid>
          <Divider sx={{my: 4}}/>

          <Grid container spacing={3}>
            {isMobile ? null : (
              <Grid size={{xs: 12, md: 3}}>
                <Box
                  component="img"
                  src={it}
                  sx={{
                    width: "100%",
                    mb: 1.5,
                    display: "block",
                  }}
                  alt="Picture of me at the RDKB"
                  title="Picture of me at the RDKB"
                />
              </Grid>
            )}
            <Grid size={{xs: 12, md: 9}}>
              <MarkdownToHTML src="content/experience/ExperienceIT.md"/>
            </Grid>
            {isMobile ? (
              <Grid size={{xs: 12, md: 3}}>
                <Box
                  component="img"
                  src={it}
                  sx={{
                    width: "100%",
                    mb: 1.5,
                    display: "block",
                  }}
                  alt="Picture of me at the RDKB"
                  title="Picture of me at the RDKB"
                />
              </Grid>
            ) : null}
          </Grid>

          <Divider sx={{my: 4}}/>

          <Grid container spacing={3}>
            <Grid size={{xs: 12, md: 9}}>
              <MarkdownToHTML src="content/experience/ExperienceVolunteering.md"/>
            </Grid>
            <Grid size={{xs: 12, md: 3}}>
              <Box
                component="img"
                src={experience2}
                sx={{
                  width: "100%",
                  mb: 1.5,
                  display: "block",
                }}
                alt="Picture of the Interior Health"
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Background/>
    </Box>
  );
}

export default Experience;

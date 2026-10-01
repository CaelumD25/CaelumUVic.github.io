import { Container, Box, Typography } from "@mui/material";
import Card from "../components/GeneralCard";
import pacman from "../assets/images/portfolio_pacman.gif";
import housing from "../assets/images/portfolio_housing.png";
import website from "../assets/images/portfolio_website.png";
import canPlan from "../assets/images/portfolio_canplan.png";
import keepMeAccountable from "../assets/images/portfolio_keepmeaccountable.png";

import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Grid from "@mui/material/Grid2";
import Background from "../components/Background.tsx";
import { motion } from "framer-motion";

const projects = [
  {
    title: "KeepMeAccountable",
    src: "content/projects/ProjectKeepMeAccountable.md",
    img: keepMeAccountable,
    alt: "KeepMeAccountable app logo",
    tags: ["Flutter", "Supabase", "Drift", "Firebase", "Provider"],
    accent: "#A3BE8C",
  },
  {
    title: "CanPlan",
    src: "content/projects/ProjectCanPlan.md",
    img: canPlan,
    alt: "CanPlan app",
    tags: ["Flutter", "Dart", "SQLite", "Accessibility"],
    accent: "#88C0D0",
  },
  {
    title: "This Website!",
    src: "content/projects/ProjectWebsite.md",
    img: website,
    alt: "Portfolio website screenshot",
    tags: ["React", "TypeScript", "Vite", "Framer Motion"],
    accent: "#81A1C1",
  },
  {
    title: "AI Pacman",
    src: "content/projects/ProjectPacman.md",
    img: pacman,
    alt: "AI Pacman gameplay gif",
    tags: ["Godot", "Python", "Flask", "A*"],
    accent: "#EBCB8B",
  },
  {
    title: "Rental Monitor",
    src: "content/projects/ProjectHousing.md",
    img: housing,
    alt: "Telegram rental monitor bot",
    tags: ["Python", "Selenium", "Telegram Bot"],
    accent: "#B48EAD",
  },
];

function Projects() {
  return (
    <>
      <CustomNavbar />
      <Container className="projects-page" sx={{ overflowX: "hidden" }}>
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" gutterBottom>
            Projects
          </Typography>
          <Box
            sx={{
              width: "60px",
              height: "2px",
              background: "linear-gradient(to right, #88C0D0, #A3BE8C)",
              borderRadius: "2px",
              mb: 4,
            }}
          />
        </motion.div>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            {projects.map((p, i) => (
              <Grid key={p.title} size={{ xs: 12, md: 6 }}>
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: "100%" }}
                >
                  <Card
                    title={p.title}
                    bodyText={<MarkdownToHTML src={p.src} />}
                    imgSource={p.img}
                    imgAlt={p.alt}
                    tags={p.tags}
                    accentColor={p.accent}
                  />
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
      <Background />
    </>
  );
}

export default Projects;

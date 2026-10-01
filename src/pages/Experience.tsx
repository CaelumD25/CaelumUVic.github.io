import {
  Box,
  Container,
  Typography,
  Divider,
} from "@mui/material";
import it from "../assets/images/experience_IT.png";
import experience2 from "../assets/images/experience_2.png";
import experienceCanAssist from "../assets/images/experience_canassist.png";
import universitySystems from "../assets/images/experience_uvic.jpg";
import MarkdownToHTML from "../components/MarkdownToHTML.tsx";
import CustomNavbar from "../components/CustomNavbar.tsx";
import Background from "../components/Background.tsx";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

interface ExperienceEntryProps {
  markdownSrc: string;
  imgSrc: string;
  imgAlt: string;
  imgTitle?: string;
  imgOnRight?: boolean;
  accentColor?: string;
}

function ExperienceEntry({
  markdownSrc,
  imgSrc,
  imgAlt,
  imgTitle,
  imgOnRight = true,
  accentColor = "#88C0D0",
}: ExperienceEntryProps) {
  const image = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box
        component="img"
        src={imgSrc}
        alt={imgAlt}
        title={imgTitle ?? imgAlt}
        sx={{
          width: "100%",
          borderRadius: "12px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
          display: "block",
          border: `1px solid rgba(76,86,106,0.4)`,
          transition: "transform 0.4s ease, box-shadow 0.4s ease",
          "&:hover": {
            transform: "translateY(-4px) scale(1.01)",
            boxShadow: `0 16px 48px rgba(0,0,0,0.5), 0 0 20px ${accentColor}18`,
          },
        }}
      />
    </motion.div>
  );

  const text = (
    <motion.div
      initial={{ opacity: 0, x: imgOnRight ? -24 : 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <Box
        sx={{
          background: "rgba(59,66,82,0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "14px",
          border: "1px solid rgba(76,86,106,0.35)",
          borderLeft: `3px solid ${accentColor}66`,
          p: { xs: 3, md: 4 },
          boxShadow: "0 4px 24px rgba(0,0,0,0.25)",
        }}
      >
        <MarkdownToHTML src={markdownSrc} />
      </Box>
    </motion.div>
  );

  return (
    <Grid container spacing={3} alignItems="flex-start">
      {imgOnRight ? (
        <>
          <Grid size={{ xs: 12, md: 9 }}>{text}</Grid>
          <Grid size={{ xs: 12, md: 3 }} sx={{ display: { xs: "none", md: "block" } }}>
            {image}
          </Grid>
          {/* Mobile image below */}
          <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
            {image}
          </Grid>
        </>
      ) : (
        <>
          <Grid size={{ xs: 12, md: 3 }} sx={{ display: { xs: "none", md: "block" } }}>
            {image}
          </Grid>
          <Grid size={{ xs: 12, md: 9 }}>{text}</Grid>
          {/* Mobile image below */}
          <Grid size={{ xs: 12 }} sx={{ display: { xs: "block", md: "none" } }}>
            {image}
          </Grid>
        </>
      )}
    </Grid>
  );
}

function Experience() {
  return (
    <Box>
      <CustomNavbar />
      <Container className="experience-page" sx={{ overflowX: "hidden" }}>
        {/* Page header */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" gutterBottom>
            Experience
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

        {/* ── UVic ── */}
        <ExperienceEntry
          markdownSrc="content/experience/ExperienceUVic.md"
          imgSrc={universitySystems}
          imgAlt="University of Victoria - Desktop Support"
          imgOnRight={false}
          accentColor="#88C0D0"
        />

        <Divider sx={{ my: 5, background: "linear-gradient(to right, transparent, rgba(76,86,106,0.5), transparent)", border: "none", height: "1px" }} />

        {/* ── CanAssist ── */}
        <ExperienceEntry
          markdownSrc="content/experience/ExperienceCanAssist.md"
          imgSrc={experienceCanAssist}
          imgAlt="Picture of the CanAssist team"
          imgTitle="Dion Struwig, Dylan Stiles, Patrick Hartmann-Rourke, Caelum Dudek(Me), and Summer Johnson(Not Pictured)"
          imgOnRight={true}
          accentColor="#A3BE8C"
        />

        <Divider sx={{ my: 5, background: "linear-gradient(to right, transparent, rgba(76,86,106,0.5), transparent)", border: "none", height: "1px" }} />

        {/* ── IT Co-op ── */}
        <ExperienceEntry
          markdownSrc="content/experience/ExperienceIT.md"
          imgSrc={it}
          imgAlt="Picture of me at the RDKB"
          imgOnRight={false}
          accentColor="#81A1C1"
        />

        <Divider sx={{ my: 5, background: "linear-gradient(to right, transparent, rgba(76,86,106,0.5), transparent)", border: "none", height: "1px" }} />

        {/* ── Volunteering ── */}
        <ExperienceEntry
          markdownSrc="content/experience/ExperienceVolunteering.md"
          imgSrc={experience2}
          imgAlt="Volunteering - Interior Health"
          imgOnRight={true}
          accentColor="#B48EAD"
        />
      </Container>
      <Background />
    </Box>
  );
}

export default Experience;

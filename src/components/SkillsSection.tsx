import { Box, Typography, Chip } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { motion } from "framer-motion";

interface SkillCategory {
  label: string;
  color: string;
  borderColor: string;
  textColor: string;
  skills: string[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    label: "Languages",
    color: "rgba(163, 190, 140, 0.1)",
    borderColor: "rgba(163, 190, 140, 0.3)",
    textColor: "#A3BE8C",
    skills: [
      "TypeScript", "JavaScript", "Python", "Java", "Kotlin",
      "C", "Dart", "SQL", "Postgres", "Lua", "Q#", "Rust",
    ],
  },
  {
    label: "Web",
    color: "rgba(136, 192, 208, 0.1)",
    borderColor: "rgba(136, 192, 208, 0.3)",
    textColor: "#88C0D0",
    skills: [
      "React", "Vue", "HTML", "CSS", "Bootstrap", "MUI",
      "Flask", "Node.js", "Chrome DevTools",
    ],
  },
  {
    label: "App Development",
    color: "rgba(129, 161, 193, 0.1)",
    borderColor: "rgba(129, 161, 193, 0.3)",
    textColor: "#81A1C1",
    skills: ["Flutter", "React Native", "Qt", "Godot"],
  },
  {
    label: "Testing",
    color: "rgba(180, 142, 173, 0.1)",
    borderColor: "rgba(180, 142, 173, 0.3)",
    textColor: "#B48EAD",
    skills: [
      "Selenium", "Cypress", "Lighthouse", "JUnit", "Sentry",
      "Postman", "Pytest", "Cucumber", "Gherkin",
    ],
  },
  {
    label: "Data & AI",
    color: "rgba(235, 203, 139, 0.1)",
    borderColor: "rgba(235, 203, 139, 0.3)",
    textColor: "#EBCB8B",
    skills: ["NumPy", "Pandas", "Scikit-learn"],
  },
  {
    label: "DevOps & Tools",
    color: "rgba(208, 135, 112, 0.1)",
    borderColor: "rgba(208, 135, 112, 0.3)",
    textColor: "#D08770",
    skills: [
      "Git", "Docker", "GitHub Actions", "Jenkins", "Azure",
      "Jira", "Trello", "Intune", "Jamf", "Entra",
    ],
  },
  {
    label: "Operating Systems",
    color: "rgba(94, 129, 172, 0.1)",
    borderColor: "rgba(94, 129, 172, 0.3)",
    textColor: "#5E81AC",
    skills: ["Linux / Unix", "Windows", "macOS", "Bash", "ZSH", "PowerShell"],
  },
  {
    label: "IDEs & Software",
    color: "rgba(143, 188, 187, 0.1)",
    borderColor: "rgba(143, 188, 187, 0.3)",
    textColor: "#8FBCBB",
    skills: ["JetBrains", "VS Code", "Figma", "Fusion 360", "Google Suite", "Microsoft Office", "Obsidian"],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.07 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

function SkillCategoryCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div variants={cardVariants} style={{ height: "100%" }}>
      <Box
        sx={{
          height: "100%",
          background: "rgba(59, 66, 82, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderRadius: "14px",
          border: "1px solid rgba(76, 86, 106, 0.35)",
          borderTop: `2px solid ${category.borderColor.replace("0.3", "0.6")}`,
          p: 2.5,
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            boxShadow: "0 10px 32px rgba(0,0,0,0.35)",
            borderColor: `${category.borderColor.replace("0.3", "0.5")}`,
          },
        }}
      >
        {/* Category label */}
        <Typography
          sx={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: category.textColor,
            mb: 1.75,
            display: "flex",
            alignItems: "center",
            gap: 1,
            "&::before": {
              content: '""',
              display: "inline-block",
              width: "12px",
              height: "2px",
              background: category.textColor,
              borderRadius: "2px",
              opacity: 0.7,
            },
          }}
        >
          {category.label}
        </Typography>

        {/* Skill chips */}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
          {category.skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.25 }}
            >
              <Chip
                label={skill}
                size="small"
                sx={{
                  bgcolor: category.color,
                  border: `1px solid ${category.borderColor}`,
                  color: category.textColor,
                  fontSize: "0.75rem",
                  height: "24px",
                  letterSpacing: "0.02em",
                  cursor: "default",
                  transition: "background 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
                  "&:hover": {
                    bgcolor: category.color.replace("0.1", "0.22"),
                    borderColor: category.borderColor.replace("0.3", "0.55"),
                    transform: "translateY(-1px)",
                  },
                }}
              />
            </motion.div>
          ))}
        </Box>
      </Box>
    </motion.div>
  );
}

function SkillsSection() {
  return (
    <Box sx={{ mb: 8 }}>
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "1.1rem",
              letterSpacing: "0.12em",
              mb: 0.5,
            }}
          >
            Technical Skills
          </Typography>
          <Box
            sx={{
              width: "48px",
              height: "2px",
              background: "linear-gradient(to right, #88C0D0, #A3BE8C)",
              borderRadius: "2px",
            }}
          />
        </Box>
      </motion.div>

      {/* Grid of categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
      >
        <Grid container spacing={2}>
          {SKILL_CATEGORIES.map((cat) => (
            <Grid key={cat.label} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <SkillCategoryCard category={cat} />
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
}

export default SkillsSection;

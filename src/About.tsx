import { Box, Container, Stack } from "@mui/material";
import { SubTitle } from "./Components/SubTitle";

export const About = () => {
  return (
    <Box sx={{ backgroundColor: "#fafafa" }}>
      <Container>
        <Box>
          <Stack>
            <Box>
              <SubTitle title={"About Me"} />
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

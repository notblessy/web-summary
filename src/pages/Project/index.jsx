import { Box, Container, Grid } from "@mantine/core";

import CustomFooter from "../../components/CustomFooter";
import CustomCard from "../../components/CustomCard";
import { projects } from "./projects";

export default function Project() {
  return (
    <>
      <Box style={{ position: 'relative', height: '100%', margin: '0 auto', bottom: 200 }}>
        <Container style={{ height: '100%' }}>
          <Grid mb={70}>
            {
              projects.map((p) => {

                return (
                  <Grid.Col key={p.id} span={{ base: 12, xs: 12, sm: 12, md: 4, lg: 4 }}>
                    <CustomCard
                      name={p.name}
                      label={p.label}
                      link={p.link}
                      description={p.description}
                      picture={p.picture}
                    />
                  </Grid.Col>
                )
              })
            }
          </Grid>
          <CustomFooter />
        </Container>
      </Box>
    </>
  );
}
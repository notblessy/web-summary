import { Anchor, Avatar, Box, Container, Divider, Grid, Group, Text, Title } from "@mantine/core";
import { IconLink, IconMail } from "@tabler/icons-react";

import Skill from "../../components/Skill";
import WorkTimeline from "../../components/WorkTimeline";
import CustomFooter from "../../components/CustomFooter";

export default function Home() {
  return (
    <>
      <Box style={{ position: 'relative', height: '100%', margin: '0 auto', bottom: 200 }}>
        <Container style={{ height: '100%' }}>
          <Grid>
            <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 5, lg: 5 }}>
              <Box style={{ background: "#FFF", padding: '20px 10px', margin: '5px', boxShadow: "0px 0px 2px #aaaaaa" }}>
                <Avatar
                  style={{ margin: '0 auto' }}
                  size={150}
                  src="profile.jpeg"
                  alt="it's me"
                />
                <Title order={5} style={{ textAlign: 'center', margin: '10px 0 0' }}>I Komang Frederich Blessy</Title>
                <Text size='sm' c="dimmed" style={{ textAlign: 'center' }}>Backend Engineer</Text>
                <Divider mt="xl" my='sm' label="CONTACT" labelPosition="left" />
                <Box>
                  <Group style={{ padding: '5px 10px' }}>
                    <IconMail size={15} />
                    <Text size='sm' style={{ color: '#2a2a2a' }}>frederichblessy@gmail.com</Text>
                  </Group>
                  <Group style={{ padding: '5px 10px' }}>
                    <IconLink size={15} />
                    <Anchor size='sm' style={{ color: '#2a2a2a', fontStyle: 'italic' }} href="https://github.com/notblessy" target="_blank">github.com/notblessy</Anchor>
                  </Group>
                  <Group style={{ padding: '5px 10px' }}>
                    <IconLink size={15} />
                    <Anchor size='sm' style={{ color: '#2a2a2a', fontStyle: 'italic' }} href="https://medium.com/@frederich" target="_blank">medium.com/@frederich</Anchor>
                  </Group>
                </Box>
                <Divider mt="xl" my='sm' label="EDUCATION" labelPosition="left" />
                <Box>
                  <Box mb={10} style={{ padding: '0 10px' }}>
                    <Text size='sm' fw={500}>Software Engineering</Text>
                    <Text size='xs' c="dimmed">{'(2013 - 2016)'} Wira Harapan Vocational School</Text>
                  </Box>
                  <Box style={{ padding: '0 10px' }}>
                    <Text size='sm' fw={500}>Bachelor of Applied Arts</Text>
                    <Text size='xs' c="dimmed">{'(2016 - 2020)'} Indonesian Institute of the Arts</Text>
                  </Box>
                </Box>
                <Divider mt="xl" my='sm' label="SKILLS" labelPosition="left" />
                <Box style={{ padding: '0 10px' }}>
                  <Skill />
                </Box>
                <Box style={{ padding: '0 10px' }}>
                  {/* <Skill /> */}
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col span={{ base: 12, xs: 12, sm: 12, md: 7, lg: 7 }}>
              <Box mb={40} style={{ background: "#FFF", padding: '20px 10px', margin: '5px', boxShadow: "0px 0px 2px #aaaaaa" }}>
                <Box px={20} mb={20}>
                  <Title order={5} mb={10}>Summary</Title>
                  <Text size='xs' c='dimmed' py={5}>An engineer who is passionate about developing backend systems using Golang, consistently prioritizing the essential elements of scalability, reliability, and maintainability.</Text>
                  <Text size='xs' c='dimmed' py={5}>I embarked on my career as a Backend Engineer in May 2020, driven by a profound passion for programming, with a particular focus on backend development. Despite having studied Film and Television at the Indonesian Institute of the Arts, I have actively pursued knowledge and experience in software engineering.</Text>
                  <Text size='xs' c='dimmed' py={5}>In addition to mastering backend technologies, I am enthusiastic about expanding my skills in web frontend, mobile app development, and the intricacies of managing web servers. My journey in the realm of software engineering continues to be an exciting and evolving adventure.</Text>
                </Box>
                <Box px={20} mb={40}>
                  <Title order={5} mb={20}>Timeline</Title>
                  <Box>
                    <WorkTimeline />
                  </Box>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
          <CustomFooter />
        </Container>
      </Box >
    </>
  );
}
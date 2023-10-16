import { Box, Container, Group, Image, Text, UnstyledButton } from "@mantine/core";
import { IconCode } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";


const CustomHeader = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box style={{ width: '100%', position: 'absolute', top: 0 }}>
        <Container>
          <Group py={20}>
            <UnstyledButton onClick={() => navigate("/")}>
              <IconCode style={{ color: '#f2f2f2' }} />
            </UnstyledButton>
            <UnstyledButton onClick={() => navigate("/")}>
              <Text style={{ color: '#f2f2f2' }}>Home</Text>
            </UnstyledButton>
            <UnstyledButton onClick={() => navigate("/projects")}>
              <Text style={{ color: '#f2f2f2' }}>Projects</Text>
            </UnstyledButton>
          </Group>
        </Container>
      </Box>
      <Image
        radius="md"
        h={400}
        src="bg.png"
      />
    </>
  )

}

export default CustomHeader;
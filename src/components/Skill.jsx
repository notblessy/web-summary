import { Box, Chip, Group, Text } from "@mantine/core";

const Skill = () => {
  return (
    <>
      <Box mb={20}>
        <Box style={{ padding: '10px 0' }}>
          <Text fw={500} size='sm' style={{ color: '#2a2a2a' }}>Golang</Text>
        </Box>
        <Group gap={8}>
          <Chip checked={true} variant="light" size="xs" color="cyan">echo</Chip>
          <Chip checked={true} variant="light" size="xs" color="cyan">gin</Chip>
          <Chip checked={true} variant="light" size="xs" color="cyan">fiber</Chip>
          <Chip checked={true} variant="light" size="xs" color="cyan">gorm</Chip>
          <Chip checked={true} variant="light" size="xs" color="cyan">sqlx</Chip>
        </Group>
      </Box>
      <Box mb={20}>
        <Box style={{ padding: '10px 0' }}>
          <Text fw={500} size='sm' style={{ color: '#2a2a2a' }}>Javascript</Text>
        </Box>
        <Group gap={8}>
          <Chip checked={true} variant="light" size="xs" color="yellow">node</Chip>
          <Chip checked={true} variant="light" size="xs" color="yellow">ts</Chip>
          <Chip checked={true} variant="light" size="xs" color="yellow">express</Chip>
          <Chip checked={true} variant="light" size="xs" color="yellow">react</Chip>
          <Chip checked={true} variant="light" size="xs" color="yellow">react native</Chip>
        </Group>
      </Box>
      <Box mb={20}>
        <Box style={{ padding: '10px 0' }}>
          <Text fw={500} size='sm' style={{ color: '#2a2a2a' }}>Database Management</Text>
        </Box>
        <Group gap={8}>
          <Chip checked={true} variant="light" size="xs" color="orange">postgresql</Chip>
          <Chip checked={true} variant="light" size="xs" color="orange">cockroachdb</Chip>
          <Chip checked={true} variant="light" size="xs" color="orange">mysql</Chip>
          <Chip checked={true} variant="light" size="xs" color="orange">elasticsearch</Chip>
          <Chip checked={true} variant="light" size="xs" color="orange">mongodb</Chip>
          <Chip checked={true} variant="light" size="xs" color="orange">redis</Chip>
        </Group>
      </Box>
      <Box mb={20}>
        <Box style={{ padding: '10px 0' }}>
          <Text fw={500} size='sm' style={{ color: '#2a2a2a' }}>Queue, Message & Background Process</Text>
        </Box>
        <Group gap={8}>
          <Chip checked={true} variant="light" size="xs" color="red">NATS</Chip>
          <Chip checked={true} variant="light" size="xs" color="red">rabbitMQ</Chip>
          <Chip checked={true} variant="light" size="xs" color="red">asynq</Chip>
          <Chip checked={true} variant="light" size="xs" color="red">google pubsub</Chip>
          <Chip checked={true} variant="light" size="xs" color="red">kafka</Chip>
        </Group>
      </Box>
      <Box mb={20}>
        <Box style={{ padding: '10px 0' }}>
          <Text fw={500} size='sm' style={{ color: '#2a2a2a' }}>Server & Deployment</Text>
        </Box>
        <Group gap={8}>
          <Chip checked={true} variant="light" size="xs" color="green">GCP</Chip>
          <Chip checked={true} variant="light" size="xs" color="green">AWS</Chip>
          <Chip checked={true} variant="light" size="xs" color="green">Docker</Chip>
          <Chip checked={true} variant="light" size="xs" color="green">NGINX RTMP</Chip>
          <Chip checked={true} variant="light" size="xs" color="green">Git</Chip>
        </Group>
      </Box>
    </>
  )
}

export default Skill;
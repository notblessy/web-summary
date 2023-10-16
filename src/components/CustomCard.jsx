/* eslint-disable react/prop-types */
import { Anchor, Badge, Button, Card, Image, Text } from "@mantine/core";

const CustomCard = ({ name, label, link, description, picture }) => {
  return (
    <>
      <Anchor underline="none" href={link} target="_blank">
        <Card shadow="sm" padding="lg" radius="md" withBorder style={{ background: '#fdfdfd', height: '350px' }}>
          <Card.Section>
            <Badge style={{ position: 'absolute' }} m={10} size="xs" right={0} color="blue">{label}</Badge>
            <Image
              src={picture}
              height={160}
              alt={name}
            />

          </Card.Section>
          <Text pt={10} fw={500}>{name}</Text>
          <Text size="sm" c="dimmed">
            {description.length > 127 ? `${description.substring(0, 127)} ...` : description}
          </Text>

          <Button variant="light" color="blue" fullWidth mt="md" radius="md">
            Visit
          </Button>
        </Card>
      </Anchor>
    </>
  )

}

export default CustomCard;
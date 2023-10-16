import { Avatar, Group, List, Text, Timeline, Title } from "@mantine/core";
import { timelines } from "./timelines";


const WorkTimeline = () => {
  return (
    <>
      <Timeline active={-1} bulletSize={34} lineWidth={2}>
        {
          timelines.map((t) => {
            return (
              <Timeline.Item key={t.id} bullet={<Avatar src={t.icon} size={30} />}>
                <Group justify="space-between">
                  <Title order={5} c='#2a2a2a'>{t.title}</Title>
                  <Text size="xs" mt={4}>{t.when}</Text>
                </Group>
                <Text size="sm" c='#2a2a2a' fw={500}>{t.company}</Text>
                <List size="xs" c='dimmed'>
                  {
                    t.experiences.map((e) => {
                      return (
                        <List.Item mt={0} mb={5} key={e.id} style={{ width: '85%' }}>{e.description}</List.Item>
                      )
                    })
                  }
                </List>
              </Timeline.Item>
            )
          })
        }


      </Timeline>
    </>
  )
}

export default WorkTimeline;
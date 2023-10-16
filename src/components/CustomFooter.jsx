import { Box, Grid, Group, Text } from "@mantine/core";


const CustomFooter = () => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Box style={{ background: '#FFFFFF', position: 'absolute', width: '100%', borderTop: '1px solid #EEEEEE', left: 0 }}>
        <Grid>
          <Grid.Col span={12} style={{ borderBottom: '1px solid #EEEEEE' }}>
            <Group style={{ padding: '20px' }}>
              <Text fw={500} size="14px">
                © {currentYear} keep_going. All rights reserved.
              </Text>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>
    </>
  )

}

export default CustomFooter;
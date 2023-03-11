import { Center, Container, Flex, Grid, Box, Group, Anchor, SimpleGrid, Stack, Text, Title, Paper, CheckIcon, ScrollArea, List, Kbd } from '@mantine/core'
import NavTabs from '../../components/NavTabs/NavTabs';
import { MdCheckCircle, MdDataExploration, MdOutlinePreview, MdOutlineTimer, MdPendingActions } from 'react-icons/md'
import PieChart from '../../components/PieChart/PieChart';

function Summary() {

  const data = [
    {
      "id": "rejected",
      "label": "rejected",
      "value": 369,
      "color": "hsl(267, 70%, 50%)"
    },
    {
      "id": "to do",
      "label": "to do",
      "value": 254,
      "color": "hsl(225, 70%, 50%)"
    },
    {
      "id": "done",
      "label": "done",
      "value": 502,
      "color": "hsl(101, 70%, 50%)"
    },
    {
      "id": "purchased",
      "label": "purchased",
      "value": 564,
      "color": "hsl(238, 70%, 50%)"
    },
    {
      "id": "pending",
      "label": "pending",
      "value": 587,
      "color": "hsl(189, 70%, 50%)"
    }
  ]

  return (
    <Container size="lg" px="md">
      <Group>
        <Grid>
          <Grid.Col span={3} style={{width: "235px"}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdCheckCircle size={40} color="rgb(20, 191, 58)" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="lg" fw={600}>3 done</Text>
                  <Text>in last 7 days</Text>
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3} style={{width: "235px"}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdDataExploration size={40} color="blue" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="md" fw={600}>7 progressing</Text>
                  <Text>at current time</Text>
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3} style={{width: "235px"}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdPendingActions size={40} color="#5E6C84" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="lg" fw={600}>17 pending</Text>
                  <Text>in next 7 days</Text>
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3} style={{width: "235px"}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdOutlinePreview size={40} color="rgb(20, 191, 58)" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="lg" fw={600}>34 reviewed</Text>
                  <Text>in last 7 days</Text>
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
        </Grid>
      </Group>
      <Box mt="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Paper shadow="lg" px="lg" py="md" withBorder sx={{width: "454px", height: "400px"}}>
            <Container size="xl" sx={{height: "100%"}}>
              <div>
                <Title mb="xs" color="#172B4D" fz={15}>Status overview</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  {/* <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor> */}
                </Text>
              </div>
              <Flex justify="center" align="center" className='chart-wrapper' sx={{height: "100%", marginTop: "-30px"}}>
                <div className='chart' style={{width: "100%", height: "100%"}}>
                  <PieChart data={data} />
                </div>
                {/* <div className='chart-breakdown'>Chart test breakdown</div> */}
              </Flex>
            </Container>
          </Paper>
          <Paper shadow="lg" px="md" py="sm" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title mb="xs" color="#172B4D" fz={15}>Recent activity</Title>
                <Text>Stay up to date with what's happening across the project.</Text>
              </div>
              <div>
                <Container>
                  <ScrollArea type="hover" scrollbarSize={12} style={{ height: 250 }}>
                    <List>
                      <List.Item>
                        {/* <Text color="blue">Asaad</Text> */}
                        <div>
                          {/* <span>test</span> */}
                          <Text> <Kbd color='green'>Admin</Kbd> has changed .</Text>
                        </div>
                      </List.Item>
                      <List.Item>
                        <Text color="blue">Asaad</Text>
                        <Text>has changed project settings to admins only.</Text>
                      </List.Item>
                      <List.Item>
                        <Text color="blue">Asaad</Text>
                        <Text>has changed project settings to admins only.</Text>
                      </List.Item>
                      <List.Item>
                        <Text color="blue">Asaad</Text>
                        <Text>has changed project settings to admins only.</Text>
                      </List.Item>
                      <List.Item>
                        <Text color="blue">Asaad</Text>
                        <Text>has changed project settings to admins only.</Text>
                      </List.Item>
                      <List.Item>
                        <Text color="blue">Asaad</Text>
                        <Text>has changed project settings to admins only.</Text>
                      </List.Item>
                    </List>
                  </ScrollArea>
                </Container>
              </div>
            </Container>
          </Paper>
        </SimpleGrid>
      </Box>
      <Box mt="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Paper shadow="lg" px="lg" py="md" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title mb="xs" color="#172B4D" fz={15}>Priority breakdown</Title>
                <Text>
                  Get a holistic view of how work is being prioritized within your project. To
                  <br />
                  check if the team's focusing on the right work, <Anchor href="#">go to the list view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
          <Paper shadow="lg" px="md" py="sm" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title mb="xs" color="#172B4D" fz={15}>Types of work</Title>
                <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
        </SimpleGrid>
      </Box>
      <Box mt="xl">
        <SimpleGrid cols={2} spacing="lg">
          <Paper shadow="lg" px="lg" py="md" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title mb="xs" color="#172B4D" fz={15}>Team workload</Title>
                <Text>
                Assign and share the workload in your team. <Anchor href="#">Go to the list view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
          <Paper shadow="lg" px="md" py="sm" withBorder sx={{width: "454px", height: "400px"}}>
            <Container>
              <div>
                <Title mb="xs">Status overview</Title>
5               <Text>
                  View the progress of your project based on the status of each item. 
                  <br />
                  For more details, <Anchor href="#">go to the board view.</Anchor>
                </Text>
              </div>
              <div className='chart-wrapper'>
                <Group>
                  <div className='chart'>Chart</div>
                  <div className='chart-breakdown'>Chart breakdown</div>
                </Group>
              </div>
            </Container>
          </Paper>
        </SimpleGrid>
      </Box>
    </Container>
  )
}

export default Summary
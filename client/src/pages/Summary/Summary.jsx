import { 
  Container, 
  Flex, 
  Grid, 
  Box, 
  Group, 
  Anchor, 
  SimpleGrid, 
  Text, 
  Title, 
  Paper, 
  ScrollArea, 
  List, 
  Kbd, 
  RingProgress, 
  Center,
  Progress,
  Button,
  Skeleton
} from '@mantine/core'
import NavTabs from '../../components/NavTabs/NavTabs';
import { MdCheckCircle, MdDataExploration, MdOutlinePreview, MdOutlineTimer, MdPendingActions } from 'react-icons/md'
import PieChart from '../../components/PieChart/PieChart';
import axios from 'axios';
import {useState, useEffect} from 'react';

function Summary() {
  const [tasks, setTasks] = useState({})
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(0)
  const [rejected, setRejected] = useState(0)
  const [pending, setPending] = useState(0)
  const [todo, setTodo] = useState(0)

  // let pending;

  let data = [
    {
      "id": "rejected",
      "label": "rejected",
      "value": todo.length,
      "color": "hsl(267, 70%, 50%)"
    },
    {
      "id": "to do",
      "label": "to do",
      "value": pending.length,
      "color": "hsl(225, 70%, 50%)"
    },
    {
      "id": "done",
      "label": "done",
      "value": done.length - 3,
      "color": "hsl(101, 70%, 50%)"
    },
    {
      "id": "purchased",
      "label": "purchased",
      "value": 2,
      "color": "hsl(238, 70%, 50%)"
    },
    {
      "id": "pending",
      "label": "pending",
      "value": pending.length,
      "color": "hsl(189, 70%, 50%)"
    }
  ]
  
  


  useEffect(() => {
    const baseUri = 'http://localhost:5000/tasks/'
    setLoading(true)
    const req = axios.get(baseUri).then((res) => {
      // console.log(res.data)
      // setTasks(res.data)
      setTasks([res.data][0])
      // const bitti = [res.data][0].filter((x) => x.status == 'done');
      setPending([res.data][0].filter((x) => x.status == 'pending'));
      setDone([res.data][0].filter((x) => x.status == 'done'));
      setRejected([res.data][0].filter((x) => x.status == 'rejected'));
      setTodo([res.data][0].filter((x) => x.status == 'to-do'));
      // setTasks(bitti)

      // data = [
      //   {
      //     "id": "rejected",
      //     "label": "rejected",
      //     "value": pending,
      //     "color": "hsl(267, 70%, 50%)"
      //   },
      //   {
      //     "id": "to do",
      //     "label": "to do",
      //     "value": 13,
      //     "color": "hsl(225, 70%, 50%)"
      //   },
      //   {
      //     "id": "done",
      //     "label": "done",
      //     "value": bitti,
      //     "color": "hsl(101, 70%, 50%)"
      //   },
      //   {
      //     "id": "purchased",
      //     "label": "purchased",
      //     "value": 6,
      //     "color": "hsl(238, 70%, 50%)"
      //   },
      //   {
      //     "id": "pending",
      //     "label": "pending",
      //     "value": 3,
      //     "color": "hsl(189, 70%, 50%)"
      //   }
      // ]
      setLoading(false)
      console.log(tasks)
      console.log(pending)
      console.log(rejected)
      console.log(done)
    })
  }, [])

  let doneTasks;
  const filterTasks = () => {
    doneTasks = tasks.filter((task) => task.status == "done");
    console.log(doneTasks)

  }

  return (
    <Container size="lg" px="md">
      
      <Group>
        <Grid>
          <p></p>
          <Grid.Col span={3} sx={{width: "235px", ":hover": {transform: "scale(1.03)", transition: "all 0.4s ease-in-out"}}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdCheckCircle size={40} color="rgb(20, 191, 58)" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  {tasks.status == "done" && <Text>{tasks.length}</Text>}
                 
                  {loading ? <Skeleton height={12} animate radius="xl" /> : 
                  <Text color="#5E6C84" fz="lg" onLoad={filterTasks} fw={600}>{done.length} done</Text>
                  }
                  <Text>in last 7 days</Text>
                  {/* <Button onClick={filterTasks}>Filter</Button> */}
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3} sx={{width: "235px", ":hover": {transform: "scale(1.03)", transition: "all 0.4s ease-in-out"}}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdDataExploration size={40} color="blue" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="md" fw={600}>{todo.length} progressing</Text>
                  <Text>at current time</Text>
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3} sx={{width: "235px", ":hover": {transform: "scale(1.03)", transition: "all 0.4s ease-in-out"}}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdPendingActions size={40} color="#5E6C84" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="lg" fw={600}>{pending.length} pending</Text>
                  <Text>in next 7 days</Text>
                </div>
              </Flex>
              </Container>
            </Paper>
          </Grid.Col>
          <Grid.Col span={3} sx={{width: "235px", ":hover": {transform: "scale(1.03)", transition: "all 0.4s ease-in-out"}}}>
            <Paper shadow="lg" px="xs" py="xl" withBorder>
              <Container height={400}>
              <Flex justify="space-evenly" align="center">
                <MdOutlinePreview size={40} color="rgb(20, 191, 58)" />
                <div style={{color: "#5E6C84", marginLeft: "4px"}}>
                  <Text color="#5E6C84" fz="lg" fw={600}>{tasks.length} reviewed</Text>
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
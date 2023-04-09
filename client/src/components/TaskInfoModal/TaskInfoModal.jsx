  import React, { useState, useEffect } from 'react'
import { Accordion, ActionIcon, Avatar, Box, Button, Center, Container, Flex, Grid, Group, Menu, Modal, ScrollArea, Select, Skeleton, Stack, Text, Textarea, Tabs, Title, FileButton, Card, Image } from '@mantine/core'
import { DatePicker } from '@mantine/dates';
import { MdApproval, MdArrowDropDown, MdAttachFile, MdCardTravel, MdDone, MdLink, MdOutlineAttachMoney, MdOutlineMessage, MdOutlineShortText, MdRedo, MdRemoveRedEye, MdSettings, MdShare, MdSort, MdSortByAlpha, MdThumbUp } from 'react-icons/md'
import axios from 'axios';
import moment from 'moment';
import CreateTaskModal from '../TaskModal/TaskModal';
import Editor from '../TextEditor/TextEditor';

function TaskInfoModal({opened, setOpened, tasks, id}) {

    const [task, setTask] = useState({})
    const [loading, setLoading] = useState(false);
    const [isLiked, setIsLiked] = useState(true);
    const [file, setFile] = useState('');

    useEffect(() => {
      const baseUri = `http://localhost:5001/task/${id}`
      console.log(id)

      const req = axios.get(baseUri).then((res) => {
        console.log(req)
        setLoading(!loading)
        console.log(res.data)
        setTask(res.data)
        setLoading(false)
        console.log(task)
      })
    }, [id])

    const covertDate = (date) => {
      return date.toLocaleDateString();
    }

    const handleLiked = (e) => {
      setIsLiked(!isLiked)
    }


    function handlefileChange(event) {
      setFile(event.target.files[0])
      console.log(file)
    }

    const handleUpload = (e) => {
      e.preventDefault()
      // const uploadUri = `http://localhost:5000/upload`
      // axios.post(uploadUri, file).then((res) => {
      //   console.log(res)
      // }).catch(err => console.log(err))
      fetch("http://localhost:5000/upload", {
        method: 'POST',
        body: file,
      }).then((res) => {
        console.log(res.data)
      })
    }

  return (
    <Modal 
    opened={opened} 
    onClose={() => setOpened(false)}
    size="1280px" 
    title="task info"
    overlayOpacity={0.55}
    overlayBlur={4}
    transitionDuration={0}
    transitionTimingFunction="ease"
    centered
    >
    {/* {tasks[0]?.map((task, key) => (
      <Text key={key}>{task.title}</Text>
    ))} */}
    <Container size="xl">
      {/* Top control */}
      <Flex justify="space-between" mb="lg">
        <Flex>
          <Center>
            <MdOutlineAttachMoney color='green' size={21} />
            <Text>PET-12</Text>
          </Center>
        </Flex>
        <Group>
          <ActionIcon>
            <MdThumbUp size={21} color={ isLiked ? "blue" : ''} onClick={handleLiked} />
          </ActionIcon>
          <ActionIcon>
            <MdShare  size={21}/>
          </ActionIcon>
          <ActionIcon>
            <MdRemoveRedEye size={21} />
          </ActionIcon>
          <ActionIcon>
            <MdOutlineShortText size={21} />
          </ActionIcon>
        </Group>
      </Flex>
      <main>
        <Box>
          <Grid pb="3rem">
            {/* left */}
            <Grid.Col span={8}>
              {loading? 
              <Skeleton visible={loading} animate />
              :
                <Text size={23} fw={600}>{task.title}</Text>
              }
              <form encType='multipart/form-data' onSubmit={handleUpload}>
                <input type="file" name="image" onChange={handlefileChange} />
                <button type="submit">Submit</button>
              </form>
              <Textarea
              label="Description"
              placeholder="add a description"
              defaultValue={task.description}
              mb="md"
              />
              {/* <Text fz={16} mb="xs">Activity</Text> */}
              <Title order={6} mb="xs">Activity</Title>
              <Flex justify="space-between">
                <Box mb="md">
                  <Text>Show:</Text>
                  <Box>
                    {/* <Button variant="light" compact color="gray">All</Button>
                    <Button variant="dark" compact color="gray">Comments</Button>
                    <Button variant="light" compact color="gray">History</Button>
                    <Button variant="light" compact color="gray">Work log</Button> */}
                    <Tabs variant="pills" defaultValue="comment">
                      <Tabs.List>
                        <Tabs.Tab value="all" >All</Tabs.Tab>
                        <Tabs.Tab value="comment" >Comments</Tabs.Tab>
                        <Tabs.Tab value="history" >History</Tabs.Tab>
                        <Tabs.Tab value="work-log" >Work log</Tabs.Tab>
                      </Tabs.List>

                      <Tabs.Panel value="all" pt="xs">
                        {/* Gallery tab content */}
                        {/* <CreateTaskModal /> */}
                      </Tabs.Panel>

                      <Tabs.Panel value="comment" pt="xs">
                        {/* Comments tab content */}
                        <Flex justify="start" ml={50}>
                        {/* avatar */}
                          <Center mr="sm">
                            <Avatar color="green" size={48} radius="xl">ES</Avatar>
                          </Center>
                        {/* inpur */}
                          {/* <Textarea
                          placeholder='add a comment'
                          variant='filled'
                          size="xl"
                          autosize
                          sx={{width: "100%"}}
                          /> */}
                          <Editor />
                      </Flex>
                      </Tabs.Panel>

                      <Tabs.Panel value="history" pt="xs">
                        {/* History tab content */}
                        <Editor />
                      </Tabs.Panel>
                      <Tabs.Panel value="work-log" pt="xs">
                        Work log tab
                      </Tabs.Panel>
                    </Tabs>
                    </Box>
                </Box>
                <Button variant="subtle" compact rightIcon={<MdSort size={20}/>}>Newest first</Button>
              </Flex>
            </Grid.Col>
            {/* right */}
            <Grid.Col span={4}>
              <Menu mb="md">
                <Menu.Target>
                  <Button variant='light' color="gray" rightIcon={<MdArrowDropDown size={22} />}>Toggle</Button>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Label>Application</Menu.Label>
                  <Menu.Item icon={<MdApproval size={14} />}>Approved</Menu.Item>
                  <Menu.Item icon={<MdCardTravel size={14} />}>Purchased</Menu.Item>
                  <Menu.Item icon={<MdRedo size={14} />}>Rejected</Menu.Item>
                  <Menu.Item icon={<MdDone size={14} />}>Done</Menu.Item>
                </Menu.Dropdown>
              </Menu>
                <Accordion defaultValue="details" sx={{border: "1px solid #DFE1E6"}}>
                  <Accordion.Item value="details">
                    <Accordion.Control>Details</Accordion.Control>
                    <Accordion.Panel>
                      <Box>
                        <Stack>
                        <Flex justify="space-between">
                            <Center>
                              <Text fz={14}>Type</Text>
                            </Center>
                            <Select
                              placeholder="Select type"
                              data={[
                                { value: 'react', label: 'mining'},
                                { value: 'ng', label: 'agriculture' },
                                { value: 'svelte', label: 'investment' },
                                { value: 'vue', label: 'black sand' },
                              ]}
                            />
                            </Flex>
                          <Flex justify="space-between">
                            <Center>
                              <Text fz={14}>Status</Text>
                            </Center>
                            <Select
                              placeholder={task.status}
                              defaultValue="pending"
                              data={[
                                { value: 'react', label: 'done', },
                                { value: 'ng', label: 'pending' },
                                { value: 'svelte', label: 'in-progress' },
                                { value: 'vue', label: 'rejected' },
                              ]}
                            />
                            </Flex>
                          <Flex justify="space-between">
                            <Center>
                              <Text fz={14}>Reporter</Text>
                            </Center>
                            <Select
                              placeholder={task.assignee}
                              data={[
                                { value: 'react', label: 'Asaad' },
                                { value: 'ng', label: 'Admin' },
                                { value: 'svelte', label: 'Sharaf' },
                                { value: 'vue', label: 'Mustafa' },
                              ]}
                            />
                          </Flex>
                          <Flex justify="space-between">
                            <Center>
                              <Text fz={14}>Priority</Text>
                            </Center>
                            <Select
                              placeholder={task.priority}
                              data={[
                                { value: 'react', label: 'low', image: 'https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png' },
                                { value: 'ng', label: 'medium' },
                                { value: 'svelte', label: 'high' },
                                { value: 'vue', label: 'highest' },
                              ]}
                            />
                          </Flex>
                          <Flex justify="space-between">
                            <Center>
                              <Text fz={14}>Due date</Text>
                            </Center>
                            <DatePicker
                            allowFreeInput
                            placeholder={moment(task.date).format('DD MMM YYYY')}
                            sx={{width: "200px"}} 
                            />
                            </Flex>
                          <Flex justify="space-between">
                            <Center>
                              <Text fz={14}>Start date</Text>
                            </Center>
                            <DatePicker 
                            sx={{width: "200px"}}
                            allowFreeInput
                            placeholder={moment(task.createdAt).format('DD MMM YYYY')}
                            // placeholder={"default " + new Date().toLocaleDateString('en-uk', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} 
                            />
                            </Flex>
                        </Stack>
                      </Box>
                    </Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              <Box mt="xl">
                <Text fz={14} color="gray">Created {moment(task.createdAt).format('LLL')}</Text>
                <Text fz={14} color="gray">Updated {moment(task.updatedAt).format('LLL')}</Text>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </main>
    </Container>
    </Modal>
  )
}

export default TaskInfoModal
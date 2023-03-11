import { useEffect, useState } from 'react';
import { Box, Button, Center, Container, Flex, Group, Menu, Modal, Paper, Select, Text, Textarea, TextInput } from '@mantine/core'
import { Link, useParams } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { MdAddTask, MdCopyAll, MdDelete, MdEdit, MdHorizontalSplit, MdMonetizationOn, MdMoreVert, MdOutlineAccessTime, MdOutlineAutoFixHigh } from 'react-icons/md'
// import CustomEditor from '../../components/TextEditor/TextEditor';
// import TaskModal from '../../components/TaskModal/TaskModal';
import axios from 'axios'

function Board() {
  const [opened, setOpened] = useState(false);
  const {projectId, taskId} = useParams();

  // const data = fetch("http://localhost:8080/tasks").then((res) => {
  //   console.log(res)
  // })

  useEffect(() => {
    const tasks = axios.get("http://localhost:8080/tasks").then((res) => {
      console.log(res.data)
    })
  }, [])

  return (
    <div>
      {/* filter */}
      <Flex justify="space-between" px={29}>
        <Text>Filter goes here</Text>
        <Button color="lime" variant="gradient" leftIcon={<MdAddTask />} onClick={() => setOpened(true)}>Create Task</Button>
      </Flex>
      <DragDropContext>
        <Container fullWidth p="md" component={Flex}>
          <Paper shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "356px", background: "rgb(244, 245, 247)"}}>
            {/* card header */}
            <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
              <Center>
                {/* <MdMoreVert />
                <MdMoreVert /> */}
                <Text size={12} fw={400} transform="uppercase" 
                  sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                  To do&nbsp;
                  <span>5</span>
                </Text>
              </Center>
              <Center>
                {/* <Button size='xs' color="#42526e" width="24px" height="24px" radius="xs">...</Button> */}
                <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button px="xs" color="green" variant="gradient" sx={{height: "30px"}}><MdOutlineAutoFixHigh /></Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item onClick={() => alert("hi")} icon={<MdEdit />}>Edit</Menu.Item>
                    <Menu.Item icon={<MdCopyAll />}>Copy</Menu.Item>
                    <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Center>
            </Flex>
            {/* actual card */}
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="#fcab00" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="green" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Paper>
          <Paper shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "356px", background: "rgb(244, 245, 247)"}}>
            {/* card header */}
            <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
              <Center>
                <Text size={12} fw={400} transform="uppercase" 
                  sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                  In Progress&nbsp;
                  <span>5</span>
                </Text>
              </Center>
              <Center>
                {/* <Button size='xs' color="#42526e">...</Button> */}
                 <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button px="xs" color="green" variant="gradient" sx={{height: "30px"}}><MdOutlineAutoFixHigh /></Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<MdEdit />}>Edit</Menu.Item>
                    <Menu.Item icon={<MdCopyAll />}>Copy</Menu.Item>
                    <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Center>
            </Flex>
            {/* actual card */}
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="red" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="#fcab00" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Paper>
          <Paper shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "356px", background: "rgb(244, 245, 247)"}}>
            {/* card header */}
            <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
              <Center>
                <Text size={12} fw={400} transform="uppercase" 
                  sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                  Done&nbsp;
                  <span>5</span>
                </Text>
              </Center>
              <Center>
                {/* <Button size='xs' color="#42526e">...</Button> */}
                 <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button px="xs" color="green" variant="gradient" sx={{height: "30px"}}><MdOutlineAutoFixHigh /></Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<MdEdit />}>Edit</Menu.Item>
                    <Menu.Item icon={<MdCopyAll />}>Copy</Menu.Item>
                    <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Center>
            </Flex>
            {/* actual card */}
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="#fcab00" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="#fcab00" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Paper>
          <Paper shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "356px", background: "rgb(244, 245, 247)"}}>
            {/* card header */}
            <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
              <Center>
                <Text size={12} fw={400} transform="uppercase" 
                  sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                  Rejected&nbsp;
                  <span>5</span>
                </Text>
              </Center>
              <Center>
                {/* <Button size='xs' color="#42526e">...</Button> */}
                 <Menu shadow="md" width={200}>
                  <Menu.Target>
                    <Button px="xs" color="green" variant="gradient" sx={{height: "30px"}}><MdOutlineAutoFixHigh /></Button>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Item icon={<MdEdit />}>Edit</Menu.Item>
                    <Menu.Item icon={<MdCopyAll />}>Copy</Menu.Item>
                    <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </Center>
            </Flex>
            {/* actual card */}
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="#fcab00" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
            <Box component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
              <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                <Flex pb="sm" justify="space-between" style={{justifyContent: "space-between"}}>
                  <Text size={10} color="indigo">finish beta</Text>
                  <span>...</span>
                </Flex>
                <Box pl="sm" pb="sm" sx={{display: "flex", alignItems: "center", color: "red", width: "90px"}} >
                  <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                  &nbsp; 26 FEB
                </Box>
                <Flex justify="space-between">
                  <Box>
                    <span><MdMonetizationOn color="green" /></span>
                    &nbsp;
                    PET-3
                  </Box>
                  <Box>
                    <span><MdHorizontalSplit color="#fcab00" /></span>
                    &nbsp;
                    {/* <span>icon</span> */}
                  </Box>
                </Flex>
              </Container>
            </Box>
          </Paper>
        </Container>
        <Modal 
        opened={opened} 
        onClose={() => setOpened(false)}
        size="xl" 
        title="create task"
        overlayOpacity={0.55}
        overlayBlur={4}
        transitionDuration={0}
        transitionTimingFunction="ease"
        centered
        >
          <Select
            label="Task type"
            placeholder="Pick one"
            data={[
              { value: 'react', label: 'Mining' },
              { value: 'ng', label: 'Agriculture' },
              { value: 'svelte', label: 'Black Sand' },
              { value: 'vue', label: 'Capital Investment' },
            ]}
            required
            mb="md"
          />
          <TextInput mb="md" label="Short summary" placeholder='write something' required />
          <Textarea mb="md" placeholder='Long description' label="description" autosize minRows={2} maxRows={6}/>
          {/* <Select 
          label="reported to"
          placeholder='select reporter'
          data={[
            { value: 'react', label: 'Sami' },
            { value: 'ng', label: 'Mohammed Taha' },
            { value: 'svelte', label: 'Admin' },
            { value: 'vue', label: 'Asaad' },
          ]}
          searchable
          required
          mb="md"
          /> */}
          <Select 
          label="assignee"
          placeholder='select assignee'
          data={[
            { value: 'react', label: 'Sami' },
            { value: 'ng', label: 'Mohammed Taha' },
            { value: 'svelte', label: 'Admin' },
            { value: 'vue', label: 'Asaad' },
          ]}
          searchable
          required
          mb="md"
          />
          <Select
          label="priority"
          placeholder='choose priority'
          data={[
            { value: 'react', label: 'low' },
            { value: 'ng', label: 'medium' },
            { value: 'svelte', label: 'high' },
            { value: 'vue', label: 'highest' },
          ]}
          searchable
          required
          mb="md"
          />
          <Flex justify="space-between">
            <Button variant='filled' color="blue">Create</Button>
            <Button variant='subtle' color="blue">Cancel</Button>
          </Flex>

          {/* <CustomEditor /> */}
        </Modal>
      </DragDropContext>
      {/* cards container > parent card with label (ongoing, done, rejected, ...etc > actual card/board) */}
    </div>
  )
}

export default Board

// sprints - issues & projcet types - generate reports - text edit for in-place reports (text should be saved into DB every 10s)
// - reports could be generated automatically every (day, week, month, quarter)
// - mobile responsive
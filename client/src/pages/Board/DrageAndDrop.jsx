import { useEffect, useState } from 'react';
import { Box, Button, Center, Container, Flex, Group, Menu, Modal, Paper, Select, Text, Textarea, TextInput } from '@mantine/core'
import { Link, useParams } from 'react-router-dom'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
MdAddTask, 
MdCopyAll, 
MdDelete, 
MdEdit, 
MdHorizontalSplit, 
MdMonetizationOn, 
MdMoreVert, 
MdOutlineAccessTime, 
MdOutlineAutoFixHigh, 
MdBlurOn, 
MdFilter,
MdTextRotationAngledown,
MdMore,
} from 'react-icons/md'
// import CustomEditor from '../../components/TextEditor/TextEditor';
// import TaskModal from '../../components/TaskModal/TaskModal';
// import CopyBtn from '../../components/CopyBtn/copyBtn'
import axios from 'axios'
import Filter from '../../components/Filter/Filter';
import CreateTaskModal from '../../components/TaskModal/TaskModal';
import { datas } from '../../utils/makeData';
import moment from 'moment';

function DragAndDrop() {
  const [opened, setOpened] = useState(false);
  const [tasks, setTasks] = useState([]);

  const {projectId, taskId} = useParams();

  useEffect(() => {
      axios.get("http://localhost:5000/task").then((res) => {
      console.log(res.data)
      setTasks(res.data)
      
    })
  }, [])

    const handleOnDrage = (results) => {
        console.log(results)

        if (!results.destination) return;

        const items = Array.from(tasks);
        const [reorderedItem] = items.splice(results.source.index, 1);
        items.splice(results.destination.index, 0, reorderedItem);
    
        setTasks(items);
    }

  return (
    <div>
      {/* filter */}
      <Flex justify="space-between">
        {/* <Text>Filter goes here</Text> */}
        <Filter />
        <Button color="lime" variant="gradient" leftIcon={<MdAddTask />} onClick={() => setOpened(true)}>Create Task</Button>
      </Flex>
      <Container p="md" component={Flex} style={{width: 1200}}>
        <DragDropContext onDragEnd={handleOnDrage}>
          <Droppable droppableId="pending">
            {(provided) => (
              <Paper {...provided.droppableProps} ref={provided.innerRef} shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "236px", background: "rgb(244, 245, 247)"}}>
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
                      {/* <Menu.Item><CopyBtn />  </Menu.Item> */}
                      <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                </Center>
              </Flex>
              {/* actual card */}
              {tasks.map((item, index) => {
                  const {id, title, priority, dueDate} = item;

                  if(item.status === 'pending'){
                    return(
                      <Draggable draggableId={item._id} key={item._id} index={index}>
                      {(provided) => (
                      <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
                      <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                        <Flex pb="sm" mb="md" justify="space-between" style={{justifyContent: "space-between"}}>
                        <Text size={10} color="indigo">{title}</Text>
                        <MdBlurOn size={16} />
                        </Flex>
                        <Box mb="xs" sx={{display: "flex", alignItems: "center", color: "#DE350B", width: "60px", height: 16, background: "#ffebe6", fontSize: 11, fontWeight: 700}} >
                        <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                        &nbsp; {moment(dueDate).format('DD MMM')}
                        </Box>
                        <Flex justify="space-between" mt="md">
                        <Box>
                            <span><MdMonetizationOn color="green" /></span>
                            &nbsp;
                            {id}
                        </Box>
                        <Box>
                            <span><MdHorizontalSplit  color={priority == 'medium' ? 'fcab00' : priority == 'high' ? 'red' : 'green' } /></span>
                            &nbsp;
                            {/* <span>icon</span> */}
                        </Box>
                        </Flex>
                      </Container>
                      </Box>                        
                      )}
                      </Draggable>
                    )}
                  else{}
              })}
              {provided.placeholder}
              </Paper>
            )}
          </Droppable><Droppable droppableId="on-progress">
            {(provided) => (
                <Paper {...provided.droppableProps} ref={provided.innerRef} shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "236px", background: "rgb(244, 245, 247)"}}>
                {/* card header */}
                <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
                  <Center>
                    {/* <MdMoreVert />
                    <MdMoreVert /> */}
                    <Text size={12} fw={400} transform="uppercase" 
                      sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                      On-progress&nbsp;
                      <span>8</span>
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
                        {/* <Menu.Item><CopyBtn />  </Menu.Item> */}
                        <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Center>
                </Flex>
                {/* actual card */}
                 {tasks.map((item, index) => {
                    const {id, title, priority, dueDate} = item;

                    if(item.status === 'in-progress'){
                        return(
                            <Draggable draggableId={item._id} key={item._id} index={index}>
                            {(provided) => (
                            <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
                            <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                                <Flex pb="sm" mb="md" justify="space-between" style={{justifyContent: "space-between"}}>
                                <Text size={10} color="indigo">{title}</Text>
                                <MdBlurOn size={16} />
                                </Flex>
                                <Box mb="xs" sx={{display: "flex", alignItems: "center", color: "#DE350B", width: "60px", height: 16, background: "#ffebe6", fontSize: 11, fontWeight: 700}} >
                                <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                                &nbsp; {moment(dueDate).format('DD MMM')}
                                </Box>
                                <Flex justify="space-between" mt="md">
                                <Box>
                                    <span><MdMonetizationOn color="green" /></span>
                                    &nbsp;
                                    {id}
                                </Box>
                                <Box>
                                    <span><MdHorizontalSplit  color={priority == 'medium' ? 'fcab00' : priority == 'high' ? 'red' : 'green' } /></span>
                                    &nbsp;
                                    {/* <span>icon</span> */}
                                </Box>
                                </Flex>
                            </Container>
                            </Box>
                            )}
                            </Draggable>

                        )}
                    else{}
                })}
                {provided.placeholder}
              </Paper>
            )}
          </Droppable><Droppable droppableId="done">
            {(provided) => (
                <Paper {...provided.droppableProps} ref={provided.innerRef} shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "236px", background: "rgb(244, 245, 247)"}}>
                {/* card header */}
                <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
                  <Center>
                    {/* <MdMoreVert />
                    <MdMoreVert /> */}
                    <Text size={12} fw={400} transform="uppercase" 
                      sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                      Done&nbsp;
                      <span>18</span>
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
                        {/* <Menu.Item><CopyBtn />  </Menu.Item> */}
                        <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Center>
                </Flex>
                {/* actual card */}
                 {tasks.map((item, index) => {
                    const {id, title, priority, dueDate} = item;

                    if(item.status === 'done'){
                        return(
                            <Draggable draggableId={item._id} key={item._id} index={index}>
                            {(provided) => (
                            <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
                            <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                                <Flex pb="sm" mb="md" justify="space-between" style={{justifyContent: "space-between"}}>
                                <Text size={10} color="indigo">{title}</Text>
                                <MdBlurOn size={16} />
                                </Flex>
                                <Box mb="xs" sx={{display: "flex", alignItems: "center", color: "#DE350B", width: "60px", height: 16, background: "#ffebe6", fontSize: 11, fontWeight: 700}} >
                                <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                                &nbsp; {moment(dueDate).format('DD MMM')}
                                </Box>
                                <Flex justify="space-between" mt="md">
                                <Box>
                                    <span><MdMonetizationOn color="green" /></span>
                                    &nbsp;
                                    {id}
                                </Box>
                                <Box>
                                    <span><MdHorizontalSplit  color={priority == 'medium' ? 'fcab00' : priority == 'high' ? 'red' : 'green' } /></span>
                                    &nbsp;
                                    {/* <span>icon</span> */}
                                </Box>
                                </Flex>
                            </Container>
                            </Box>
                            )}
                            </Draggable>

                        )}
                    else{}
                })}
                {provided.placeholder}
              </Paper>
            )}
          </Droppable><Droppable droppableId="reviewed">
            {(provided) => (
                <Paper {...provided.droppableProps} ref={provided.innerRef} shadow="xl" p="sm" mr="sm" sx={{width: "25%", minHeight: "236px", background: "rgb(244, 245, 247)"}}>
                {/* card header */}
                <Flex justify="space-between" px="xs" shadow="md" mb="md" sx={{background: "rgb(234, 230, 255)", position: "sticky", top: 0, height: 48}}>
                  <Center>
                    {/* <MdMoreVert />
                    <MdMoreVert /> */}
                    <Text size={12} fw={400} transform="uppercase" 
                      sx={{background: "#dfe1e6", color: "#42526e", lineHeight: 1, display: "flex", justifyContent: "center", alignItems: "center"}}>
                      Review&nbsp;
                      <span>14</span>
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
                        {/* <Menu.Item><CopyBtn />  </Menu.Item> */}
                        <Menu.Item icon={<MdDelete />}>Delete</Menu.Item>
                      </Menu.Dropdown>
                    </Menu>
                  </Center>
                </Flex>
                {/* actual card */}
                 {tasks.map((item, index) => {
                    const {id, title, priority, dueDate} = item;

                    if(item.status === 'pending-development'){
                      return(
                        <Draggable draggableId={item._id} key={item._id} index={index}>
                          {(provided) => (
                          <Box ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} component={Link} to={`projects/${projectId}/tasks/${taskId}`} >
                          <Container mb="xs" p="md" sx={{background: "#fff", borderRadius: 3, boxShadow: "rgb(9 30 66 / 25%) 0px 1px 2px 0px"}}>
                              <Flex pb="sm" mb="md" justify="space-between" style={{justifyContent: "space-between"}}>
                              <Text size={10} color="indigo">{title}</Text>
                              <MdBlurOn size={16} />
                              </Flex>
                              <Box mb="xs" sx={{display: "flex", alignItems: "center", color: "#DE350B", width: "60px", height: 16, background: "#ffebe6", fontSize: 11, fontWeight: 700}} >
                              <MdOutlineAccessTime color="red" size={16} style={{marginRight: "-5px"}} />
                              &nbsp; {moment(dueDate).format('DD MMM')}
                              </Box>
                              <Flex justify="space-between" mt="md">
                              <Box>
                                  <span><MdMonetizationOn color="green" /></span>
                                  &nbsp;
                                  {id}
                              </Box>
                              <Box>
                                  <span><MdHorizontalSplit  color={priority == 'medium' ? 'fcab00' : priority == 'high' ? 'red' : 'green' } /></span>
                                  &nbsp;
                                  {/* <span>icon</span> */}
                              </Box>
                              </Flex>
                          </Container>
                          </Box>
                          )}
                        </Draggable>
                      )}
                    else{}
                })}
                {provided.placeholder}
              </Paper>
            )}
          </Droppable>
        </DragDropContext>
      </Container>
      <CreateTaskModal opened={opened} setOpened={setOpened} />
      {/* cards container > parent card with label (ongoing, done, rejected, ...etc > actual card/board) */}
    </div>
  )
}

export default DragAndDrop

// sprints - issues & projcet types - generate reports - text edit for in-place reports (text should be saved into DB every 10s)
// - reports could be generated automatically every (day, week, month, quarter)
// - mobile responsive
// - ability to send emails directly from reports page (with report attached automatically afer clicking)
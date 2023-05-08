import { useEffect, useState } from 'react';
import {Modal, Select, TextInput, Textarea, Flex, Button, Group, Radio, Switch, Center} from '@mantine/core'
import { useInputState } from '@mantine/hooks';
import axios from 'axios';
import { DatePicker } from '@mantine/dates';
import moment from 'moment';

function CreateTaskModal({opened, setOpened, dateStr, title}) {

  const [stringValue, setStringValue] = useInputState('');
  const [type, setType] = useState('')
  const [assignee, setAssignee] = useState('')
  const [priority, setPriority] = useState('')
  const [allDay, setAllDay] = useState(false)
  const [fields, setFields] = useState({
    title: "",
    description: "",
    priority: "",
    type: ["mining", "agriculture", "black-sand", "investment"],
    assignee: "",
    assignedTo: "",
  })
  const [value, onChange] = useState(new Date());

  // useEffect(() => {
  //   console.log(allDay)
  // })

  const handleAssigneeChange = (value) => {
    setAssignee(value)
    console.log(value)
  }

  const handlePriorityChange = (value) => {
    setPriority(value)
    console.log(value)
  }

  const handleTypeChange = (value) => {
    setType(value)
    console.log(value)
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFields({
      ...fields,
      [name]: value,
    });
    console.log(name, ":" ,value)
  }

  const handleChecked = (event) => {
    // console.log(allDay)
    // setAllDay(allDay)
    const bla = event.target.checked;
    setAllDay(bla)
    console.log(allDay)
    console.log(allDay.valueOf())
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fields)

    const url = 'http://localhost:5000/tasks/create'
    let data = {
      title: fields.title,
      description: fields.description,
      priority: priority,
      type: type,
      category: "not yet",
      status: "pending-development",
      assignee: assignee,
      assignedTo: "noone haha",
      date: dateStr,
      allDay: allDay
    };

    alert(data)
    axios.post(url, data).then((err) => {
      console.log(err)
    })
  }

  return(
    <Modal 
    opened={opened} 
    onClose={() => setOpened(false)}
    size="xl" 
    title={title}
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
          { value: 'mining', label: 'Mining' },
          { value: 'agriculture', label: 'Agriculture' },
          { value: 'black-sand', label: 'Black Sand' },
          { value: 'investment', label: 'Capital Investment' },
        ]}
        required
        value={type}
        onChange={handleTypeChange}
        mb="md"
      />
      <TextInput mb="md" label="Short title" placeholder='write something' required name="title" value={fields.title} onChange={handleInputChange} />
      <Textarea mb="md" placeholder='Long description' label="description" autosize minRows={2} maxRows={6} name="description" value={fields.description} onChange={handleInputChange}/>
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
        { value: 'sharaf', label: 'sharaf' },
        { value: 'aseel', label: 'Aseel' },
        { value: 'admin', label: 'Admin' }, 
        { value: 'asaad', label: 'Asaad' },
      ]}
      searchable
      required
      value={assignee}
      onChange={handleAssigneeChange}
      // name="assignee"
      // value={fields.assignee}
      // onChange={handleInputChange}
      mb="md"
      />
      <Select
      label="priority"
      placeholder='choose priority'
      data={[
        { value: 'low', label: 'low' },
        { value: 'medium', label: 'medium' },
        { value: 'high', label: 'high' },
        { value: 'highest', label: 'highest' },
      ]}
      searchable
      required
      // name="priority"
      value={priority}
      onChange={handlePriorityChange}
      mb="md"
      />
      <Flex align="flex-start">
        <DatePicker 
        label="date"
        value={dateStr}
        onChange={onChange}
        allowFreeInput
        // value={new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})}
        defaultValue={new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} 
        // placeholder={new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"})} 
        // placeholder={moment(dateStr).format('DD MMM YYYY')}
        placeholder={dateStr || moment(Date.now()).format('lll')}
        />
        <Switch
        mt={33}
        ml="md"
        label="all day?"
        name="allDay"
        checked={allDay}
        onChange={(event) => {
          setAllDay(event.target.checked)
          console.log(allDay)
        }}
        />
      </Flex>
      <Flex justify="space-between">
        <Button variant='filled' color="blue" type="submit" onClick={handleSubmit}>Create</Button>
        <Button variant='subtle' color="blue" onClick={() => setOpened(false)}>Cancel</Button>
      </Flex>

      {/* <CustomEditor /> */}
    </Modal>
  )
}

export default CreateTaskModal;
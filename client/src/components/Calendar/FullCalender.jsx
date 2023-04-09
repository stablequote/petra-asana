import React, { useState, useEffect } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction"
import timeGridPlugin from '@fullcalendar/timegrid';
import { Button, Modal } from '@mantine/core';
import CreateTaskModal from '../TaskModal/TaskModal';
import axios from 'axios';
import TaskInfoModal from '../TaskInfoModal/TaskInfoModal';

function CustomFullCalender() {
    const [opened, setOpened] = useState(false)
    const [taskInfo, setTaskInfo] = useState(false)

    const [tasks, setTasks] = useState(() => [])
    const [tasksArr, setTasksArr] = useState([])
    const [loading, setLoading] = useState(false)
    const [eventId, setEventId] = useState('')
    const [dateStr, setDateStr] = useState('')

  // let eventId;
  let pending;
  let someArrData = [
    {
    "_id": "640ce09edf62b9bf4417b6db",
    "title": "test task 1",
    "description": "a little demo testing db model",
    "assignee": "ben",
    "assignedTo": "user",
    "category": "development",
    "status": "ongoing",
    "date": "2023-03-11T20:12:14.091Z",
    "start": "2023-03-29",
    "end": "2023-03-29T20:13:14.091Z",
    "allDay": true,
    "__v": 0
    },
    {
    "_id": "640ce09edf62b9bf4417b6dc",
    "title": "test task 2",
    "description": "a little demo testing db model",
    "assignee": "ben",
    "assignedTo": "user",
    "category": "development",
    "status": "done",
    "date": "2023-03-11T18:12:14.092Z",
    "start": "2023-03-11T18:12:14.092Z",
    "end": "2023-03-11T21:12:14.092Z",
    "allDay": true,
    "__v": 0
    },
    {
    "_id": "6417e4d844ba52ee73f3fa06",
    "title": "test task cell conditional coloring 3",
    "description": "a little demo to test the app while developing conditional coloring feature",
    "assignee": "ben",
    "assignedTo": "user",
    "priority": "medium",
    "category": "development",
    "status": "done",
    "date": "2023-03-20T04:45:12.575Z",
    "updatedAt": "2023-03-20T04:45:12.575Z",
    "__v": 0},
    {
    "_id": "6420044d02deb4d1b3670102",
    "title": "dev title",
    "description": "dev desc",
    "assignee": "asaad",
    "assignedTo": "noone haha",
    "priority": "high",
    "category": "not yet",
    "status": "pending-development",
    "date": "2023-04-13T08:37:33.842Z",
    "end": "2023-04-15T08:37:33.842Z",
    "__v": 0
    }
    ]

  //   const fetchData = async (url) => {
  //     const res = await axios.get(url);
  //     console.log(res.data)
  //     // setTasks(res.data)
  //     setTasks([...tasks, res.data])
  //     // someArrData = res.data
  //     setTimeout(() => {
  //       console.log(tasks)
        
  //     }, 500);
  //     // console.log(someArrData)
  //     return res.json;
  //   }
  // useEffect(() => {
  //   const baseUri = 'http://localhost:5000/task/'
  //   setLoading(true)
  //   fetchData(baseUri)
  //   console.log(tasks)
  // }, [])

  useEffect(() => {
    const baseUri = 'http://localhost:5000/task/'
    const req = axios.get(baseUri).then((res) => {
      console.log(res.data)
      setTasks(res.data)
      console.log(tasks)
    })
  }, [])

    const handleDateClick = (arg) => { // bind with an arrow function
        // alert(arg.dateStr)
        setOpened(true)
        console.log(arg)
        console.log(arg.date)
        setDateStr(arg.date)
    }

    const displayEvents = () => {
      tasks.map((task) => {
        console.log(task)
        // setTasksArr(tasksArr)
        someArr = [
          {title: tasks.title, date: tasks.date}
        ]
      })
    }

  return (
    <>
    <CreateTaskModal 
    opened={opened}
    dateStr={dateStr}
    setOpened={setOpened} 
    title="Create task"
    />
    <TaskInfoModal
    opened={taskInfo}
    setOpened={setTaskInfo}
    title="task info"
    tasks={tasks}
    id={eventId}
    />
    {/* <Button variant="filled" color="dark" mb="xs" onClick={displayEvents}>Add event</Button> */}
    <FullCalendar
        plugins={[ dayGridPlugin, interactionPlugin, timeGridPlugin ]}
        initialView="dayGridMonth"
        // weekends={false}
        editable={true}
        eventResizableFromStart={true}
        startEditable
        // defaultAllDay={true}
        droppable={true}
        height="80vh"
        headerToolbar={{
            start: 'today prev,next', // will normally be on the left. if RTL, will be on the right
            center: 'title',
            end: 'dayGridMonth,timeGridWeek,timeGridDay' // will normally be on the right. if RTL, will be on the left
          }}
        // events={[
        //   { title: 'rocks shipment', date: '2023-03-01' },
        //   { title: 'meeting with junaid company', date: '2023-03-09' }
        // ]}
        events={tasks}
        eventClick={(eventClickInfo) => {
          setTaskInfo(!taskInfo)
          console.log(eventClickInfo)
          console.log(eventClickInfo.event.extendedProps._id)
          setEventId(eventClickInfo.event.extendedProps._id)
          console.log(eventId)
        }}
        // eventContent={renderEventContent}
        dateClick={handleDateClick}
        eventDrop={(info) => {
            console.log(info)
        }}
        businessHours={{
            daysOfweek: [1,2,3,4,5],
            startTime: '09:00',
            endTime: '18:00'
        }}
    />
    </>
  )
}


function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
}


export default CustomFullCalender
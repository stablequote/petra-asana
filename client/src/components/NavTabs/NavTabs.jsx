import { useNavigate, useParams } from 'react-router-dom';
import { Tabs } from '@mantine/core';
// import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons';

function NavTabs(props) {
  const navigate = useNavigate();
  const { tabValue } = useParams();

  return (
    <Tabs mb="lg" pl="md" color="lime" sx={{width: "928px"}} value={tabValue} onTabChange={(value) => navigate(`/projects/${535}/${value}`)}>
      <Tabs.List>
        <Tabs.Tab value="summary">Summary</Tabs.Tab>
        <Tabs.Tab value="board">Board</Tabs.Tab>
        <Tabs.Tab value="calender">Calender</Tabs.Tab>
        <Tabs.Tab value="tasks">Tasks</Tabs.Tab>
        <Tabs.Tab value="timeline">Timeline</Tabs.Tab>
        <Tabs.Tab value="reports">Reports</Tabs.Tab>
        <Tabs.Tab value="settings">Project Settings</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}

export default NavTabs;
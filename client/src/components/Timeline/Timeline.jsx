import { Timeline, Text, Container } from '@mantine/core';
// import {   IconGitCommit, IconMessageDots } from '@tabler/icons';

function CustomTimeline() {
  return (
    <Container size="md">
    <Timeline active={1} bulletSize={24} lineWidth={2}>
      <Timeline.Item  title="New Rocks shipment">
        <Text color="dimmed" size="sm">You&apos;ve created new branch <Text variant="link" component="span" inherit>fix-notifications</Text> from master</Text>
        <Text size="xs" mt={4}>5 days ago</Text>
      </Timeline.Item>

      <Timeline.Item  title="Crushing Rocks">
        <Text color="dimmed" size="sm">You&apos;ve pushed 23 commits to<Text variant="link" component="span" inherit>fix-notifications branch</Text></Text>
        <Text size="xs" mt={4}>4 days ago</Text>
      </Timeline.Item>

      <Timeline.Item title="CIL operation" lineVariant="dashed">
        <Text color="dimmed" size="sm">You&apos;ve submitted a pull request<Text variant="link" component="span" inherit>Fix incorrect notification message (#187)</Text></Text>
        <Text size="xs" mt={4}>2 days ago</Text>
      </Timeline.Item>

      <Timeline.Item title="Quality assurance" >
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>7 hours ago</Text>
      </Timeline.Item>
      <Timeline.Item title="Report to Ministry of finance" >
        <Text color="dimmed" size="sm"><Text variant="link" component="span" inherit>Robert Gluesticker</Text> left a code review on your pull request</Text>
        <Text size="xs" mt={4}>47 minutes ago</Text>
      </Timeline.Item>
    </Timeline>
    </Container>
  );
}

export default CustomTimeline
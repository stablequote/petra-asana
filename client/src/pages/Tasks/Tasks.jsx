import { Box, Center, Table } from '@mantine/core';
import PaginationControl from '../../components/Pagination/Pagination';

const elements = [
  { type: "task", summary: "adding filtering feature", status: "ongoing", category: "project", priority: "high", assignee: "Dan", comments: "deadline just got cut in half", dueDate: "11.Mar.2023", labels: "pre-launch", reporter: "John Doe"},
  { type: "task", summary: "adding filtering feature", status: "ongoing", category: "project", priority: "high", assignee: "Dan", comments: "deadline just got cut in half", dueDate: "11.Mar.2023", labels: "pre-launch", reporter: "John Doe"},
  { type: "task", summary: "adding filtering feature", status: "ongoing", category: "project", priority: "high", assignee: "Dan", comments: "deadline just got cut in half", dueDate: "11.Mar.2023", labels: "pre-launch", reporter: "John Doe"},
  { type: "task", summary: "adding filtering feature", status: "ongoing", category: "project", priority: "high", assignee: "Dan", comments: "deadline just got cut in half", dueDate: "11.Mar.2023", labels: "pre-launch", reporter: "John Doe"},
  { type: "task", summary: "adding filtering feature", status: "ongoing", category: "project", priority: "high", assignee: "Dan", comments: "deadline just got cut in half", dueDate: "11.Mar.2023", labels: "pre-launch", reporter: "John Doe"},
  { type: "task", summary: "adding filtering feature", status: "ongoing", category: "project", priority: "high", assignee: "Dan", comments: "deadline just got cut in half", dueDate: "11.Mar.2023", labels: "pre-launch", reporter: "John Doe"},
];


function Tasks() {
  const rows = elements.map((element, i) => (
    <tr key={i}>
      <td>{element.type}</td>
      <td>{i + 1}</td>
      <td>{element.summary}</td>
      <td>{element.status}</td>
      <td>{element.category}</td>
      <td>{element.priority}</td>
      <td>{element.assignee}</td>
      <td>{element.comments}</td>
      <td>{element.dueDate}</td>
      <td>{element.labels}</td>
      <td>{element.reporter}</td>
    </tr>
  ));

  return (
    <Box>
      <Table striped highlightOnHover withBorder withColumnBorders>
        <thead>
          <tr>
            <th>Type</th>
            <th>Key</th>
            <th>Summary</th>
            <th>Status</th>
            <th>Category</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Comments</th>
            <th>Due Date</th>
            <th>Labels</th>
            <th>Reporter</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Center mt="lg">
        <PaginationControl />
      </Center>
    </Box>
  );
}


export default Tasks
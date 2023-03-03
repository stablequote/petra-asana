// import { useState } from 'react';
import { Modal, Button, Group, Container, Flex, Input } from '@mantine/core';
import TextEditor from '../TextEditor/TextEditor';

function TaskModal({opened}) {
//   const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        
        title="Introduce yourself!"
      >
        <Container p="md">
            <Text>Add Task</Text>
            <Flex>
                <Input placeholder='task title' required />
                <Input placeholder='short description test' />
            <TextEditor />
            <p>something</p>
            </Flex>
        </Container>
      </Modal>
    </>
  );
}

export default TaskModal;
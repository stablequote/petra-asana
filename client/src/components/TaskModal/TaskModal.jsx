import {Modal, Select, TextInput, Textarea, Flex, Button} from '@mantine/core'

function CreateTaskModal({opened, setOpened}) {
  return(
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
  )
}

export default CreateTaskModal;
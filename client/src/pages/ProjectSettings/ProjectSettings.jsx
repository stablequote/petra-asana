import { Container, Select, Textarea, Title, TextInput, Button } from '@mantine/core'
import React from 'react'

function ProjectSettings() {
  return (
    <Container size="md">
      <Title fz={16} color="darkblue">Project Details</Title>
      <TextInput label="Name" placeholder="project name" mb="md" />
      <TextInput label="Key" placeholder="PET" defaultValue="PET" mb="sm" />
      <Textarea label="description" minRows={2} maxRows={4} autosize mb="sm" />
      <Select
        label="project category"
        placeholder='choose category'
        data={[
          { value: 'react', label: 'Mining' },
          { value: 'ng', label: 'Agriculture' },
          { value: 'svelte', label: 'Black Sand' },
          { value: 'vue', label: 'Capital Investment' },
        ]}
        searchable
        required
        mb="md"
      />
      <Select
        label="assignee" 
        placeholder='choose assignee'
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
      <Button variant="filled" color="blue">Save changes</Button>
    </Container>
  )
}

export default ProjectSettings
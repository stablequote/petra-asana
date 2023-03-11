import { useState } from 'react';
import { Calendar } from '@mantine/dates';
import { Indicator, Dialog, Input, Modal } from '@mantine/core';

function CustomCalendar() {
  const [value, setValue] = useState(new Date);
  const [opened, setOpened] = useState(false);

  return (
    <Calendar
      value={value}
      onChange={setValue}
      renderDay={(date) => {
        const day = date.getDate();
        return (
          <Indicator size={10} color="red" offset={8} disabled={day !== 16}>
            <div onClick={() => setOpened((o) => !o)}>{day}</div>
            {/* <Dialog
              opened={opened}
              withCloseButton
              onClose={() => setOpened(false)}
              size="lg"
              radius="md"
              shadow="xl"
              p={30}
            >
              <Input placeholder='Enter something' size="sm" />
            </Dialog> */}
            <Modal withCloseButton={true} title="add event to calender" overlayOpacity={0.55}
      overlayBlur={3}  onClose={() => setOpened(false)} opened={opened}>
      <Input placeholder='modal' />
    </Modal>
          </Indicator>
        );
      }}
      fullWidth
      size="xl"
      styles={(theme) => ({
        cell: {
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
        },
        day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
        weekday: { fontSize: theme.fontSizes.lg },
        weekdayCell: {
          fontSize: theme.fontSizes.xl,
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
          border: `1px solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
          }`,
          height: 62,
        },
      })}
    />
  );
}

export default CustomCalendar;
import { useState } from 'react';
import { Tabs, Tab, Box, Typography } from '@mui/material';
import { PersonPin } from '@mui/icons-material';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

export default function TabsComponent() {
  const [value, setValue] = useState(0);

  return (
    <>
      <h4>Tabs Component</h4>

        <Box sx={{ borderColor: 'divider', borderBottom: 1 }}>
          <Tabs
            value={value}
            onChange={(e, newValue) => setValue(newValue)}
            textColor="secondary"
            indicatorColor="secondary"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
            <Tab icon={<PersonPin />} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          Item One
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
    </>
  )
}

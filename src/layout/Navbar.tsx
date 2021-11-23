import React, {useState} from 'react'
import {Accordion, AccordionDetails, AccordionSummary, Tab, Tabs, Typography} from "@material-ui/core";
import Box from "@material-ui/core/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      area-labelledby={`tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export const Navbar = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  }

  return (
    <Box>
      <Box>
        <Box>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="注目" {...a11yProps(0)} />
            <Tab label="XXX1" {...a11yProps(1)} />
            <Tab label="XXX2" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        </TabPanel>
        <TabPanel value={value} index={1}>

        </TabPanel>
        <TabPanel value={value} index={2}>

        </TabPanel>
      </Box>
    </Box>
  )
};

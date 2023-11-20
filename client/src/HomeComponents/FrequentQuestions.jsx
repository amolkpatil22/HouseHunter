// Import necessary Chakra UI components
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Box } from '@chakra-ui/react';
import React from 'react';

const FAQAccordion = () => {
  return (
    <Box w={"95%"} margin={"auto"} mb={10} className='accordion'>
      <Heading m={7}> Frequently Asked Questions </Heading>
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton justifyContent="flex-start">
              <AccordionIcon />
              What is HouseHunter?
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            HouseHunter is a real estate and rental marketplace that provides information on homes, apartments, and other real estate
            listings. It allows users to browse properties, estimate home values, and connect with local real estate agents.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton justifyContent="flex-start">
              <AccordionIcon />
              How can I list my property on HouseHunter?
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            To list your property on HouseHunter, you can create a HouseHunter account and use the "Add a Listing" feature to input
            details about your property, upload photos, and set the listing price.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton justifyContent="flex-start">
              <AccordionIcon />
              Can I search for rentals on HouseHunter?
            </AccordionButton>
          </h2>
          <AccordionPanel >
            Yes, HouseHunter provides a comprehensive search for rental properties. You can use the filters to specify your
            preferences and find rental listings in your desired location.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton justifyContent="flex-start">
              <AccordionIcon />
              How accurate are HouseHunter's home value estimates?
            </AccordionButton>
          </h2>
          <AccordionPanel>
            HouseHunter's home value estimates, also known as Zestimates, are calculated using a variety of data sources. While
            they can provide a rough estimate, they may not always reflect the actual market value of a property.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton justifyContent="flex-start">
              <AccordionIcon />
              Is HouseHunter available in all countries?
            </AccordionButton>
          </h2>
          <AccordionPanel >
            HouseHunter primarily focuses on the United States, and its features may not be available in all countries. However,
            you can check the HouseHunter website for the most up-to-date information on its coverage.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};

export default FAQAccordion;

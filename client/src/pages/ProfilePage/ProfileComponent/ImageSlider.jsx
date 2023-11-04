import React, { useState, useRef } from 'react';
import { Box, Center, Image, Button, Heading, HStack, Flex } from '@chakra-ui/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./slider.css"

const ImageSlider = ({ images }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        const scrollAmount = 200; // Adjust this value for the desired scroll distance
        const container = scrollRef.current;

        if (container) {
            if (direction === 'left') {
                container.scrollLeft -= scrollAmount;
            } else if (direction === 'right') {
                container.scrollLeft += scrollAmount;
            }
            setScrollPosition(container.scrollLeft);
        }
    };

    return (
        <Box>
            <HStack spacing={12} align="center">
                <Button onClick={() => handleScroll('left')}>
                    <FaArrowLeft />
                </Button>
                <Flex
                    gap={"10px"}
                    className='imgslide'
                    ref={scrollRef}
                    overflowX="scroll"
                    whiteSpace="nowrap"
                    w="100%"
                    px={3}
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {images.map((src, index) => (
                        <Image borderRadius={"20px"} width={"300px"} src={src} alt={`Image ${index + 1}`} />
                    ))}
                </Flex>
                <Button onClick={() => handleScroll('right')}>
                    <FaArrowRight />
                </Button>
            </HStack>
        </Box>
    );
};

export default ImageSlider;

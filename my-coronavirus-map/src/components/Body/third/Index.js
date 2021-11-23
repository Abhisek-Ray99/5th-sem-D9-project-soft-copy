import React from 'react'
import { motion } from 'framer-motion';
// import Imgmain from "gatsby-image"

import { Section, Container, ColumnLeft, ColumnRight, Button, Imgmain } from './Thirdelements';
import Frame1 from '../../../assets/images/3d1.png';
import Frame2 from '../../../assets/images/3d2.png';
import Frame3 from '../../../assets/images/3d3.png';
import Frame4 from '../../../assets/images/3d4.png';
import Frame5 from '../../../assets/images/3d5.png';
import Frame6 from '../../../assets/images/3d6.png';

const Third = () => {

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 }
    }

    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >Why Covid-Visualizer</motion.h1>
                    <motion.p
                        variants={fadeLeft}
                        initial='hidden'
                        animate='visible'
                        transition={{ duration: 1 }}
                    >We create this visualize effect in different format like chart, mapping </motion.p>
                    <Button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95, backgroundColor: '#67F6E7' }}
                    >Learn More</Button>
                </ColumnLeft>
                <ColumnRight>
                    <Imgmain
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Imgmain src={Frame1} />
                    </Imgmain>
                    <Imgmain
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Imgmain src={Frame2} />
                    </Imgmain>
                    <Imgmain
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Imgmain src={Frame3} />
                    </Imgmain>
                    <Imgmain
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Imgmain src={Frame4} />
                    </Imgmain>
                    <Imgmain
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Imgmain src={Frame5} />
                    </Imgmain>
                    <Imgmain
                        whileTap={{ scale: 0.9 }}
                        drag={true}
                        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
                    >
                        <Imgmain src={Frame6} />
                    </Imgmain>
                </ColumnRight>
            </Container>
        </Section>
    )
}

export default Third

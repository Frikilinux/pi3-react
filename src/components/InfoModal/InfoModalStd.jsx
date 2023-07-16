import { motion } from "framer-motion";
import { styled } from "styled-components";

export const InfoModalContainer = styled(motion.div)`
  position: absolute;
  z-index: 20;
  top: 0;
  height: 50px;
  width: 600px;
  background-color: aliceblue;
  color: var(--dark);
`

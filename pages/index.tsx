import { Flex } from "rebass-emotion";
import withEmotion from "../lib/withEmotion";

export default withEmotion(() => (
  <Flex align="center" justify="center" css={`height: 100vh`}>
    <div
      css={`
        color: red;
      `}
    >
      Hello World.
    </div>
  </Flex>
));

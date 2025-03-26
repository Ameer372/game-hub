import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (children.length < limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  if (!children) return null;

  return (
    <Text>
      {summary}
      <Button
        ml={1}
        size="xs"
        fontWeight="bold"
        backgroundColor="yellow.300"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Read More"}{" "}
      </Button>
    </Text>
  );
};

export default ExpandableText;

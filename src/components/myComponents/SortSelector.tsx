import useGameQueryStore from "@/store";
import {
  Box,
  Button,
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@chakra-ui/react";

const SortSelector = () => {
  const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

  const setSortOrder = useGameQueryStore((s) => s.setSortOrder);

  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release date",
    },
    {
      value: "-metacritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average rating",
    },
  ];

  const currentSortOrder = sortOrders.find((o) => o.value === sortOrder);

  return (
    <Box>
      <MenuRoot>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm">
            Order by : {currentSortOrder?.label || "Relevance"}
          </Button>
        </MenuTrigger>
        <MenuContent pos={"absolute"} mt={2} width={"1/6"}>
          {sortOrders.map((order) => (
            <MenuItem
              key={order.value}
              onClick={() => setSortOrder(order.value)}
              value={order.value}
            >
              {order.label}
            </MenuItem>
          ))}
        </MenuContent>
      </MenuRoot>
    </Box>
  );
};

export default SortSelector;

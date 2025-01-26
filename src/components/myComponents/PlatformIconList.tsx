import { Platform } from "@/hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";

interface PlatformIconListProps {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: PlatformIconListProps) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    ios: MdPhoneIphone,
    android: FaAndroid,
    nintendo: SiNintendo,
    linux: FaLinux,
    web: BsGlobe,
    mac: FaApple,
  };

  return (
    <>
      <HStack marginY={1}>
        {platforms.map((platform) => (
          <Icon key={platform.id} as={iconMap[platform.slug]}>
            {platform.name}
          </Icon>
        ))}
      </HStack>
    </>
  );
};

export default PlatformIconList;

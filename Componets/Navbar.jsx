import Link  from "next/link";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    IconButton,Flex,Box,Spacer
  } from '@chakra-ui/react'
  import {FcHome,FcMenu,FcAbout} from "react-icons/fc"
  // import {BsSearch} from "react-icons/bs-search";
  import {FiKey} from "react-icons/fi"
import { BsSearch } from "react-icons/bs";
const Navbar = () => {
  return (
<Flex borderBottom="2px" borderColor="gray.100">
<Box fontSize="3xl" color="blue.400" fontWeight="bold">
<Link href="/" paddingLeft="2">Compass</Link>
</Box>
<Spacer/>
<Box>
  <Menu>
    <MenuButton as={IconButton} icon={<FcMenu/>} variant="outlined" color="red.400" />
<MenuList>
  <Link href="/">
    <MenuItem icon={<FcHome/>}>Home</MenuItem>
  </Link>
  <Link href="/search">
    <MenuItem icon={<BsSearch/>}>Search</MenuItem>
  </Link>
  <Link href="/search?property=for-sale">
    <MenuItem icon={<FcAbout/>}>Buy Property</MenuItem>
  </Link>
  <Link href="/search?purpose=for-rent">
    <MenuItem icon={<FiKey/>}>Rent Property</MenuItem>
  </Link>
</MenuList>
  </Menu>
</Box>
</Flex>


  )
}

export default Navbar
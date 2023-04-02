
// Propery is a resuseable componet that is used by index,js and search.js
import Link from 'next/link';
import Image from 'next/image'
import {Box,Flex,Text,Avatar} from '@chakra-ui/react';
import {FaBed,FaBath} from "react-icons/fa";
import {BsGridFill} from "react-icons/bs";
import GoVerified from "react-icons/go";
import millify from "millify"; // convert long numbers into human reader friendly numbers
import defaultCoverPhoto from '../assests/DefaultImage.jpg'
const Property = ({property:{coverPhoto,price,rentFrequency,rooms,title,bath,area,agency,isVerfied,externalID,}}) => {
  return (
    <Link href={`/property/${externalID}`} passHref
    >
    <Flex
    flexWrap="wrap" w="420px" p="5" paddingTop="0" justifyContent="flex-start" cursor="Pointer"
    >
      <Box>
<Image src={coverPhoto?coverPhoto.url:defaultCoverPhoto} alt="house" width={400} height={260} />
      </Box>
      <Box w="full">
<Flex paddingTop="2" alignItems="center" justifyContent="space-between" >
<Flex alignItems="center">
<Box paddingRight="3" color="green.400" >{isVerfied && <GoVerified/>}</Box>
<Text fontWeight="bold" fontSize="lg">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>

</Flex>
<Box>
  <Avatar size="sm" src={agency?.logo?.url}/>
</Box>
<Flex alignItems="center" p="1" justifyContent="space-between" w="250px" color="blue.400" >
{rooms} <FaBed/> | {bath} <FaBed/> | {millify(area) } sqft <BsGridFill/>
</Flex>
<Flex>
</Flex>
<Box>

{/* <Text fontSize="lg" > {title.length > 40 ? title.substring(0, 30) : title}</Text> */}
</Box>
</Flex>
      </Box>




    </Flex>

    </Link>

  )
}

export default Property
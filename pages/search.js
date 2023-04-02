import {useState} from "react";
import {useRouter} from "next/router"
import Image from "next/image"
import {Flex,Box,Text,Icon} from "@chakra-ui/react";
import {BsFilter} from "react-icons/bs";
import SearchFilter from "../Componets/SearchFilter";
import Property from "../Componets/Property";
import noResult from '../assests/noResult.gif'
import{BASE_URL,FetchAPI} from '../utlies/FetchApi'
const Search = ({properties}) => {
    const [searchFilter,setSearchFilter] =useState(false)
    const router=useRouter();
   const  handleFilter=()=>{
    if(searchFilter==false){
      setSearchFilter(true)
    }else{
      setSearchFilter(false)
    }
   }
  return (
   <Box>
<Flex
cursor="pointer"
bg="gray.100"
borderBottom="2px"
borderColor="gray.200"
p="2"
fontWeight="bold"
fontSize="lg"
justifyContent="center"
alignItems="center"
onClick={handleFilter}
>
    <Text>Search Property By Filters</Text>
<Icon paddingLeft="2" w="7" as={BsFilter}/>
</Flex> 
{searchFilter && <SearchFilter/>}
<Text fontSize="2xl" p="4" fontWeight="bold" >
  Properties {router.query.purpose}
</Text>
<Flex flexWrap="wrap" >
{properties.map((property)=>(
  <Property property={property} key={property.id}/>
))}
</Flex>
{properties.length===0 &&(
<Flex justifyContent="center" alignItems="center" flexDirection="column" marginBottom="5">
<Image alt="no result" src={noResult}   />
 Moiz is Good
</Flex>
) }
   </Box>
  )
}

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await FetchAPI(`${BASE_URL}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}
export default Search

  
import {useState,useEffect} from "react";
import {Flex,Box,Text,Select,Input,Spinner,Icon,Button} from "@chakra-ui/react";
import {useRouter} from "next/router";
import {MdCancel} from "react-icons/md";
import Image from "next/image";
import {filterData,getFilterValues} from "../utlies/FilterData"
const SearchFilter = () => {
  const router=useRouter();
  const [filters,setfilters]=useState(filterData);
  const searchproperties=(filterValues)=>{
const path=router.pathname;
const {query}=router;
const values=getFilterValues(filterValues)
values.forEach((item)=>{
  query[item.name]=item.value;
})
router.push({pathname:path,query})
  }
  return (
<>
<Flex bg="gray.200" p="4" justifyContent="center" flexWrap="wrap">
{filters.map((filter)=>(
<Box key={filter.queryName}>
<Select 
w="fit-content" 
p="2"
placeholder={filter.placeholder}
onChange={(e)=>{searchproperties({[filter.queryName]:e.target.value})}}
>
  {filter?.items?.map((item)=>(
    <option  value={item.value} key={item.value}>{item.name}</option>
  ))}


</Select>

</Box>


))}
</Flex>
</>
    

  )
}

export default SearchFilter
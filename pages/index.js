import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box,Text,Button } from '@chakra-ui/react'
import{BASE_URL,FetchAPI} from '../utlies/FetchApi'
import Property from "../Componets/Property"
const inter = Inter({ subsets: ['latin'] })

export default function Home({propertyForRent,propertyForSale}) {
  const Banner = ({purpose,title1,title2,desc,desc2,LinkName,ButtonText,imageURL}) => 
  (
     <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
     <Image src={imageURL} width={500} height={300} alt="bannerimagehere"/>
     <Box p="5" >
<Text color="grey.500" fontSize="sm"  m="10" fontWeight="medium">
{purpose}
</Text>
<Text fontSize="3xl"  m="10" fontWeight="bold">
{title1}<br/>{title2}
</Text>
<Text  fontSize="medium" m="10" fontWeight="medium" paddingTop="3" color="grey.700">
{desc}<br/>{desc2}<br/>
<Button fontSize="xl" bg="blue.300" m="10" color="white">
<Link href={LinkName}>{ButtonText}</Link>
</Button>
</Text>

     </Box>
     </Flex>
     )
  return (
    <>
     <h1>Hello World</h1>
     {/* first Banner */}
     <Banner 
     purpose="Rent a Home"
title1="Rental Homes for"
title2="Everyone"
desc={"Expalore Appartment, Villas,Home"}
desc2={"and more"}
ButtonText="Explore Renting"
LinkName="/search?purpose=for-rent"
imageURL="https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"

     />
     {/* First flex */}
     <Flex flexWrap="wrap">
{propertyForSale.map((property)=>(
     <Property key={property}
     property={property}
     id={property.id}
     />
))}

     </Flex>
     <Banner 
     purpose="Buy a Home"
title1="Find Buy and Own Your"
title2="Dream Home"
desc={"Expalore Appartment, Villas,Home"}
desc2={"and more"}
ButtonText="Explore Buying"
LinkName="/search?purpose=for-sale"
imageURL="https://images.unsplash.com/photo-1606186193539-837a478be1aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"

     />
     {/* Second flex */}
     <Flex flexWrap="wrap">
{propertyForRent.map((property)=>(
     <Property key={property}
     property={property}
     id={property.id}
     />
))}

     </Flex>
    </>
  )
}
export async function getStaticProps(){
const propertyForSale=await FetchAPI(`${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
const propertyForRent=await FetchAPI(`${BASE_URL}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

return{

     props:{
propertyForSale:propertyForSale?.hits,
propertyForRent:propertyForRent?.hits
     }
}
}

import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
  } from '@chakra-ui/react';
import millify from "millify"; // convert long numbers into human reader friendly numbers

  import ImageScroll from "/Componets/ImageScroll"
import{BASE_URL,FetchAPI} from '/utlies/FetchApi'
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { MdLocalShipping } from 'react-icons/md';
  
  export default function ProductPage({propertyDetails:{price,rentFrequency,rooms,title,baths,area,agency,isVerfied,description,type,purpose,furnishingStatus,photos}}) {
    return (
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
        { photos &&  <ImageScroll data={photos} />}
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={'header'}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: '2xl', sm: '2xl', lg: '4xl' }}>
               {title}
              </Heading>
              <Text
                color={useColorModeValue('gray.900', 'gray.400')}
                fontWeight={300}
                fontSize={'2xl'}>
         Price: { millify(price)}
              </Text>
            </Box>
  
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={'column'}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.200', 'gray.600')}
                />
              }>
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text
                  color={useColorModeValue('gray.500', 'gray.400')}
                  fontSize={'2xl'}
                  fontWeight={'300'}>
                {title}
                </Text>
                <Text fontSize={'lg'}>
               {description}
                </Text>
              </VStack>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                  Features
                </Text>
  
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                    <ListItem>Furnished</ListItem>
                    <ListItem>Verfied Certified</ListItem>{' '}
                    <ListItem>Status</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{furnishingStatus?"Yes":"No"}</ListItem>
                    <ListItem>{isVerfied?"Yes":"No"}</ListItem>
                    <ListItem>{purpose}</ListItem>
                  </List>
                </SimpleGrid>
              </Box>
              <Box>
                <Text
                  fontSize={{ base: '16px', lg: '18px' }}
                  color={useColorModeValue('yellow.500', 'yellow.300')}
                  fontWeight={'500'}
                  textTransform={'uppercase'}
                  mb={'4'}>
                Property Details
                </Text>
  
                <List spacing={2}>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Rooms:
                    </Text>{' '}
                    {rooms}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Baths
                    </Text>{' '}
                    {baths}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Area
                    </Text>{' '}
                   {millify(area)}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Rent Frequency
                    </Text>{' '}
                    {rentFrequency}
                  </ListItem>
                
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                    Type
                    </Text>{' '}
                  {type}
                  </ListItem>
              
                </List>
              </Box>
            </Stack>
  
            <Button
              rounded={'none'}
              w={'full'}
              mt={8}
              size={'lg'}
              py={'7'}
              bg={useColorModeValue('gray.900', 'gray.50')}
              color={useColorModeValue('white', 'gray.900')}
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}>
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    );
  }
  export async function getServerSideProps({params:{id}}){
    const data = await FetchAPI(`${BASE_URL}/properties/detail?externalID=${id}`);
    return {
props:{
    propertyDetails:data
}
    }
  }
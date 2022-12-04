import React from "react";
import {
  Card,
  Image,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button
} from '@chakra-ui/react'




export default function CardBrinquedos({ image, name, price, id, comprar }) {

  const priceFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency', currency: 'BRL',


    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    // <CardContainer>
    //   <Image src={image} alt={name} />
    //   <p>{name}</p>
    //   <span>{priceFormatter.format(price)}</span>
    //   <button onClick={()=>comprar(id)}>Comprar</button>
    // </CardContainer>

    <Card maxW='sm'>
      <CardBody backgroundColor={"white"}>
        <Image
          src={image} alt={name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
          A Linha Jornada Espacial é ideal para deixar a imaginação a solta.
          
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {priceFormatter.format(price)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter backgroundColor={"white"}>
        <ButtonGroup spacing='2'>
          <Button onClick={() => comprar(id)} variant='solid' colorScheme='blue'>
            Comprar
          </Button>

        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}




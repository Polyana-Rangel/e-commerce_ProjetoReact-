import React from 'react'
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

export default function CardCarrinho({
  id,
  url,
  name,
  amount,
  price,
  deleteItem
}) {
  const priceFormatter = new Intl.NumberFormat('pt-br', {
    style: 'currency', currency: 'BRL',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  return (
    <Card maxW='sm'>
      <CardBody backgroundColor={"white"}>
        <Image
          src={url} alt={name}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>
            Qtd <b>{amount}</b>
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {priceFormatter.format(price)}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter backgroundColor={"white"}>
        <ButtonGroup spacing='2'>
          <Button onClick={() => deleteItem(id)} variant='solid' colorScheme='red'>
            x
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  )
}


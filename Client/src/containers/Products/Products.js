import React, {useContext, useState} from 'react';
import {UserContext} from '../../contexts/UserContext';
import {Container,ProductsContainer, Wrapper, Box, Title} from './styled'
import AuthApi from '../../api/AuthApi'

const Products = () => {

  const [recommend, setRecommend] = useState([])
  let loading = false;

  const { whoAmI } = useContext(UserContext);

  const createList = () => {
    let list = []
    for (let i = 1; i <= 500; i++) {
      list.push(i)
    }
    return list;
  }

  const list = createList()

  const handleClick = (index) => {

  const user = whoAmI()

  let data = {
    "userId": parseInt(user.id),
    "productId": index
  };

    AuthApi.interact(data).then(
      response => {
        console.log(`Użytkownik ${user.login} wybrał produkt ${index}`)

        if(!loading){
          loading = true
          console.log("Obliczam rekomendacje..")
  
          let payload = {
            "userId": parseInt(user.id)
          };

          AuthApi.recommend(user.id,payload).then(
            response => {
              console.log(response.data)
              setRecommend(response.data)
            },
            error => {
              console.log(error)
            })
          
  
          loading = false
        }
      },
      error => {
        console.log(error)
      })


  }

  return (
    <Container>
        <Wrapper>
        {recommend?<Title>Rekomendowane: {recommend.map(item => `${item},`)}</Title>:null}
        <Title>Produkty:</Title>
        <ProductsContainer>
          {list.map((item, index) => <Box onClick={() => handleClick(index)} key={index}>{item}</Box>)}
        </ProductsContainer>
        </Wrapper>
    </Container>
)};

export default Products;

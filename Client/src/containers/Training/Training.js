import React, {useState} from 'react';
import {Container, CenterContainer, Wrapper, Title, StyledButton, Text} from './styled'
import MedicalDataApi from "../../api/MedicalDataApi"

const Training = () => {

  const [train,setTrain] = useState(null)

  const trainData = () => {
  
  MedicalDataApi.train({"epochs":1000})
  .then(response =>
    setTrain(response.data)
  )
  .catch(error => {
    console.log(error)
  })
  }

  const showResult =
    train?
    <>
      <Title>Wynik:</Title>
      <Text>Training dataset score: {train.trainingDatasetScore}</Text>
      <Text>Test dataset score: {train.testDatasetScore}</Text>
      <Text>Completed epochs: {train.completedEpochs}</Text>
      <Text>Training time: {train.trainingTime}</Text>
      <Text>Validation reports: {train.validationReports && "-"}</Text>
      <Text>Test reports: {train.testReports && "-"}</Text>
    </>:
    null
  

  return (
    <Container>
      <CenterContainer>
        <Wrapper>
        <Title>Trenowanie sieci:</Title>
        <StyledButton onClick={trainData}>Start</StyledButton>
        {showResult}
        </Wrapper>
      </CenterContainer>
    </Container>
)};

export default Training;

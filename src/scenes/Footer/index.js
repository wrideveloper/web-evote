import React, { Component, Fragment } from 'react'
import { Container, Image, Grid, Button } from 'semantic-ui-react'
import { DaftarSosmed } from './components'
import styled from 'styled-components'

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <TopSection>
          <Container>
            <Grid columns="2" doubling verticalAlign="middle">
              <Grid.Column width="6">
                TUNGGU APA LAGI ? <b>GABUNG DENGAN WRI SEKARANG</b>
              </Grid.Column>
              <Grid.Column width="10">
                <a href="https://www.facebook.com/groups/WRIPolinema/">
                  <Button inverted>GABUNG SEKARANG</Button>
                </a>
              </Grid.Column>
            </Grid>
          </Container>
        </TopSection>
        <MiddleSection>
          <Container>
            <Grid columns="3" verticalAlign="middle" doubling relaxed>
              <Grid.Column width="4">
                <Image src={require('./images/logo.png')} fluid />
              </Grid.Column>
              <Grid.Column width="12">
                <DaftarSosmed />
              </Grid.Column>
            </Grid>
          </Container>
        </MiddleSection>
        <BottomSection>
          <Container>
            Copyright &copy; Workshop Riset Informatika 2018
          </Container>
        </BottomSection>
      </Fragment>
    )
  }
}

const TopSection = styled.div`
  background-color: #f2711c;
  padding-top: 35px;
  padding-bottom: 35px;
  color: #fff;
  font-size: 15px;
  word-spacing: 1px;
`

const MiddleSection = styled.div`
  background-color: #0f0f0f;
  color: white;
  padding-top: 50px;
  padding-bottom: 50px;
`

const BottomSection = styled.div`
  background-color: black;
  color: white;
  padding-top: 15px;
  padding-bottom: 15px;
`

export default Footer

import React, { Component, Fragment } from 'react'
import { SectionItem } from '../../../../components'
import { Grid } from 'semantic-ui-react'

class DaftarSosmed extends Component {
  render() {
    return (
      <Fragment>
        <Grid columns='3' stackable>
          <Grid.Row>
            <Grid.Column>
              <a href='https://www.facebook.com/groups/wripolinema/'>
                <SectionItem
                  title='Facebook'
                  icon='facebook'
                  description='wripolinema'
                  color='blue'
                  size='tiny'
                  inverted
                />
              </a>
              <br />
              <a href='https://www.instagram.com/wri_polinema/'>
                <SectionItem
                  title='Instagram'
                  icon='instagram'
                  description='wri_polinema'
                  color='pink'
                  size='tiny'
                  inverted
                />
              </a>
              <br />
              <a href='https://www.youtube.com/channel/UCRDuxyMCKmyaX5rRDFo-RCQ'>
                <SectionItem
                  title='Youtube'
                  icon='youtube'
                  description='Workshop Riset Informatika'
                  color='red'
                  size='tiny'
                  inverted
                />
              </a>
            </Grid.Column>
            <Grid.Column>
              <a href='https://github.com/wrideveloper/'>
                <SectionItem
                  title='Github'
                  icon='github'
                  description='wrideveloper'
                  size='tiny'
                  inverted
                />
              </a>
              <br />
              <a href='https://medium.com/wripolinema'>
                <SectionItem
                  title='Medium'
                  icon='medium'
                  description='wripolinema'
                  color='white'
                  size='tiny'
                  inverted
                />
              </a>
              <br />
              <a href='https://www.linkedin.com/company/wripolinema/'>
                <SectionItem
                  title='Linkedin'
                  icon='linkedin'
                  description='wripolinema'
                  color='blue'
                  size='tiny'
                  inverted
                />
              </a>
            </Grid.Column>
            <Grid.Column>
              <SectionItem
                title='Email'
                icon='mail'
                description='wripolinema@gmail.com'
                color='orange'
                size='tiny'
                inverted
              />
              <br />
              <a href='https://goo.gl/maps/n3AHzc5yrv92'>
                <SectionItem
                  title='Alamat'
                  icon='map marker alternate'
                  description='Politeknik Negeri Malang'
                  color='red'
                  size='tiny'
                  inverted
                />
              </a>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Fragment>
    )
  }
}

export default DaftarSosmed

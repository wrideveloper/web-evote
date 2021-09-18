import React, { Component, Fragment } from 'react'
import { Container, Grid, Button } from 'semantic-ui-react'
import { Margin, Section, SectionTitle } from '../../components'
import { Link } from 'react-router-dom'
import Question from './components/Question'

class Faq extends Component {
  question = [
    {
      question: 'Apakah Ada Seleksi Untuk Bergabung Ke WRI ?',
      answer:
        'Untuk menjadi member tidak ada seleksi, WRI terbuka untuk seluruh mahasiswa JTI Polinema, tapi untuk pengurus ada, karena kami membutuhkan mahasiswa yang benar - benar berkomitmen untuk mengembangkan komunitas kami'
    },
    {
      question: 'Cara Gabung di WRI Bagaimana Ya ?',
      answer:
        'Kalau untuk member bisa langsung join di grup facebook WRI dan jangan lupa follow IG WRI, kalau untuk pengurus menunggu open recruitment'
    },
    {
      question: 'Bedanya Member Biasa dengan Pengurus Apa Ya ?',
      answer:
        'Pengurus memiliki kewajiban lebih dari member, namun ada beberapa kelebihan apabila menjadi pengurus'
    },
    {
      question: 'Kelebihan Jadi Pengurus WRI apa ya ?',
      answer:
        'Pengurus WRI bisa mendapatkan training intensif, video tutorial premium, serta relasi dari startup dan komunitas luar'
    },
    {
      question: 'Apakah di WRI Boleh Pindah Divisi ?',
      answer:
        'Pemilihan divisi hanya untuk pengurus saja, jadi member boleh mempelajari materi apa saja yang diinginkan'
    },
    {
      question: 'Apakah dengan Mengikuti WRI Bisa Mendapatkan SKKM ?',
      answer:
        'Iya, Karena SKKM itu didapat melalui sertifikat, di WRI kita sering mengikuti seminar dan workshop yang ada di dalam maupun luar kampus'
    }
  ]

  renderQuestion() {
    return this.question.map((item, index) => (
      <Grid.Column key={index}>
        <Question question={item.question} answer={item.answer} />
      </Grid.Column>
    ))
  }

  render() {
    return (
      <Fragment>
        <Section bgImage={require('./images/background.jpg')}>
          <Grid columns="2" doubling textAlign="center">
            <Grid.Column width="1">
              <Link to="/">
                <Button icon="arrow left" inverted size="large" />
              </Link>
            </Grid.Column>

            <Grid.Column width="15">
              <SectionTitle
                title="FAQ"
                description="Pertanyaan yang sering ditanyakan"
              />
            </Grid.Column>
          </Grid>
        </Section>

        <Margin top={50}>
          <Container>
            <Grid relaxed columns="2" doubling>
              {this.renderQuestion()}
            </Grid>
          </Container>
        </Margin>
      </Fragment>
    )
  }
}

export default Faq

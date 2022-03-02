import { useState } from 'react'
import { Header, Button, Grid } from 'semantic-ui-react'
import Layout from '@components/Layout/Layout'
const RandomPage = () => {
  const [randomResponse, setRandomResponse] = useState('No')

  const randomTerm = () => {
    const roll = Math.round(Math.random())
    if (roll) {
      setRandomResponse('Yes')
    } else {
      setRandomResponse('No')
    }
  }

  return (
    <Layout>
      <Header
        as="h1"
        style={{ color: '#21ba45', fontSize: '200px', textAlign: 'center' }}
      >
        {randomResponse}
      </Header>
      <Grid columns={3} style={{ textAlign: 'center' }}>
        <Grid.Row>
          <Grid.Column />
          <Grid.Column>
            <Button onClick={randomTerm} positive>
              Volver a intentar
            </Button>{' '}
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column />
          <Grid.Column>
            <Button href={'/'}>Volver a inicio</Button>{' '}
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>
      </Grid>
    </Layout>
  )
}

export default RandomPage

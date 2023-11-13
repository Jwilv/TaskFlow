import { Layout } from '@/components/layouts'
import { EntryList } from '@/components/ui'
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material'

export default function HomePage() {
  return (
    <Layout title='Task app'>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='pendientes' />
            <CardContent>
              <EntryList /> 
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='en progreso' />
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card sx={{ height: 'calc(100vh - 100px)' }}>
            <CardHeader title='terminados' />
          </Card>
        </Grid>
      </Grid>

    </Layout>
  )
}

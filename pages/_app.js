import PageLayout from '@components/PageLayout'
import '@styles/Global.css'

function App({ Component, pageProps }) {
  return (
    <PageLayout title='Next.js Server Template'>
      <Component {...pageProps} />
    </PageLayout>
  )
}

export default App
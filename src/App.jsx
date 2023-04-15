import Footer from 'components/Footer/Footer'
import Header from 'components/Header/Header'
import Layout from 'components/Layout/Layout'
import Main from 'components/Main/Main'

const App = () => {
  return (
    <div>
      <Header />
      <Layout>
        <Main />
        <Footer />
      </Layout>
    </div>
  )
}

export default App

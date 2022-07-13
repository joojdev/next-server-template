import Head from 'next/head'

function PageLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </>
  )
}

export default PageLayout
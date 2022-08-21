import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

// yes this has the same file name as layout.js,
// this is such a hack to get around the type system lol

type Props = {
  preview?: boolean
  children: React.ReactNode
  home?: any       // type script hot fix lmao
  layout_type: any // type script hot fix
}

const LayoutTSX = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default LayoutTSX

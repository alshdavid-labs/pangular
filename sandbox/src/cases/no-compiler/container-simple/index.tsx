import { render, Fragment } from 'preact'
import { y } from '@pangular/core'

const B = ({ value }: any) => {
  return <div>
    { value }
  </div>
}

const Component = () => {
  return <Fragment>
    <B 
      value='okok' 
      _useViewContainer={true} />
  </Fragment>
}

render(<Component/>, document.body)


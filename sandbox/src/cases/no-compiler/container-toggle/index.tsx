import { render, Fragment } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import { ViewContainer, y } from '@pangular/core'

const Component = () => {
  const [VC, setVC] = useState<ViewContainer|undefined>(undefined)

  const toggle = () => {
    if (!VC) {
      const vc = new ViewContainer()
      vc.$afterViewInit.toPromise().then(() => console.log('afterViewInit'))
      vc.$onInit.toPromise().then(() => console.log('onInit'))
      vc.$onDestroy.toPromise().then(() => console.log('onDestroy'))
      setVC(vc)
    } else {
      setVC(undefined)
    }
  }

  useEffect(() => toggle(), [])

  return <Fragment>
    <button 
      onClick={toggle}>
      Toggle
    </button>
    { 
      VC && <div 
      _viewContainer={VC}
      _useViewContainer={true}>
      Hi ok
      </div> 
    }
  </Fragment>
}

render(<Component/>, document.body)


import styled from 'styled-components'
import { ToastContainer } from 'react-toastify'

 const NotifyContainerStd = styled(ToastContainer)`
   &&&.Toastify__toast-container {
    z-index: 100;
  }
  .Toastify__toast {
    color: var(--white);
    background-color: var(--lightDark);
  }
  .Toastify__toast-body {
    font-family: 'Montserrat';
    font-weight: 600;
  }
`
export default NotifyContainerStd

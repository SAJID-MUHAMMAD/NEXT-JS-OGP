
import ServicesNav from "../components/Services/ServicesNav"


const layout = ({children}) => {
  return (
    <>
   <ServicesNav/>
    {children}
    </>
  )
}

export default layout
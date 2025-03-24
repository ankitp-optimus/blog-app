import  './homepage.css'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import Sidebars from '../../components/sidebar/Sidebars'



const Homepage = () => {
  return (
    <>
    <Header/>
    <div className='home'>
        <Posts/>
         <Sidebars/>
        
    </div>
    </>
  )
}

export default Homepage

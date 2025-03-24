import './single.css'
import Sidebars from '../../components/sidebar/Sidebars'
import SinglePost from '../../components/singlepost/SinglePost'

const Single = () => {
  return (
    <div className='single'>
        <SinglePost/>
         <Sidebars/>
    </div>
  )
}

export default Single

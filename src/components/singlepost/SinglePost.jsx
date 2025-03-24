import './singlepost.css'

const SinglePost = () => {
  return (
    <div className='singlePost'>
     <div className="singlePostWrapper">
        <img src="./images.jpeg" alt="" className="singlePostImg" />
        <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
        <div className="singlePostEdit">
         <li className='singlePostIcon'><ion-icon name="create-outline"></ion-icon></li> 
          <li  className='singlePostIcon'><ion-icon name="trash-outline"></ion-icon></li>
        </div>
        </h1>
        
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author:<b>safak</b> </span>
            <span className="singlePostAuthor">1 hour ago</span>
        </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa delectus aspernatur accusamus saepe eius, pariatur molestias. Libero quaerat, in praesentium, assumenda ab harum excepturi impedit quis nobis amet iste ad.
             Accusantium eveniet repudiandae, sit dolor eaque culpa, iure ipsa quis optio a maxime sed praesentium repellat impedit vitae, esse rem.</p>
     </div>
      
    </div>
  )
}

export default SinglePost

import React from 'react'
import '../Footer/footer.css'
import Mail from '../Assets/Mail_Icon.png';
import LinkedIn from '../Assets/LinkedIn_Icon.png';

const Footer = () => {
  return (
    <footer className='footer'>
        <p>Copyright © 2024 Ahad Chughtai | All Rights Reserved.</p>
        <div className='imgs'>
            <a href="mailto:ahadchughtai007@gmail.com"><img src={Mail} alt="Email"></img></a>
            <a target="_blank" href="https://www.linkedin.com/in/ahad-chughtai/"><img src={LinkedIn} alt="LinkedIn"></img></a>
        </div>
    </footer>
  )
}

export default Footer

//<a href="https://www.flaticon.com/free-icons/deep-learning" title="deep learning icons">Deep learning icons created by Freepik - Flaticon</a> CS
//<a href="https://www.flaticon.com/free-icons/app-development" title="app development icons">App development icons created by Freepik - Flaticon</a> app & web dev
//<a href="https://www.flaticon.com/free-animated-icons/electricity" title="electricity animated icons">Electricity animated icons created by Freepik - Flaticon</a> electrical engineering
//<a href="https://www.flaticon.com/free-animated-icons/computer" title="computer animated icons">Computer animated icons created by Freepik - Flaticon</a> 3D Modeling
//<a href="https://www.flaticon.com/free-icons/email" title="email icons">Email icons created by Freepik - Flaticon</a>
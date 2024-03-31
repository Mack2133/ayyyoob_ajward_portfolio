import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/instagram'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/stackoverflow'

function Footer() {
return (
    <div>
            <footer className="p-4 text-center min-h-[150px] flex items-center justify-between px-32">
                    <div className=''>
                            <div className="flex flex-row items-center justify-center space-x-5">
                                    <SocialIcon url="https://www.github.com/Mack2133" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                                    <SocialIcon url="https://www.linkedin.com/in/ayyoob-ajward-4b6a1b1b7/" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                                    <SocialIcon url="https://stackoverflow.com/users/16484986/ayyoob-ajward" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                                    <SocialIcon url="https://www.instagram.com/ayyoob.ajward" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                            </div>
                    </div>
                    <p className='font-bold'>&copy; 2021. All rights reserved.</p>
            </footer>
    </div>
)
}

export default Footer
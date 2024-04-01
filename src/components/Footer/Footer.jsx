import { SocialIcon } from 'react-social-icons'

function Footer() {
    return (
        <footer className="p-4 text-center min-h-[150px] flex flex-col md:flex-row items-center justify-between md:px-10 lg:px-32 bg-gray-100 py-10">
            <div className="flex items-center">
                <div className="mb-5 space-x-5 md:mr-auto md:mb-0">
                    <SocialIcon url="https://www.github.com/Mack2133" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://www.linkedin.com/in/ayyoob-ajward-4b6a1b1b7/" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://stackoverflow.com/users/16484986/ayyoob-ajward" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                    <SocialIcon url="https://www.instagram.com/ayyoob.ajward" fgColor="#fff" bgColor="#000" style={{ height: 50, width: 50 }} />
                </div>
            </div>
            <div>
                <p className='font-bold'>&copy; 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer

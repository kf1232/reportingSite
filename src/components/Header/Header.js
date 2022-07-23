import './Header.css'

function Header() {
    return (
        <div className='header'>
            <div className='headerLeft'>
                <div className='mainSelectorTab'>
                    Company Name<br/>Here
                </div>
                <div className='mainSelectorTab'>
                    Home
                </div>
                <div className='mainSelectorTab'>
                    VSOP Main
                </div>
            </div>
            <div>
                SSO Component
            </div>
        </div>
    )
}

export default Header
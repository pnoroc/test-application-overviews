import './ApplicationSideNav.css';

export default function ApplicationSideNav({isActivated, children, onSideNavClosed}: any) {
    return (isActivated ?
            <div className="sidenav-wrapper">
                <button onClick={() => onSideNavClosed()}>x</button>
                {children}
                <br/>
            </div>
            : null
    )
}
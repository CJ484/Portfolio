import { AboutMe, Contact, Portfolio, Home } from "../../pages"

const routes = {
    HOME: {
        title: 'Home',
        path: '/',
        element: <Home />,
        exact: true
    },
    CONTACT: {
        title: 'Contact',
        path: '/pages/contact/index',
        element: <Contact />,
        exact: true
    },
    ABOUT_ME: {
        title: 'About_Me',
        path: '/pages/aboutMe/index',
        element: <AboutMe />,
        exact: true
    },
    PORTFOLIO: {
        title: 'Portfolio',
        path: '/pages/Portfolio/index',
        element: <Portfolio />,
        exact: true
    }
    
}

export default routes;
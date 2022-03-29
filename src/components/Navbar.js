import { Nav, Navbar } from 'react-bootstrap'
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import CustomButton from '../components/CustomButton';


const NavHeader = () => {

  return (
    <div className='px-3 py-3 py-sm-3 py-lg-1 position-sticky sticky-top bg-white border'>
			<Navbar collapseOnSelect bg='white' expand='xl' className='w-100'>
				<Navbar.Brand as={Link} to='/'>
                <Logo height="45"/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='d-md-flex flex-fill justify-content-md-center'>
						<Nav.Link activeClassName="active" as={Link} to='/' className='px-2 px-sm-2 px-lg-3 py-2'>
							Home
						</Nav.Link>
						<Nav.Link
							as={Link}
							to='/'
							className='px-2 px-sm-2 px-lg-3 py-2'>
							What we do
						</Nav.Link>
						<Nav.Link
							as={Link}
							to='/'
							className='px-2 px-sm-2 px-lg-3 py-2'>
							Benefits
						</Nav.Link>
						<Nav.Link
							as={Link}
							to='/'
							className='px-2 px-sm-2 px-lg-3 py-2'>
							Contact
						</Nav.Link>
						<Nav.Link
							as={Link}
							to='/'
							className='px-2 px-sm-2 px-lg-3 py-2'>
							Demo
						</Nav.Link>
					</Nav>
					<div className='px-2 px-sm-2 px-lg-3 py-2'>
                        <Link to='/login'>
                            <CustomButton title="Login" customButtonStyling={customButtonStyling}/>
						</Link>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</div>
  )
}

export default NavHeader

const customButtonStyling = {
    background: "var(--white)",
    color: "var(--white)",
    border: "1px solid var(--red)",
    padding: ".5rem 2rem",
}
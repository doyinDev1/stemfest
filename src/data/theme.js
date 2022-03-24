import logo from '../app/images/logo.png'
import logoFooter from '../app/images/logo.png'
import logoDrop from '../app/images/logo-bookmark-drop.svg'
import game from '../app/images/game.svg'
import sport from '../app/images/sport.svg'
import toy from '../app/images/toy.svg'
import arrow from '../app/images/icon-arrow.svg'
import close from '../app/images/icon-close.svg'
import facebook from '../app/images/icon-facebook.svg'
import twitter from '../app/images/icon-twitter.svg'
import hamburger from '../app/images/icon-hamburger.svg'
import error from '../app/images/icon-error.svg'
import feature1 from '../app/images/illustration-features-tab-1.svg'
import feature2 from '../app/images/illustration-features-tab-2.svg'
import feature3 from '../app/images/illustration-features-tab-3.svg'
import background from '../app/images/background.jpg'
import buttonBg from '../app/images/buttonBg.png'
import child from '../app/images/child.png'
import hero from '../app/images/illustration-hero.svg'
import rectangleLeft from '../app/images/rectangleLeft.svg'
import rectangleRight from '../app/images/rectangleRight.svg'
import bgDot from '../app/images/bg-dots.svg'
import open from '../app/images/icon-hamburger.svg'
import arrowUp from '../app/images/icon-arrow-up.svg'

const theme = {
	colors: {
		pryBlue: 'hsl(231, 69%, 60%)',
		blue: '#013261',
		yellow: '#FFC100',
		pryRed: 'hsl(0, 94%, 66%)',
		// neuBlue: 'hsl(229, 8%, 60%)',
		neuBlue: '#013261',
		// neuDarkBlue: 'hsl(229, 31%, 21%)',
		neuDarkBlue: '#013261',
		neuWhite: 'hsl(0, 0%, 97%)',
		white: '#fff',
		bgDrop: 'rgba(37, 43, 70, 0.953)',
	},
	font: {
		rubik: `'Rubik', sans-serif`,
	},
	weight: {
		regular: '400',
		medium: '600',
		mid: '500',
	},
	queries: {
		mobileMin: `${340 / 16}rem`,
		mobileMini: `${375 / 16}rem`,
		mobileSmall: `${490 / 16}rem`,
		mobileMid: `${540 / 16}rem`,
		mobile: `${576 / 16}rem`,
		tablet: `${786 / 16}rem`,
		deskMini: `${976 / 16}rem`,
		deskMid: `${1129 / 16}rem`,
	},
	button: {
		padding: '0.625rem 1.5rem',
		mobilePad: '0.625rem 0.8rem',
		radius: '0.3125rem',
		shadow: '0 8px 8px -4px #4a5ecf20',
	},
	hamburger: {
		open: open,
		close: close,
	},
	btnNav: 'REGISTER',
	btn2Nav: 'REGISTER',
	background: background,
	buttonBg: buttonBg,
	child: child,
	rectangleLeft: rectangleLeft,
	rectangleRight: rectangleRight,
	bgDot: bgDot,
	logo: {
		header: logo,
		drop: logoDrop,
		footer: logoFooter,
	},
	icon: {
		arrow: arrow,
		arrowUp: arrowUp,
		facebook: facebook,
		twitter: twitter,
		hamburger: hamburger,
		close: close,
		error: error,
	},
	heroData: {
		title: 'A Brighter Future',
		subTitle: 'for your Kids',
		text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec maximus felis ac tortor accumsan venenatis.',
		btnRegister: 'Register',
		illustration: hero,
	},
	ctaData: {
		title: 'Stay up-to-date with what we’re doing',
		text: '35,000+ ALREADY JOINED',
		btnText: 'Contact Us',
		placeholder: 'Enter your email address',
		errorMessage: "Whoops, make sure it's an email!",
	},
	downloadData: {
		title: 'Why Choose Us?',
		subtitle:
			'Neque porro quisquam est qui dolorem ipsum quia, >Neque porro quisquam est qui dolorem ipsum quia',
		cardShadow: '0 10px 20px -5px #4a5ecf20',
		cardData: [
			{
				id: 1,
				image: game,
				imageAlt: 'games',
				title: 'Outdoor Games',
				description: 'Neque porro quisquam est qui dolorem ipsum quia, >Neque porro quisquam est qui dolorem ipsum quia',
				margin: '0px',
			},
			{
				id: 2,
				image: sport,
				imageAlt: 'sports',
				title: 'Sport Activities',
				description: 'Neque porro quisquam est qui dolorem ipsum quia, >Neque porro quisquam est qui dolorem ipsum quia',
				margin: '0px',
			},
			{
				id: 3,
				image: toy,
				imageAlt: 'toys',
				title: 'Table/Floor Toys',
				description: 'Neque porro quisquam est qui dolorem ipsum quia, >Neque porro quisquam est qui dolorem ipsum quia',
				margin: '0px',
			},
		],
	},
	faqData: {
		title: 'Frequently Asked Questions',
		subtitle:
			'Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us.',
		faqButton: {
			text: 'More Info',
			link: '/',
		},
		faqs: [
			{
				question: '',
				answer:
					' ',
			},
			{
				question: '',
				answer:
					'',
			},
			{
				question: '',
				answer:
					'',
			},
			{
				question: '',
				answer:
					'',
			},
		],
	},
}

export default theme

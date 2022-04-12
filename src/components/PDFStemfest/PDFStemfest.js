// import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';
// import Lato from '../../assets/fonts/Lato-Black.ttf';
// import LeagueSpartan from '../../assets/fonts/leaguespartan-bold.ttf';

// Font.register({
// 	family: 'LeagueSpartan',
// 	format: 'truetype',
// 	fonts: [{ src: LeagueSpartan, fontWeight: 400 }],
// });

// Font.register({
// 	family: 'Lato',
// 	format: 'truetype',
// 	fonts: [{ src: Lato, fontWeight: 900 }],
// });
// Font.register({
// 	family: 'Oswald',
// 	src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
// });

// const PDFStemfest = (props) => {
// 	const imageSrc = props?.ImageLink;

// 	return (
// 		<Document>
// 			<Page size="A4" orientation="landscape">
// 				<View style={styles.mainView}>
// 					<Image src={imageSrc} style={styles.image} width="100%" height="100%" />
// 					<View
// 						style={{
// 							width: '270px',
// 							height: '270px',
// 							backgroundColor: '#231f1e',
// 							marginLeft: '700px',
// 						}}
// 					>
// 						<View
// 							style={{
// 								display: 'flex',
// 								textAlign: 'center',
// 								marginLeft: '-15px',
// 								paddingTop: '50px',
// 							}}
// 						>
// 							<Text
// 								style={{
// 									color: 'white',
// 									transform: 'rotate(-90deg)',
// 									paddingTop: '-100px',
// 									display: 'flex',
// 									paddingLeft: '-50px',
// 									fontSize: '10px',
// 									top: '10px',
// 									textTransform: 'uppercase',
// 									justifyContent: 'center',
// 									family: 'Oswald',
// 								}}
// 							>
// 								{props.nameData}
// 							</Text>

// 							<Text
// 								style={{
// 									color: 'white',
// 									transform: 'rotate(-90deg)',
// 									paddingTop: '-70px',
// 									paddingLeft: '-57px',
// 									fontSize: '10px',
// 									fontFamily: 'Oswald',
// 								}}
// 							>
// 								{' '}
// 								COMPLETED ONLINE LEARNING FOR
// 							</Text>

// 							<Text
// 								style={{
// 									color: 'white',
// 									transform: 'rotate(-90deg)',
// 									paddingTop: '-46px',
// 									paddingLeft: '-37px',
// 									fontSize: '12px',
// 									fontFamily: 'Oswald',
// 								}}
// 							>
// 								{props.courseName.toUpperCase()}
// 							</Text>

// 							<Text
// 								style={{
// 									color: 'white',
// 									transform: 'rotate(-90deg)',
// 									paddingTop: '-23px',
// 									display: 'flex',
// 									paddingLeft: '-18px',
// 									fontFamily: 'Oswald',
// 								}}
// 							>{`TICKET NO: #${props?.Ticket}`}</Text>
// 						</View>
// 					</View>
// 					{/* <View style={styles.view}>
// 						<View style={{ flex: 1 }}></View>
// 					</View> */}
// 				</View>
// 			</Page>
// 		</Document>
// 	);
// };

// export default PDFStemfest;

// const styles = StyleSheet.create({
// 	mainView: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		// alignItems: 'center',
// 		// marginHorizontal: 20,
// 		// marginVertical: 30,
// 	},

// 	view: {
// 		position: 'absolute',
// 	},
// 	image: {
// 		position: 'absolute',
// 		zIndex: 20,
// 		height: '100vh',
// 		width: '100vw',
// 		// marginLeft: '-20px',
// 	},
// });

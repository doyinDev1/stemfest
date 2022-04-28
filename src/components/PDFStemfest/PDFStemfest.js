import { Document, Page, Text, View, StyleSheet, Font, Image, Canvas } from '@react-pdf/renderer';
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
Font.register({
	family: 'Oswald',
	src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

const PDFStemfest = ({name, imgSrc}) => {

	// const imgSrc2 = `http://api.qrserver.com/v1/create-qr-code/?data=${qr_code}&size=200x200`

	return (
		<Document>
		<Page size="A4" orientation="landscape" >

			<View style={styles.mainView}>
				<View style={styles.view}>
					<View style={{ flex: 1 }}>

					  <Image
					src={imgSrc}
					style={styles.imageT}
				/>
					  <View style={{
						  display: "flex",
							alignText: 'center',
							  justifyContent: 'center',
								width: '100vw'
						}}>
					<Text
							style={{
								color: '#000',
								// marginVertical: 20,
								marginBottom: -140,
								// marginLeft: 250,
								fontSize: 50,
								fontFamily: 'Oswald',
								textAlign: 'center',
								fontWeight: '900',
								display: "flex", 
								alignSelf: "center",
                               marginTop: -60,

							}}
						>
{`${name}`}					</Text>  
					  
					  </View>
					  
						
					</View>
				</View>
				{/* <Text
					style={{
						fontFamily: 'Oswald',
						fontSize: 15,
						marginTop: -50,
						marginLeft: 0,
						position: 'absolute',
						top: '77%',
						left: '46%',
						color: '#000',
					}}
				>
PASS NO: 05678				</Text> */}
				<Image
					src="https://res.cloudinary.com/naijakids/image/upload/v1650445787/stemfest_jp3yjx.png"
					style={styles.image}
				/>
			</View>
		</Page>
	</Document>
	);
};

export default PDFStemfest;

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		justifyContent: 'center',
		// alignItems: 'center',
		// marginHorizontal: 20,
		// marginVertical: 30,
	},

	view: {
		position: 'absolute',
	},
	image: {
		position: 'absolute',
		zIndex: 20,
		height: '100vh',
		width: '100vw',
		// marginLeft: '-20px',
	},
	imageT: {
		position: 'absolute',
		zIndex: 20,
		height: '200px',
		width: '200px',	
		marginTop: -80,

	}
});

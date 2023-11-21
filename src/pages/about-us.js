import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, LinkBox, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GiFairyWings } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"about-us"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section sm-padding="8px 0 8px 0" quarkly-title="Header-2">
			<Override
				slot="SectionContent"
				flex-direction="column"
				justify-content="space-between"
				align-items="center"
				lg-flex-direction="row"
			/>
			<Box
				display="flex"
				padding="12px 0 18px 0"
				justify-content="center"
				align-items="flex-start"
				flex-direction="row"
				width="100%"
				sm-width="50%"
				sm-align-items="center"
				sm-flex-direction="row"
				sm-justify-content="flex-start"
				md-width="50%"
				lg-width="70%"
				md-justify-content="flex-start"
				lg-justify-content="flex-start"
			>
				<LinkBox
					flex-direction="row"
					href="/index"
					display="flex"
					grid-gap="18px"
					max-width="fit-content"
				>
					<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
					<Text
						margin="0"
						md-margin="0px 0 0px 0"
						text-align="left"
						font="--headline3"
						sm-margin="0px 0 0px 0"
						display="block"
					>
						Awesome Company
					</Text>
				</LinkBox>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="100%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
				justify-content="center"
				lg-justify-content="flex-end"
				font="50px --fontFamily-googlePlusJakartaSans"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0 0px 0px 0px"
					background="rgba(255, 255, 255, 0)"
					lg-background="#ffffff"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Text"
					font="normal 600 16px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					text-transform="uppercase"
					letter-spacing="1px"
					sm-font="normal 600 14px/1.5 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-margin="0px 2px 0px 0px"
					lg-margin="0px 0px 0px 0px"
				/>
				<Override
					slot="Button Icon :closed"
					category="fi"
					icon={FiMenu}
					size="32px"
					padding="5px 7px 5px 7px"
					border-radius="50px"
				/>
				<Override
					slot="Button Icon"
					width="28px"
					height="28px"
					category="fi"
					icon={FiMenu}
					color="--dark"
					size="24px"
					lg-width="32px"
					lg-height="32px"
				/>
				<Override
					slot="Cross"
					lg-width="32px"
					lg-height="32px"
					size="32px"
					top="24px"
					right="24px"
				/>
				<Box
					align-items="center"
					lg-justify-content="center"
					lg-align-items="flex-start"
					justify-content="center"
					display="flex"
					lg-flex-direction="column"
					lg-margin="0px auto 0px auto"
					lg-min-width="300px"
					lg-max-width="1280px"
					lg-width="90%"
					lg-padding="24px 0px 48px 0px"
				>
					<Box
						display="none"
						lg-width="100%"
						lg-margin="0px 0px 24px 0px"
						lg-display="flex"
						lg-padding="12px 0px 12px 0px"
					>
						<LinkBox flex-direction="row" href="/index" display="flex" grid-gap="18px">
							<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
							<Text
								margin="0"
								md-margin="0px 0 0px 0"
								text-align="left"
								font="--headline3"
								sm-margin="0px 0 0px 0"
								display="block"
							>
								Awesome Company
							</Text>
						</LinkBox>
					</Box>
					<Components.QuarklycommunityKitMenu
						display="flex"
						filterMode="exclude"
						filterPages="/index"
						grid-gap="8px"
						lg-flex-direction="column"
						lg-padding="6px 0px 6px 0px"
						lg-margin="0px 0px 24px 0px"
						align-items="center"
						flex-wrap="wrap"
						overflow-x="visible"
						overflow-y="visible"
						lg-align-items="flex-start"
					>
						<Override
							slot="link"
							color="--darkL2"
							hover-color="--primary"
							font="--lead"
							text-decoration-line="initial"
							transition="color 0.1s ease 0s"
							lg-font="--lead"
						/>
						<Override slot="item-active" border-width={0} />
						<Override slot="item" padding="6px 8px 6px 8px" />
						<Override slot="link-active" cursor="default" color="--primary" />
						<Override slot="link-about" />
					</Components.QuarklycommunityKitMenu>
					<Box
						width="25%"
						display="none"
						lg-width="100%"
						lg-flex-direction="column"
						lg-align-items="flex-start"
						lg-display="flex"
						justify-content="space-around"
						align-items="center"
						flex-wrap="wrap"
						lg-margin="0px 0px 0px 0px"
					>
						<Link
							font="--lead"
							padding="10px 0px 10px 0px"
							margin="0px 0px 6px 0px"
							href="tel:12345678"
							text-decoration-line="initial"
							color="--dark"
							lg-margin="0px 0px 24px 0px"
						>
							+1(234)567-89-00
						</Link>
						<SocialMedia
							instagram="https://instagram.com/instagram"
							margin="0px 0px 0px 0px"
							facebook="https://www.facebook.com/quarklyapp/"
							youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw"
							lg-display="flex"
							lg-grid-gap="12px"
						>
							<Override slot="link-twitter" margin="0px 0px 0px 5px">
								<div />
							</Override>
							<Override
								slot="link"
								border-radius="50%"
								background="transparent"
								hover-color="--light"
								display="flex"
								margin="0 5px 0 5px"
								padding="5x 5px 5px 5px"
								width="32px"
								height="32px"
								align-items="center"
								justify-content="center"
							/>
							<Override slot="icon" size="32px" border-radius="50px" color="--darkL2" />
							<Override slot="link-facebook" margin="0px 5px 0px 0px">
								<div />
							</Override>
						</SocialMedia>
					</Box>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 20px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="16px 16px 16px 0px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 30px 0px"
				font="normal 400 16px --fontFamily-googlePlusJakartaSans"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					padding="0px 16px 0px 0px"
				>
					Our mission is to make your life easier.
				</Text>
			</Box>
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="flex-start"
				align-items="flex-start"
				lg-align-items="center"
				lg-margin="0px 0px 0px 0px"
				sm-padding="0px 0px 0px 0px"
				padding="28px 0px 16px 16px"
				lg-width="100%"
				md-margin="0px 0px 20px 0px"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 0px 0px"
					color="--darkL1"
					font="--lead"
					lg-text-align="center"
					display="flex"
					align-items="flex-start"
				>
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
					<br />
					<br />
					Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
				</Text>
			</Box>
			<Box
				display="grid"
				width="100%"
				margin="80px 0px 0px 0px"
				lg-margin="40px 0px 0px 0px"
				grid-template-columns="repeat(3, 1fr)"
				grid-gap="32px"
				sm-grid-template-columns="1fr"
			>
				<Image
					src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=400&q=80"
					object-fit="cover"
					width="100%"
					height="100%"
					grid-column="1 / span 1"
					border-radius="24px"
					srcSet="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
				<Image
					src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=800&q=80"
					object-fit="cover"
					width="100%"
					height="100%"
					grid-column="2 / span 2"
					border-radius="24px"
					sm-grid-column="1 / span 1"
					srcSet="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=500&q=80 500w,https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=800&q=80 800w,https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1080&q=80 1080w,https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=1600&q=80 1600w,https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=2000&q=80 2000w,https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=2600&q=80 2600w,https://images.unsplash.com/photo-1525130413817-d45c1d127c42?auto=format&fit=crop&w=3200&q=80 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
		</Section>
		<Section
			padding="60px 0 60px 0"
			sm-padding="40px 0 40px 0"
			background="--color-light"
			display="flex"
			flex-direction="column"
		>
			<Override slot="SectionContent" flex-wrap="wrap" flex-direction="row" />
			<Text
				margin="0px"
				font="--headline1"
				md-font="--headline2"
				color="--dark"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				17
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
			<Text
				margin="0px"
				font="--base"
				color="--grey"
				width="25%"
				padding="0px 32px 0px 0px"
			>
				Hi! I'm a paragraph. Click here to add your own text and edit me. It’s a piece of cake.
			</Text>
		</Section>
		<Section background="#111828" padding="90px 0 120px 0" quarkly-title="Team-5">
			<Text margin="0px 0px 0px 0px" color="--light" text-align="left" font="600 48px --fontFamily-sans">
				Our team
			</Text>
			<Text
				margin="25px 600px 0px 0px"
				text-align="left"
				color="#b2bdc6"
				font="300 22px/150% --fontFamily-sansHelvetica"
				lg-margin="25px 0 0px 0px"
			>
				We are united by our passion for innovation and our commitment to delivering high-quality solutions to our clients.
			</Text>
			<Box
				min-width="100px"
				min-height="100px"
				display="grid"
				margin="70px 0px 0px 0px"
				grid-template-columns="repeat(4, 1fr)"
				grid-template-rows="repeat(2, 1fr)"
				grid-gap="40px 35px"
				md-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-rows="repeat(4, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-template-rows="auto"
			>
				<Box min-width="100px" min-height="100px" display="flex" flex-direction="column">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20:54:40.886Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/2q.jpg?v=2023-04-17T20%3A54%3A40.886Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Leslie Alexander
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Co-Founder / CEO
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21:06:45.941Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/15q.jpg?v=2023-04-17T21%3A06%3A45.941Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Michael Foster
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Co-Founder / CO
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Glasgow, Scotland
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21:06:57.036Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/1q.jpg?v=2023-04-17T21%3A06%3A57.036Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Dries Vincent
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Business Relations
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Niagara Falls, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21:07:08.834Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/14q.jpg?v=2023-04-17T21%3A07%3A08.834Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Lindsay Walton
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Front-end Developer
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						London, England
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21:11:29.178Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/8q.jpg?v=2023-04-17T21%3A11%3A29.178Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Courtney Henry
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Designer
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21:11:40.598Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/11q.jpg?v=2023-04-17T21%3A11%3A40.598Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Tom Cook
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Director of Product
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21:12:01.188Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/10q.jpg?v=2023-04-17T21%3A12%3A01.188Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Whitney Francis
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Copywriter
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
				<Box min-width="100px" min-height="100px">
					<Image
						src="https://uploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21:12:16.116Z"
						display="block"
						width="100%"
						border-radius="18px"
						srcSet="https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/643d8e6ebf72b300207d7233/images/5q.jpg?v=2023-04-17T21%3A12%3A16.116Z&quality=85&w=3200 3200w"
						sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
					/>
					<Text margin="25px 0px 0px 0px" color="--light" font="600 18px --fontFamily-sans">
						Leonard Krasner
					</Text>
					<Text margin="8px 0px 0px 0px" color="#b2bdc6" font="300 18px --fontFamily-sansHelvetica">
						Senior Designer
					</Text>
					<Text margin="6px 0px 0px 0px" color="#6a7181" font="300 16px --fontFamily-sansHelvetica">
						Toronto, Canada
					</Text>
				</Box>
			</Box>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"655ccff11d712a00232b9671"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
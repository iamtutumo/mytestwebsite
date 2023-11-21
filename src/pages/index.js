import React from "react";
import theme from "theme";
import { Theme, Link, Icon, Text, LinkBox, Box, Section, Image, Span, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { GiFairyWings } from "react-icons/gi";
import { FiMenu } from "react-icons/fi";
import { MdArrowDownward } from "react-icons/md";
import { FaGalacticRepublic, FaHornbill, FaReact, FaAviato, FaFacebook, FaInstagram, FaTwitterSquare, FaGithub, FaYoutube } from "react-icons/fa";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
			<Components.QuarklycommunityKitMobileSidePanel
				menuPosition="full"
				breakpoint="lg"
				width="100%"
				sm-width="50%"
				md-width="50%"
				lg-width="30%"
				justify-content="center"
				lg-justify-content="flex-end"
			>
				<Override slot="Children" md-display="flex" />
				<Override
					slot="Content"
					padding="0px 0px 0px 0px"
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
		<Section
			background="linear-gradient(0deg,rgba(4, 8, 12, 0.6) 7.6%,rgba(8, 16, 52, 0.6) 43.3%),--color-darkL2 url(https://uploads.quarkly.io/655ccff11d712a00232b9673/images/pwkb-blog-1024x576.jpg?v=2023-11-21T20:22:03.250Z) center/cover"
			padding="60px 0"
			sm-padding="40px 0"
			color="--light"
			font="--base"
		>
			<Box margin="-16px -16px -16px -16px" display="flex">
				<Box display="flex" padding="16px 16px 16px 16px" width="75%" md-width="100%">
					<Box display="flex" flex-direction="column">
						<Text color="--lightD2" letter-spacing="1px" text-transform="uppercase" margin="0">
							Excellence in everything
						</Text>
						<Text as="h1" font="--headline1" md-font="--headline2" margin="10px 0">
							Striving for perfection in everything we do. Unparalleled service for everyone.
						</Text>
					</Box>
				</Box>
			</Box>
			<Box text-align="center" margin="96px 0 0 0">
				<Text margin="8px 0" text-transform="uppercase">
					Who we are
				</Text>
				<Icon category="md" margin="0 auto" icon={MdArrowDownward} />
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#EDF2F6" sm-padding="60px 0 60px 0">
			<Box
				width="100%"
				display="flex"
				flex-direction="column"
				md-width="100%"
				md-align-items="center"
				md-justify-content="center"
				md-text-align="center"
				lg-width="100%"
				margin="0px 0px 56px 0px"
				align-items="center"
			>
				<Text
					margin="0px 0px 16px 0px"
					font="--headline2"
					color="--dark"
					md-text-align="center"
					sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Hey! I’m writing this sentence because
				</Text>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="--greyD3"
					md-text-align="center"
					text-align="center"
					max-width="480px"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="32px 4%" md-grid-template-columns="1fr">
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Design
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Frontend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
				</Box>
				<Box
					padding="45px 45px"
					lg-padding="45px 30px"
					md-padding="45px 45px"
					background="#FFFFFF"
					border-radius="24px"
					justify-content="flex-start"
					flex-direction="column"
					display="flex"
				>
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 30px 0px"
						color="--dark"
						size="48px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Backend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaGalacticRepublic}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Design
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Frontend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Backend
					</Text>
					<Text
						margin="0px 0px 0px 0px"
						color="--greyD3"
						font="--base"
						lg-text-align="left"
						flex="1 0 auto"
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 90px 0" md-padding="60px 0 60px 0" background="linear-gradient(180deg,rgba(42, 9, 113, 0.7) 0%,rgba(23, 23, 57, 0.7) 15.2%) 0 0 no-repeat,rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/655ccff11d712a00232b9673/images/gettyimages-1403392120-1024x1024.jpg?v=2023-11-21T20:23:49.696Z) 50% 0/cover repeat scroll padding-box" quarkly-title="Reviews-8">
			<Override slot="SectionContent" md-padding="0px 0 0px 0" />
			<Box
				min-width="100px"
				min-height="100px"
				padding="30px 0 10px 0"
				border-radius="8px"
				margin="0px 20px 25px 20px"
				display="flex"
				flex-direction="row"
				justify-content="space-between"
				lg-margin="0px 0 25px 0px"
				md-flex-direction="column"
			>
				<Box
					min-width="100px"
					min-height="100px"
					padding="0px 0px 0px 50px"
					width="50%"
					display="flex"
					flex-direction="column"
					justify-content="space-between"
					md-width="100%"
					md-padding="30px 0px 0px 0"
				>
					<Box min-width="100px" min-height="100px">
						<Icon
							category="fa"
							icon={FaAviato}
							size="84px"
							margin="0px 0px 20px 0px"
							color="--light"
							sm-margin="0px 0px 15px 0px"
						/>
						<Text margin="0px 0px 30px 0px" font="normal 400 22px/1.5 --fontFamily-sans" color="#e8e3e3" sm-margin="0px 0px 20px 0px">
							"Attending this conference was one of the best decisions I've made for my career. The networking opportunities were invaluable and I made some great connections that have led to new opportunities."
						</Text>
					</Box>
					<Box
						min-width="100px"
						min-height="100px"
						display="flex"
						align-items="center"
						md-min-width={0}
						md-min-height={0}
					>
						<Box min-width="10px" min-height="10px">
							<Text margin="0px 0px 7px 0px" font="normal 600 20px/1.5 --fontFamily-sansHelvetica" color="--light">
								Tom Paul
							</Text>
							<Text margin="0px 0px 0px 0px" font="normal 400 16px/1.5 --fontFamily-sans" color="#afb5bd">
								Event Planner
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				align-items="center"
				flex-direction="column"
				justify-content="center"
				margin="0px 0px 56px 0px"
				width="100%"
				sm-margin="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 16px 0px"
					color="--light"
					font="--headline1"
					text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Reviews
				</Text>
				<Text margin="0px 0px 0px 0px" color="--lightD2" text-align="center" font="--lead">
					Sign up with your email address to receive news and updates.
				</Text>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				align-items="stretch"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="16px"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19:47:23.498Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image6.png?v=2021-08-25T19%3A47%3A23.498Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Sam
								<br />
								Smith
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								PM
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					lg-padding="0px 0px 0px 15px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19:47:16.297Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image5.png?v=2021-08-25T19%3A47%3A16.297Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Mason
								<br />
								Johnson
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								Writer
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					margin="0px 30px 0px 0px"
					lg-padding="0px 15px 0px 0px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19:47:08.343Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image4.png?v=2021-08-25T19%3A47%3A08.343Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Adriana
								<br />
								Williams
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								PO
							</Text>
						</Box>
					</Box>
				</Box>
				<Box
					lg-padding="0px 0px 0px 15px"
					lg-margin="40px 0px 0px 0px"
					sm-padding="0px 0px 0px 0px"
					sm-margin="40px 0px 0px 0px"
					display="flex"
					flex-direction="column"
				>
					<Text margin="0px 0px 0px 0px" color="--orange" font="--headline1">
						“
					</Text>
					<Text
						margin="0px 0px 100px 0px"
						color="--lightD2"
						font="--lead"
						lg-margin="0px 0px 30px 0px"
						sm-margin="0px 0px 30px 0px"
						flex="1 0 auto"
					>
						From pixel-perfect icons and scalable vector graphics, to full user flows and interactive prototypes, Sketch is the perfect place to design, create and test.
					</Text>
					<Box display="flex" margin="0px 17px 0px 0px" align-items="flex-start">
						<Image
							width="64px"
							height="64px"
							src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19:46:11.754Z"
							border-radius="50зч"
							margin="0px 17px 0px 0px"
							srcSet="https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image-3.png?v=2021-08-25T19%3A46%3A11.754Z&quality=85&w=3200 3200w"
							sizes="(max-width: 576px) 100vw,(max-width: 768px) 100vw,(max-width: 992px) 100vw,100vw"
						/>
						<Box>
							<Text color="--light" font="--base" margin="0px 0px 2px 0px">
								Ethan
								<br />
								Tremblay
							</Text>
							<Text color="--lightD2" font="--base" margin="0px 0px 0px 0px" opacity=".5">
								UI/UX Designer
							</Text>
						</Box>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline1"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Partners
				</Text>
				<Text
					margin="25px 0px 0px 0px"
					font="--lead"
					display="block"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
					width="60%"
				>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2025.svg?v=2021-08-27T23:06:50.611Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2026.svg?v=2021-08-27T23:06:50.617Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2027.svg?v=2021-08-27T23:06:50.623Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2028.svg?v=2021-08-27T23:06:50.609Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2029.svg?v=2021-08-27T23:06:50.627Z" border-radius="16px" max-width="100%" />
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Image src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Frame%2030.svg?v=2021-08-27T23:06:50.610Z" border-radius="16px" max-width="100%" />
				</Box>
			</Box>
		</Section>
		<Section padding="100px 0 100px 0" background="--color-light" quarkly-title="FAQ-10">
			<Box min-width="100px" min-height="100px" display="flex" lg-flex-direction="column">
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 15px 0px" font="normal 600 36px/1.2 --fontFamily-sans" color="--darkL1">
						Frequently asked questions
					</Text>
					<Text
						margin="0px 0px 70px 0px"
						font="normal 300 20px/1.5 --fontFamily-sansHelvetica"
						color="#555a5f"
						sm-margin="0px 0px 50px 0px"
						lg-margin="0px 0px 50px 0px"
					>
						Here are the most frequently asked questions in our field and the{" "}
						<Span color="#5851df" font="500 20px/30px Frutiger, &quot;Frutiger Linotype&quot;, Univers, Calibri, &quot;Gill Sans&quot;, &quot;Gill Sans MT&quot;, &quot;Myriad Pro&quot;, Myriad, &quot;DejaVu Sans Condensed&quot;, &quot;Liberation Sans&quot;, &quot;Nimbus Sans L&quot;, Tahoma, Geneva, &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif">
							answers
						</Span>
						{" "}to them
					</Text>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="block"
					grid-template-columns="repeat(2, 1fr)"
					grid-gap="50px 50px"
					md-grid-template-columns="1fr"
					sm-grid-gap="35px 0"
					padding="0px 0px 0px 70px"
					lg-padding="0px 0px 0px 0"
				>
					<Box min-width="100px" min-height="100px" margin="0px 0px 35px 0px">
						<Text margin="0px 0px 12px 0px" font="normal 500 22px/1.2 --fontFamily-sans" color="--darkL1">
							What are some examples of IT jobs?
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
							Some examples of IT jobs include software developer, network administrator, database administrator, cybersecurity analyst, and IT project manager.
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 35px 0px">
						<Text margin="0px 0px 12px 0px" font="normal 500 22px/1.2 --fontFamily-sans" color="--darkL1">
							What is cybersecurity?
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
							Cybersecurity refers to the practice of protecting computer systems and networks from unauthorized access, theft, damage, or disruption.
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px" margin="0px 0px 35px 0px">
						<Text margin="0px 0px 12px 0px" font="normal 500 22px/1.2 --fontFamily-sans" color="--darkL1">
							What skills do I need to work in IT?
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
							Skills needed for IT jobs vary depending on the specific role, but generally include technical knowledge, problem-solving abilities, communication skills, attention to detail, and the ability to work well in a team.
						</Text>
					</Box>
					<Box min-width="100px" min-height="100px">
						<Text margin="0px 0px 12px 0px" font="normal 500 22px/1.2 --fontFamily-sans" color="--darkL1">
							What is cloud computing?
						</Text>
						<Text margin="0px 0px 0px 0px" font="normal 300 16px/1.5 --fontFamily-sansHelvetica" color="#555a5f">
							Cloud computing is the delivery of computing services—including servers, storage, databases, software, and analytics—over the internet rather than through on-premises servers.
						</Text>
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" background="#0c1128" quarkly-title="Footer-5">
			<Box
				display="flex"
				lg-width="100%"
				flex-direction="row"
				lg-flex-direction="row"
				justify-content="space-between"
				width="100%"
				padding="0 0px 50px 0px"
				md-padding="0 0px 30px 0px"
				lg-padding="0 0px 50px 0px"
				md-flex-direction="column"
				md-display="flex"
				md-grid-gap="36px"
			>
				<Box
					lg-margin="0px 0px 0px 0px"
					width="30%"
					display="flex"
					lg-width="20%"
					md-width="10%"
				>
					<LinkBox
						justify-content="center"
						border-radius="100%"
						width="36px"
						height="36px"
						align-items="center"
						display="flex"
						href="#"
					>
						<Icon category="gi" icon={GiFairyWings} color="#6d32ec" size="37px" />
					</LinkBox>
				</Box>
				<Box
					min-width="100px"
					min-height="100px"
					display="grid"
					grid-template-columns="repeat(4, 1fr)"
					grid-gap="16px 54px"
					lg-align-items="start"
					md-grid-template-columns="repeat(4, 1fr)"
					md-grid-gap="36px 34px"
					sm-grid-template-columns="repeat(2, 1fr)"
					sm-grid-gap="36px 24px"
					sm-width="100%"
				>
					<Box
						align-items="flex-start"
						lg-justify-content="start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						sm-justify-content="start"
						md-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Solution
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Marketing
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Analytics
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Commerce
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Insights
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-justify-content="start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						sm-justify-content="start"
						md-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Support
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Pricing
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Documentation
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Guides
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							API status
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-justify-content="start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						sm-justify-content="start"
						md-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Company
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							About
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Blog
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Jobs
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Press
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							display="flex"
						>
							Partners
						</Link>
					</Box>
					<Box
						align-items="flex-start"
						lg-justify-content="start"
						lg-align-items="flex-start"
						justify-content="flex-start"
						display="grid"
						lg-flex-direction="column"
						lg-margin="0px 0px 0px 0px"
						flex-direction="column"
						flex-wrap="wrap"
						align-content="start"
						grid-gap="8px 0"
						sm-justify-content="start"
						md-justify-content="start"
					>
						<Text margin="0px 0px 20px 0px" font="normal 500 20px/1.5 --fontFamily-sans" color="--light">
							Legal
						</Text>
						<Link
							border-color="--color-primary"
							display="flex"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							margin="0px 0 0px 0"
							lg-border-width="0px 0px 0px 2px"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Claim
						</Link>
						<Link
							margin="0px 0 0px 0"
							display="flex"
							href="#"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							text-decoration-line="initial"
							color="#c3c8d0"
							hover-color="#a78bfa"
						>
							Privacy
						</Link>
						<Link
							margin="0px 0 0px 0"
							hover-color="#a78bfa"
							href="#"
							text-decoration-line="initial"
							color="#c3c8d0"
							font="normal 400 16px/24px --fontFamily-googleRoboto"
							display="flex"
						>
							Terms
						</Link>
					</Box>
				</Box>
			</Box>
			<Box
				min-width="100px"
				min-height="100px"
				padding="50px 0px 50px 0px"
				display="grid"
				justify-content="space-between"
				grid-template-columns="repeat(2, 1fr)"
				align-items="center"
				border-color="#232a44"
				border-width="1px 0 0 0"
				border-style="solid"
				md-grid-template-columns="1fr"
				md-padding="30px 0px 30px 0px"
			>
				<Box padding="0px 50px 0px 0px" md-padding="0px 0 0px 0px" md-margin="0px 0px 25px 0px">
					<Text margin="0px 0px 10px 0px" font="normal 500 20px/1.2 --fontFamily-sans" sm-text-align="center" color="--light">
						Subscribe to our newsletter
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="#c3c8d0" sm-text-align="center">
						The latest news, articles, and resources, sent to your inbox weekly.
					</Text>
				</Box>
				<Components.QuarklycommunityKitNetlifyForm display="flex" justify-content="flex-end" md-justify-content="flex-start" sm-justify-content="center">
					<Box display="flex" lg-flex-wrap="no-wrap" sm-flex-wrap="wrap">
						<Input
							margin="0px 30px 0px 0px"
							padding="10px 16px 10px 16px"
							placeholder="Enter your e-mail"
							width="100%"
							font="normal 300 18px/1.5 --fontFamily-sans"
							max-width="386px"
							border-radius="8px"
							name="Mobile "
							type="tel"
							required
							lg-margin="0px 10px 0px 0px"
							sm-margin="0px 0 0 0px"
							sm-text-align="center"
						/>
						<Button
							padding="10px 24px 10px 24px"
							font="normal 400 18px/1.5 --fontFamily-sans"
							sm-margin="10px 0px 0px 0px"
							sm-width="100%"
							border-style="solid"
							focus-box-shadow="none"
							color="--light"
							background="#6d32ec"
							border-radius="8px"
							border-width="2px"
							border-color="#6d32ec"
							white-space="nowrap"
						>
							Subscribe
						</Button>
					</Box>
				</Components.QuarklycommunityKitNetlifyForm>
			</Box>
			<Box
				display="flex"
				justify-content="space-between"
				padding="50px 0px 0px 0px"
				border-width="1px 0 0 0"
				border-style="solid"
				border-color="#232a44"
				md-padding="30px 0px 0px 0px"
				md-flex-direction="column"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--base"
					color="#c3c8d0"
					md-margin="0px 0px 25px 0px"
					sm-text-align="center"
				>
					© 2023 Company, Inc. All rights reserved.
				</Text>
				<Box
					display="grid"
					grid-template-columns="repeat(5, 1fr)"
					grid-gap="16px 24px"
					md-align-self="flex-start"
					sm-align-self="center"
				>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaFacebook}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaInstagram}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaTwitterSquare}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaGithub}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
					<LinkBox href="/">
						<Icon
							category="fa"
							icon={FaYoutube}
							size="24px"
							color="#c3c8d0"
							hover-color="#a78bfa"
							transition="background-color 1s ease 0s"
						/>
					</LinkBox>
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
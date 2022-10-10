import type { NextPage } from "next";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import {
	Button,
	Card,
	CardContent,
	CardMedia,
	Container,
	Slider,
	Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import Link from "@mui/material/Link";

type User = {
	id: string;
	name: string;
	email: string;
	password: string;
};

const AllTasksQuery = gql`
	query {
		users {
			id
			name
			email
			password
		}
	}
`;

const Home: NextPage = () => {
	const router = useRouter();
	const isDesktop = useMediaQuery({ query: "(min-width: 768px)" }); //レスポンシブデザイン
	const { data, loading, error } = useQuery(AllTasksQuery);

	const settings = {
		dots: true,
		infinite: true,
		autoplay: true,
		centerMode: true,
		speed: 1000,
		arrows: true,
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<div style={{ display: "flex" }} className="mt-10">
				<Container maxWidth="sm">
					<Typography
						variant="h3"
						style={{
							color: "black",
							fontWeight: "bold",
							marginTop: "25%",
						}}
					>
						Discover, collect, and sell extraordinary NFTs
					</Typography>
					<Typography
						variant="h5"
						style={{
							color: "black",
							marginTop: "30px",
						}}
					>
						このサイトはNFTのマーケットプレイスです
					</Typography>
					<Container maxWidth="sm">
						<Button
							variant="outlined"
							href="/marketplace"
							size="large"
							style={{
								backgroundColor: "#1976D2",
								color: "white",
								marginLeft: "10%",
								marginTop: "40px",
							}}
						>
							Collect
						</Button>
						<Button
							variant="outlined"
							href={`/create-nft`}
							size="large"
							style={{ marginLeft: "10%", marginTop: "40px" }}
						>
							Create
						</Button>
					</Container>
				</Container>
				{isDesktop && (
					<Container maxWidth="sm">
						<Card
							sx={{ maxWidth: 800, cursor: "pointer" }}
							onClick={() => router.push(`/assets/`)}
						>
							<CardMedia
								component="img"
								height="400"
								image="https://www.zas.co.jp/pic-labo/category_header_makeup.png"
								alt="img"
							/>
							<CardContent>
								<Typography gutterBottom variant="h6" component="div">
									hello
								</Typography>
							</CardContent>
						</Card>
					</Container>
				)}
			</div>

			<div className="flex justify-center mt-20">
				<Typography
					sx={{ fontSize: 40 }}
					color="text.secondary"
					gutterBottom
					style={{ fontWeight: "bold", color: "black" }}
				>
					Trending in our market
				</Typography>
			</div>
			<div className="flex justify-center">
				<Typography
					sx={{ fontSize: 15 }}
					color="text.secondary"
					gutterBottom
					style={{ fontWeight: "bold", color: "black" }}
				>
					気に入ったNFTがあればクリックしてみてください！
				</Typography>
			</div>

			<div className="flex justify-center mt-10">
				<Container maxWidth="sm">
					<Slider {...settings}>
						<div>
							<img
								src="https://www.zas.co.jp/pic-labo/category_header_makeup.png"
								alt="img"
								width={400}
								height={400}
								style={{
									objectFit: "cover",
									width: "90%",
									height: "500px",
									cursor: "pointer",
								}}
								onClick={() =>
									router.push({
										pathname: `/assets/`,
									})
								}
							/>
							<img
								src="https://www.zas.co.jp/pic-labo/category_header_makeup.png"
								alt="img"
								width={400}
								height={400}
								style={{
									objectFit: "cover",
									width: "90%",
									height: "500px",
									cursor: "pointer",
								}}
								onClick={() =>
									router.push({
										pathname: `/assets/`,
									})
								}
							/>
						</div>
					</Slider>
				</Container>
			</div>

			<div>
				<div className="flex justify-center mt-10">
					<Typography
						sx={{ fontSize: 40 }}
						color="text.secondary"
						gutterBottom
						style={{ fontWeight: "bold", color: "black", margin: "40px" }}
					>
						Create and sell your NFTs
					</Typography>
				</div>

				<div style={{ display: "flex", flexWrap: "wrap" }} className="mb-20">
					<Container maxWidth="sm">
						<Card
							sx={{ minWidth: 275 }}
							style={{ textAlign: "center", marginBottom: "30px" }}
						>
							<CardContent>
								<AccountBalanceWalletIcon
									sx={{ fontSize: 40 }}
									color="primary"
								/>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ fontWeight: "bold", color: "black" }}
								>
									walletを作成
								</Typography>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ color: "black" }}
								>
									Metamaskのアカウントを作成していただき、
									<br />
									接続してください。
								</Typography>
							</CardContent>
						</Card>
					</Container>
					<Container maxWidth="sm">
						<Card
							sx={{ minWidth: 275 }}
							style={{ textAlign: "center", marginBottom: "30px" }}
						>
							<CardContent>
								<AccountBalanceWalletIcon
									sx={{ fontSize: 40 }}
									color="primary"
								/>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ fontWeight: "bold", color: "black" }}
								>
									NFTを作成
								</Typography>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ color: "black" }}
								>
									<Link href={`/create-nft/`} underline="none">
										こちらのページ
									</Link>
									から
									<br />
									NFTを作成、出品できます。
								</Typography>
							</CardContent>
						</Card>
					</Container>
					<Container maxWidth="sm">
						<Card
							sx={{ minWidth: 275 }}
							style={{ textAlign: "center", marginBottom: "30px" }}
						>
							<CardContent>
								<AccountBalanceWalletIcon
									sx={{ fontSize: 40 }}
									color="primary"
								/>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ fontWeight: "bold", color: "black" }}
								>
									購入そして転売
								</Typography>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ color: "black" }}
								>
									<Link href="/marketplace" underline="none">
										こちらのページ
									</Link>
									から、NFT購入可能
									<br />
									<Link href="/my-nfts" underline="none">
										こちらのページ
									</Link>
									から、NFT転売可能
								</Typography>
							</CardContent>
						</Card>
					</Container>
					<Container maxWidth="sm">
						<Card sx={{ minWidth: 275 }} style={{ textAlign: "center" }}>
							<CardContent>
								<AccountBalanceWalletIcon
									sx={{ fontSize: 40 }}
									color="primary"
								/>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ fontWeight: "bold", color: "black" }}
								>
									ダッシュボード
								</Typography>
								<Typography
									sx={{ fontSize: 15 }}
									color="text.secondary"
									gutterBottom
									style={{ color: "black" }}
								>
									作成したNFTが見れます。
									<br />
									出品取下げも可能です。
								</Typography>
							</CardContent>
						</Card>
					</Container>
				</div>
			</div>
		</>
	);
};

export default Home;

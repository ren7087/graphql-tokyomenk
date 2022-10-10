import { Card, CardContent, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Link from "@mui/material/Link";

const lip = () => {
	return (
		<div>
			<div className="flex justify-center mt-5">
				<Typography
					sx={{ fontSize: 40 }}
					color="text.secondary"
					gutterBottom
					style={{ fontWeight: "bold", color: "black" }}
				>
					Create and sell your NFTs
				</Typography>
			</div>

			<div
				style={{ display: "flex", flexWrap: "wrap" }}
				className="mb-20 mt-10"
			>
				<Container maxWidth="sm">
					<Card
						sx={{ minWidth: 275 }}
						style={{ textAlign: "center", marginBottom: "30px" }}
					>
						<CardContent>
							<AccountBalanceWalletIcon sx={{ fontSize: 40 }} color="primary" />
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
							<AccountBalanceWalletIcon sx={{ fontSize: 40 }} color="primary" />
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
							<AccountBalanceWalletIcon sx={{ fontSize: 40 }} color="primary" />
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
							<AccountBalanceWalletIcon sx={{ fontSize: 40 }} color="primary" />
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
	);
};

export default lip;

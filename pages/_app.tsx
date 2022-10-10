import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "./lib/apollo";
import HighlightIcon from "@mui/icons-material/Highlight";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Button, Menu, MenuItem } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenu = (event: any) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<ApolloProvider client={apolloClient}>
			<div>
				<nav className="border-b p-6 flex ">
					<Button startIcon={<HighlightIcon />} href="/">
						<p className="text-2xl font-bold">Tokyomenk</p>
					</Button>

					{/* <Humberger /> */}

					<div className="flex flex-row-reverse m-3 ml-10">
						<Link href="/lip">
							<a className="mr-4 text-xl font-bold text-black-500">lip</a>
						</Link>
					</div>
					<div className="flex flex-row-reverse m-3">
						<Link href="/creator">
							<a className="mr-4 text-xl font-bold text-black-500">hairoil</a>
						</Link>
					</div>
					<div className="flex flex-row-reverse m-3">
						<Link href="/my-nfts">
							<a className="mr-4 text-xl font-bold text-black-500">skin</a>
						</Link>
					</div>
					<div className="flex flex-row-reverse m-3">
						<Link href="/my-nfts">
							<a className="mr-4 text-xl font-bold text-black-500">perfume</a>
						</Link>
					</div>
					<div className="flex flex-row-reverse m-3">
						<Link href="/my-nfts">
							<a className="mr-4 text-xl font-bold text-black-500">articles</a>
						</Link>
					</div>
					<div className="flex flex-row-reverse m-3">
						<Link href="/my-nfts">
							<a className="mr-4 text-xl font-bold text-black-500">shop</a>
						</Link>
					</div>
					<div className="flex flex-row-reverse m-3 mb-6">
						<AccountCircleIcon
							sx={{ fontSize: 30 }}
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleMenu}
							style={{ cursor: "pointer" }}
						/>
						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<Link href={`/accounts/`}>
								<MenuItem onClick={handleClose}>
									<a>アカウント</a>
								</MenuItem>
							</Link>
							<Link href={`/settings/`}>
								<MenuItem onClick={handleClose}>
									<a>user登録</a>
								</MenuItem>
							</Link>
							<Link href={`/images/`}>
								<MenuItem onClick={handleClose}>
									<a>プロフィール画像</a>
								</MenuItem>
							</Link>
						</Menu>
					</div>
				</nav>
				<Component {...pageProps} />
			</div>
		</ApolloProvider>
	);
}

export default MyApp;

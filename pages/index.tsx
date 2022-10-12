import type { NextPage } from "next";
import Head from "next/head";
import { gql, useQuery } from "@apollo/client";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { useRouter } from "next/router";
import { useMediaQuery } from "react-responsive";
import Link from "@mui/material/Link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/system";

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
  const images = ["/img/top/top.jpg", "/img/top/top1.jpg", "/img/top/top2.jpg"];

  const settings = {
    infinite: true,
    autoplay: true,
    centerMode: true,
    speed: 800,
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div className="flex justify-center mt-20">
        <div>
          <Typography
            sx={{ fontSize: 40 }}
            gutterBottom
            style={{ fontWeight: "bold", color: "#444448" }}
          >
            Tokyomenk
          </Typography>
          <Typography
            sx={{ fontSize: 15 }}
            color="text.secondary"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            \ トレンドの美容を発信するメンズメイクメディアです！ /
          </Typography>
        </div>
        <div>
          <Image
            src="/img/top/flower1.png"
            alt="hello"
            width={200}
            height={200}
            style={{
              marginBottom: "40px",
            }}
          />
        </div>
      </div>

      <div className="flex justify-center">
        <Container maxWidth="sm">
          <Slider {...settings}>
            {images.map((img, i) => (
              <div key={i}>
                <Image
                  src={img}
                  alt={img}
                  width={1200}
                  height={800}
                  style={{
                    objectFit: "cover",
                    height: "500px",
                    cursor: "pointer",
                  }}
                />
              </div>
            ))}
          </Slider>
        </Container>
      </div>

      <div style={{ display: "flex" }} className="mt-10">
        <Container maxWidth="sm">
          <Image
            src="/img/top/flower2.png"
            alt="hello"
            width={200}
            height={200}
            style={{
              marginBottom: "40px",
            }}
          />
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              marginTop: "10%",
            }}
          >
            あなたを表現する
            <br />
            メンズメイクメディア、
            <br />
            「Tokyomenk」
          </Typography>
          <Typography
            variant="h5"
            style={{
              marginTop: "30px",
            }}
          >
            menktokyoは「be yourself」を表現する
            <br />
            あなたに寄り添った情報を発信します
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
          <Container
            maxWidth="sm"
            style={{ marginTop: "20%", marginLeft: "-10%" }}
          >
            <CardMedia
              component="img"
              height="400"
              image="/img/top/manman.png"
              alt="img"
            />
          </Container>
        )}
      </div>
      <div style={{ display: "flex" }} className="mt-10">
        {isDesktop && (
          <Container
            maxWidth="sm"
            style={{ marginTop: "-14%", marginLeft: "-10%" }}
          >
            <CardMedia
              component="img"
              height="400"
              image="/img/top/perfume.png"
              alt="img"
            />
          </Container>
        )}
        <Container maxWidth="sm">
          <Typography
            variant="h6"
            style={{
              fontWeight: "bold",
              marginTop: "15%",
            }}
          >
            昨日の自分よりかっこいい自分に出会うため、毎日をより楽しく過ごすため、そんなあなたに美容の最先端の情報を提供するサイトです
          </Typography>
          <CardMedia
            component="img"
            height="200"
            image="/img/top/flower.png"
            alt="img"
            style={{ marginTop: "-40%" }}
          />
        </Container>
      </div>

      <div className="flex justify-center mt-10">
        <Container fixed>
          <Box
            sx={{
              bgcolor: "#fffbf4",
              height: "auto",
            }}
            className="flex justify-center"
          >
            <div>
              <Image
                src="/img/top/work.png"
                alt="hello"
                width={800}
                height={1000}
                style={{
                  margin: "20px",
                }}
              />
            </div>
            <div
              style={{
                margin: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                仕事場で使えるメイク
              </Typography>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                資生堂が出したデータによれば、仕事相手のメイクに約７割の方が好印象を抱いており,
                メイクは、自分自身の気持ちを前向きにしてくれます。
                TPOを守った清潔感のあるメイクがおすすめです
              </Typography>
              <hr style={{ height: "3px" }} color="#c3b5a5" />
              <div className="flex justify-center mt-5 mb-5">
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
                  style={{ marginRight: "10%" }}
                >
                  <span style={{ fontWeight: "bold" }}>TYPE</span>
                  <br />
                  <br />
                  清潔感メイク
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
                  style={{
                    borderLeft: "3px solid #c3b5a5",
                    paddingLeft: "10%",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>WHEN</span>
                  <br /> <br />
                  オンライン面接
                  <br />
                  仕事、 学校
                </Typography>
              </div>
              <hr style={{ height: "3px" }} color="#c3b5a5" />
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
                style={{ marginTop: "4%" }}
              >
                <span style={{ fontWeight: "bold" }}>ITEM</span>
                <br /> <br />
                BBクリーム、アイライナー
              </Typography>
            </div>
          </Box>
        </Container>
      </div>

      <div className="flex justify-center mt-10">
        <Container fixed>
          <Box
            sx={{
              bgcolor: "#e2cdb0",
              height: "auto",
            }}
            className="flex justify-center"
          >
            <div>
              <Image
                src="/img/top/date.png"
                alt="hello"
                width={800}
                height={1000}
                style={{
                  margin: "20px",
                }}
              />
            </div>
            <div
              style={{
                margin: "20px",
                textAlign: "center",
              }}
            >
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
                style={{ fontWeight: "bold" }}
              >
                友達とお出かけ
              </Typography>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                メイクは、他の誰かを真似をできることも、自分自身の個性を表現することもできます。
                お気に入りのメイクで、出かける前から気分up!
              </Typography>
              <hr style={{ height: "3px" }} color="#c3b5a5" />
              <div className="flex justify-center mt-5 mb-5">
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
                  style={{ marginRight: "10%" }}
                >
                  <span style={{ fontWeight: "bold" }}>TYPE</span>
                  <br />
                  <br />
                  ファッションメイク
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
                  style={{
                    borderLeft: "3px solid #c3b5a5",
                    paddingLeft: "10%",
                  }}
                >
                  <span style={{ fontWeight: "bold" }}>WHEN</span>
                  <br /> <br />
                  彼女とのデート
                  <br />
                  買い物、お出かけ
                </Typography>
              </div>
              <hr style={{ height: "3px" }} color="#c3b5a5" />
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
                style={{ marginTop: "4%" }}
              >
                <span style={{ fontWeight: "bold" }}>ITEM</span>
                <br /> <br />
                BBクリーム、アイライナー、香水
              </Typography>
            </div>
          </Box>
        </Container>
      </div>

      <div>
        <div className="flex justify-center mt-10">
          <Typography
            sx={{ fontSize: 40 }}
            gutterBottom
            style={{ fontWeight: "bold", margin: "40px" }}
          >
            記事を見る
          </Typography>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }} className="mb-20">
          <Container maxWidth="sm">
            <Card
              sx={{ minWidth: 275 }}
              style={{
                textAlign: "center",
                marginBottom: "30px",
                backgroundColor: "#fffbf4",
              }}
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
                  style={{ fontWeight: "bold" }}
                >
                  walletを作成
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
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
              style={{
                textAlign: "center",
                marginBottom: "30px",
                backgroundColor: "#fffbf4",
              }}
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
                  style={{ fontWeight: "bold" }}
                >
                  NFTを作成
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
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
              style={{
                textAlign: "center",
                marginBottom: "30px",
                backgroundColor: "#fffbf4",
              }}
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
                  style={{ fontWeight: "bold" }}
                >
                  購入そして転売
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
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
            <Card
              sx={{ minWidth: 275 }}
              style={{ textAlign: "center", backgroundColor: "#fffbf4" }}
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
                  style={{ fontWeight: "bold" }}
                >
                  ダッシュボード
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  color="text.secondary"
                  gutterBottom
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

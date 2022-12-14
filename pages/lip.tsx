import { Box, Card, CardContent, Tab, Tabs, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import Link from "@mui/material/Link";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Lip = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
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
                    wallet?????????
                  </Typography>
                  <Typography
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                    style={{ color: "black" }}
                  >
                    Metamask????????????????????????????????????????????????
                    <br />
                    ???????????????????????????
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
                    NFT?????????
                  </Typography>
                  <Typography
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                    style={{ color: "black" }}
                  >
                    <Link href={`/create-nft/`} underline="none">
                      ?????????????????????
                    </Link>
                    ??????
                    <br />
                    NFT?????????????????????????????????
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
                    ?????????????????????
                  </Typography>
                  <Typography
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                    style={{ color: "black" }}
                  >
                    <Link href="/marketplace" underline="none">
                      ?????????????????????
                    </Link>
                    ?????????NFT????????????
                    <br />
                    <Link href="/my-nfts" underline="none">
                      ?????????????????????
                    </Link>
                    ?????????NFT????????????
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
                    ?????????????????????
                  </Typography>
                  <Typography
                    sx={{ fontSize: 15 }}
                    color="text.secondary"
                    gutterBottom
                    style={{ color: "black" }}
                  >
                    ????????????NFT??????????????????
                    <br />
                    ?????????????????????????????????
                  </Typography>
                </CardContent>
              </Card>
            </Container>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </Box>
    </div>
  );
};

export default Lip;

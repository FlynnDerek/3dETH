<template>
  <div id="appContainer">
    <v-navigation-drawer id="navDrawer" app v-model="drawer" absolute temporary>
      <v-list id="navList">
        <a id="appHomeLink" href="/#/app">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-storefront</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Marketplace</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
        <a id="appEscrowLink" href="/#/app/escrow">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-script-text-outline</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>Manage Orders</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </a>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar id="appBar" app color="#1d5df9">
      <v-app-bar-nav-icon
        id="icoHamburger"
        @click.stop="drawer = !drawer"
        color="white"
        large
      ></v-app-bar-nav-icon>

      <v-chip
        class="ml-auto"
        id="displayBuyer"
        color="#a8c4ff"
        style="border-radius: 5px;"
        outlined
        ><svg
          width="20"
          height="18"
          fill="none"
          style="margin-right:10px"
          viewBox="0 0 35 33"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g stroke-linecap="round" stroke-linejoin="round" stroke-width=".25">
            <path
              d="m32.958 1-13.134 9.7183 2.4424-5.7273z"
              fill="#e17726"
              stroke="#e17726"
            />
            <g fill="#e27625" stroke="#e27625">
              <path d="m2.663 1 13.017 9.809-2.3254-5.818z" />
              <path
                d="m28.23 23.534-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"
              />
              <path
                d="m1.2728 23.65 2.1306 7.2823 7.4699-2.0603-3.4817-5.3386z"
              />
              <path
                d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"
              />
              <path
                d="m25.15 14.515-5.1575-4.587-0.1688 8.0597 7.4049-0.3369z"
              />
              <path d="m10.873 28.872 4.4819-2.1639-3.8583-3.0062z" />
              <path d="m20.266 26.708 4.4689 2.1639-0.6105-5.1701z" />
            </g>
            <path
              d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z"
              fill="#d5bfb2"
              stroke="#d5bfb2"
            />
            <path
              d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z"
              fill="#d5bfb2"
              stroke="#d5bfb2"
            />
            <path
              d="m15.108 21.784-3.7155-1.0884 2.6243-1.2051z"
              fill="#233447"
              stroke="#233447"
            />
            <path
              d="m20.513 21.784 1.0913-2.2935 2.6372 1.2051z"
              fill="#233447"
              stroke="#233447"
            />
            <path
              d="m10.8733 28.8721.6495-5.3386-4.13117.1167z"
              fill="#cc6228"
              stroke="#cc6228"
            />
            <path
              d="m24.098 23.534 0.6366 5.3386 3.4946-5.2219z"
              fill="#cc6228"
              stroke="#cc6228"
            />
            <path
              d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z"
              fill="#cc6228"
              stroke="#cc6228"
            />
            <path
              d="m11.393 20.696 2.6242-1.2051 1.0913 2.2935 0.6885-3.7966-7.405-0.3369z"
              fill="#cc6228"
              stroke="#cc6228"
            />
            <path
              d="m8.392 17.651 3.1049 6.0513-0.1039-3.0062z"
              fill="#e27525"
              stroke="#e27525"
            />
            <path
              d="m24.241 20.696-0.1169 3.0062 3.1049-6.0513z"
              fill="#e27525"
              stroke="#e27525"
            />
            <path
              d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z"
              fill="#e27525"
              stroke="#e27525"
            />
            <path
              d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z"
              fill="#e27525"
              stroke="#e27525"
            />
            <path
              d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z"
              fill="#f5841f"
              stroke="#f5841f"
            />
            <path
              d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z"
              fill="#f5841f"
              stroke="#f5841f"
            />
            <path
              d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z"
              fill="#c0ac9d"
              stroke="#c0ac9d"
            />
            <path
              d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z"
              fill="#161616"
              stroke="#161616"
            />
            <path
              d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z"
              fill="#763e1a"
              stroke="#763e1a"
            />
            <path
              d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z"
              fill="#763e1a"
              stroke="#763e1a"
            />
            <path
              d="m32.049 16.523-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-0.0519h6.1318z"
              fill="#f5841f"
              stroke="#f5841f"
            />
            <path
              d="m10.47 14.515-6.8983 2.0085-2.2994 7.1267h6.1188l4.1052 0.0519-3.1049-6.0513z"
              fill="#f5841f"
              stroke="#f5841f"
            />
            <path
              d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z"
              fill="#f5841f"
              stroke="#f5841f"
            />
          </g>
        </svg>
        <span id="updateBuyer"></span>...</v-chip
      >

      <v-chip
        id="displayNetwork"
        color="#a8c4ff"
        style="border-radius: 5px;"
        outlined
        ><v-icon style="margin-right:10px">mdi-network</v-icon>
        {{ currentNetwork }}
      </v-chip>

      <span id="updateBuyerFull"></span>
    </v-app-bar>

    <v-main>
      <v-container id="content" fluid>
        <div id="divMarket" class="col-md-12">
          <h2 id="title">Manage Orders</h2>
          <div class="col-md-12">
            <div v-if="queryRes[1] == 0" id="noResults">
              No Escrows Found for this Wallet Address
              <h4 id="addressSearch">
                <vth-blockie
                  id="blockie"
                  :string="this.currentAddress"
                  :options="blockieOptions"
                />
                {{ String(currentAddress).substr(0, 15) }}...
              </h4>
            </div>

            <div id="buyerEscrows" class="col-md-12 mx-auto">
              <table class="col-md-12 mx-auto">
                <tr id="trSeller">
                  <v-card
                    v-if="queryRes[1] != 0"
                    id="cardSellerInstance"
                    class="col-md-12"
                  >
                    <thead id="thead">
                      <th>Seller</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </thead>

                    <tbody class="col-md-12">
                      <td class="col-md-7">
                        <tr id="buyerWallet">
                          <vth-blockie
                            id="blockieSell"
                            :string="queryRes[0]"
                            :options="blockieOptions"
                          />
                          {{
                            queryRes[0]
                          }}
                        </tr>
                        <tr>
                          <v-icon id="icoEth">mdi-ethereum</v-icon
                          >{{
                            queryRes[1]
                          }}
                          wei
                        </tr>
                      </td>

                      <td class="col-md-3">
                        <tr>
                          <v-chip small outlined color="#1d5df9"
                            >Seller Staked:&nbsp;<b>{{
                              queryRes[2]
                            }}</b></v-chip
                          >
                        </tr>
                        <tr>
                          <v-chip small outlined color="#5546ff"
                            >Shipped:&nbsp;<b>{{ queryRes[3] }}</b></v-chip
                          >
                        </tr>
                        <tr>
                          <v-chip small outlined color="#3fb27f"
                            >Finalized:&nbsp;<b>{{ queryRes[4] }}</b></v-chip
                          >
                        </tr>
                        <tr>
                          <v-chip small outlined color="#e0385e"
                            >Disputed:&nbsp;<b>{{ queryRes[5] }}</b></v-chip
                          >
                        </tr>
                      </td>

                      <td class="col-md-2 mr-auto" style="padding: 0;">
                        <tr>
                          <v-btn
                            @click="finalizeEscrow(currentAddress)"
                            id="btnShip"
                            small
                            color="#1d5df9"
                          >
                            <v-icon id="icoShip" small>mdi-ethereum</v-icon>
                            Finalize Escrow</v-btn
                          >
                        </tr>
                        <tr>
                          <v-btn
                            @click="openDispute(currentAddress)"
                            id="btnInfo"
                            small
                          >
                            <v-icon small id="icoInfo">mdi-alarm-light</v-icon>
                            Open Dispute</v-btn
                          >
                        </tr>

                        <v-btn
                          v-if="queryRes[5] == true"
                          @click="
                            closeDispute(alias._buyerWallet, currentAddress)
                          "
                          id="btnShip"
                          small
                          color="#1d5df9"
                        >
                          <v-icon id="icoShip" small>mdi-alarm-light</v-icon>
                          Close Dispute</v-btn
                        >
                      </td>
                    </tbody>
                  </v-card>
                </tr>
              </table>
            </div>

            <div id="sellerEscrows" class="col-md-12 mx-auto">
              <table class="col-md-12 mx-auto">
                <tr
                  id="trSeller"
                  v-for="alias in syncedData"
                  :key="alias._sellerWallet"
                >
                  <v-card id="cardSellerInstance" class="col-md-12">
                    <thead id="thead">
                      <th>Buyer</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </thead>

                    <tbody class="col-md-12">
                      <td class="col-md-7">
                        <tr id="buyerWallet">
                          <vth-blockie
                            id="blockieSell"
                            :string="alias._buyerWallet"
                            :options="blockieOptions"
                          />
                          {{
                            alias._buyerWallet
                          }}
                        </tr>
                        <tr id="buyerPrice">
                          <v-icon id="icoEth">mdi-ethereum</v-icon
                          >{{
                            alias._printCost
                          }}
                          wei
                        </tr>
                      </td>

                      <td class="col-md-3">
                        <tr>
                          <v-chip small outlined color="#1d5df9"
                            >Seller Staked:&nbsp;<b>{{
                              alias.status[2]
                            }}</b></v-chip
                          >
                        </tr>
                        <tr>
                          <v-chip small outlined color="#5546ff"
                            >Shipped:&nbsp;<b>{{ alias.status[3] }}</b></v-chip
                          >
                        </tr>
                        <tr>
                          <v-chip small outlined color="#3fb27f"
                            >Finalized:&nbsp;<b>{{
                              alias.status[4]
                            }}</b></v-chip
                          >
                        </tr>
                        <tr>
                          <v-chip small outlined color="#e0385e"
                            >Disputed:&nbsp;<b>{{ alias.status[5] }}</b></v-chip
                          >
                        </tr>
                      </td>

                      <td class="col-md-2 mr-auto" style="padding: 0;">
                        <tr>
                          <v-btn
                            v-if="alias.status[3] == false"
                            @click="
                              stakeSeller(
                                alias._buyerWallet,
                                currentAddress,
                                alias._printCost / 4
                              )
                            "
                            id="btnStake"
                            small
                            color="#1d5df9"
                          >
                            <v-icon id="icoStake" small>mdi-ethereum</v-icon>
                            Stake Order</v-btn
                          >
                        </tr>
                        <tr>
                          <v-btn
                            v-if="
                              alias.status[2] == true &&
                                alias.status[3] == false &&
                                alias.status[4] == false
                            "
                            @click="
                              markShipped(alias._buyerWallet, currentAddress)
                            "
                            id="btnShip"
                            small
                            color="#1d5df9"
                          >
                            <v-icon id="icoShip" small>mdi-truck</v-icon>
                            Mark Shipped</v-btn
                          >
                        </tr>
                        <tr>
                          <v-btn
                            v-if="alias.status[5] == true"
                            @click="
                              closeDispute(alias._buyerWallet, currentAddress)
                            "
                            id="btnShip"
                            small
                            color="#1d5df9"
                          >
                            <v-icon id="icoShip" small>mdi-alarm-light</v-icon>
                            Close Dispute</v-btn
                          >
                        </tr>
                        <tr>
                          <v-btn
                            @click="
                              copyBuyerAddress(alias._buyerShippingAddress),
                                (snackbar = true)
                            "
                            id="btnInfo"
                            small
                          >
                            <v-icon small id="icoInfo">mdi-map-marker</v-icon>
                            Shipping Address</v-btn
                          >
                        </tr>
                        <tr>
                          <v-btn
                            @click="downloadBuyerFile(alias._printDL)"
                            id="btnInfo"
                            small
                          >
                            <v-icon small id="icoInfo">mdi-download</v-icon>
                            Download Model</v-btn
                          >
                        </tr>
                      </td>
                    </tbody>
                  </v-card>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <v-snackbar
          v-model="snackbar"
          :timeout="1500"
          :value="true"
          absolute
          centered
          top
        >
          <b>Copied:</b> <span id="spanSnackbar">{{ this.snackbarShip }}</span>
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">
              <b>Close</b>
            </v-btn>
          </template>
        </v-snackbar>
      </v-container>
    </v-main>
  </div>
</template>

<script>
/* eslint-disable */
// @ts-ignore
import axios from 'axios'
import Web3 from 'web3'
import EscrowService from '../services/EscrowService.js'
import OffChainQueries from '../services/OffChainQueries.js'
import FileDownload from 'js-file-download'
import copy from 'copy-to-clipboard'

var _escrowService = new EscrowService()
var _offChainQueries = new OffChainQueries()

var web3 = new Web3('http://localhost:8545')

export default {
  data: () => ({
    drawer: false,
    group: null,
    snackbar: false,
    snackbarShip: '',
    currentAddress: '',
    queryRes: [],
    sellerQueryRes: [],
    syncedData: [],
    SelectedSellerAddress: '',
    blockieOptions: {
      size: 10,
      scale: 5
    },
    navItems: [
      { title: 'Marketplace', icon: 'mdi-storefront' },
      { title: 'Manage Orders', icon: 'mdi-script-text-outline' }
    ]
  }),
  components: {},
  props: ['alias._sellerAddress'],
  methods: {
    async connectToMetamask() {
      if (window.ethereum) {
        await window.ethereum.send('eth_requestAccounts')
        window.web3 = new Web3(window.ethereum)
        this.isConnected == true
        return true
      } else {
        return false
      }
    },
    pollAddr() {
      setInterval(function() {
        var dom = document.getElementById('updateBuyer')
        var dom2 = document.getElementById('updateBuyerFull')
        var currAcct = web3.eth.accounts.givenProvider.selectedAddress
        this.currentAddress = currAcct
        dom.innerHTML = currAcct.substr(0, 15)
        dom2.innerHTML = currAcct
      }, 1000)
    },

    stakeSeller(buyer, seller, stake) {
      _escrowService.stakeSeller(buyer, seller, stake)
    },

    markShipped(buyer, seller) {
      _escrowService.markShipped(buyer, seller)
    },

    finalizeEscrow(buyer) {
      _escrowService.finalizeEscrow(buyer)
    },

    openDispute(buyer) {
      _escrowService.openDispute(buyer)
    },

    closeDispute(buyer, seller) {
      _escrowService.closeDispute(buyer, seller)
    },

    copyBuyerAddress(address) {
      this.snackbarShip = address
      copy(address)
    },

    downloadBuyerFile(myPath) {
      axios
        .post('http://localhost:3000/pathr', {
          path: myPath
        })
        .then(() => {
          this.getFile(myPath)
        })
        .catch(err => {
          console.log('Error: ', err)
          return err
        })
    },

    async getFile(path) {
      await axios
        .get('http://localhost:3000/download', {
          responseType: 'blob'
        })
        .then(response => {
          FileDownload(response.data, path)
        })
        .catch(err => {
          console.log(err)
        })
    }
  },

  mounted() {
    this.connectToMetamask().then(acct => {
      this.currentAddress = web3.eth.accounts.givenProvider.selectedAddress
      _escrowService.queryEscrows(this.currentAddress).then(data => {
        if (data[1] == 0) {
          _offChainQueries.getSellerEscrows(this.currentAddress).then(data2 => {
            if (data2.length == 0) {
              document.getElementById('noResults').style.display = 'block'
            }
            for (var i = 0; i < data2.length; i++) {
              var buyerWallet = data2[i]._buyerWallet
              let idx = data2[i]
              _escrowService.queryEscrows(buyerWallet).then(dataStatus => {
                if (idx._printCost == dataStatus[1]) {
                  var syncData = { ...idx, status: dataStatus }
                  this.syncedData.push(syncData)
                }
                this.syncedData.reverse()
              })
            }
          })
        }
        this.queryRes = data
      })
    })

    _escrowService.getNetwork().then(data => {
      this.currentNetwork = data
    })

    this.pollAddr()
  },

  watch: {
    group() {
      this.drawer = true
    }
  }
}
</script>

<style lang="css" scoped>
#appBar {
  height: 50px !important;
  box-shadow: none;
  padding: 0;
  margin: 0;
}

#navDrawer {
  width: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
}

#appHomeLink {
  text-decoration: none;
}

#appEscrowLink {
  text-decoration: none;
}

#icoHamburger {
  margin-top: -15px;
}

#content {
  padding: 0;
  margin: 0;
  height: 100vh;
  background-color: #fbfcfd;
  font-family: 'IBM Plex Sans', 'sans-serif';
}

#title {
  margin-top: -5px;
  margin-left: 15px;
  font-weight: 300;
}

#userCard {
  margin-top: 20px;
  border-radius: 5px;
}

table td {
  text-align: center;
  line-height: 40px;
}

#blockie {
  border-radius: 5px;
}
#blockieSell {
  border-radius: 5px;
  width: 25px;
  margin-right: 5px;
}

#displayBuyer {
  margin-top: -15px;
  margin-right: 10px;
}

#displayNetwork {
  margin-top: -15px;
}

#appIco {
  text-align: center;
  margin-top: 10px;
  color: #1d5df9 !important;
  text-decoration: none !important;
}

#homeLink {
  text-decoration: none;
}

#navList {
  margin-top: 20px;
}

#divMarket {
  display: block;
}

#divStore {
  display: none;
}

#updateBuyerFull {
  display: none;
}

#cardResult {
  margin-top: 10px;
}

#noResults {
  margin-top: 20px;
  display: none;
  font-family: 'IBM Plex Sans', 'sans-serif';
  opacity: 0.3;
  font-weight: 800;
  font-size: 30px;
  text-align: center;
}

#addressSearch {
  margin-left: 15px;
  margin-top: 5px;
}

#blockie {
  margin-right: 10px;
}

#divActions {
  margin-top: 5px;
}

#actionsTitle {
  padding: 5;
  margin: 0;

  font-size: 17px;
}

#btnFinalize {
  color: white;
}

#btnDispute {
  margin-left: 10px;
}

tr {
  text-align: left;
}

#buyerWallet {
  text-overflow: ellipsis;
  font-family: 'consolas';

  /* Required for text-overflow to do anything */
  white-space: nowrap;
  overflow: hidden;
}

#buyerPrice {
  font-family: 'consolas';
}

#cardSellerInstance {
  margin-bottom: 30px;
}

#icoShip {
  padding-right: 10px;
}

#icoInfo {
  padding-right: 10px;
}

#icoStake {
  padding-right: 10px;
}

#icoEth {
  margin-right: 15px;
}

#btnShip {
  color: white;
}

#btnStake {
  color: white;
}

#spanSnackbar {
  margin-left: 10px;
}
</style>

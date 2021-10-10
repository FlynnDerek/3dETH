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
    </v-app-bar>

    <v-main>
      <v-container id="content" fluid>
        <div id="divMarket">
          <h2 id="title">Marketplace</h2>

          <div class="col-md-11 mx-auto">
            <table class="table table-sm text-center">
              <thead>
                <th></th>
                <th>Seller's Address</th>
                <th>Printer</th>
                <th>Material</th>
                <th>Color</th>
                <th></th>
              </thead>
              <tbody>
                <tr v-for="alias in sellerList" :key="alias._sellerAddress">
                  <td>
                    <vth-blockie
                      id="blockie"
                      :string="alias._sellerAddress"
                      :options="blockieOptions"
                    />
                  </td>
                  <td>
                    <a
                      :href="
                        'https://etherscan.io/address/' + alias._sellerAddress
                      "
                      ><span id="sellerAddress">{{
                        alias._sellerAddress
                      }}</span></a
                    >
                  </td>
                  <td>
                    {{ alias._printerModel }}
                  </td>
                  <td>
                    {{ alias._printerMaterial }}
                  </td>
                  <td>
                    {{ alias._spoolColor }}
                  </td>
                  <td>
                    <router-link
                      :to="{
                        name: 'SellerStore',
                        params: { seller: alias._sellerAddress }
                      }"
                    >
                      <v-btn color="#1d5df9" style="color: white;" small
                        >Store</v-btn
                      >
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </v-container>
    </v-main>

    <v-footer app color="#fbfcfd">
      <v-tooltip left>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            id="routeSeller"
            v-show="!hidden"
            color="pink"
            dark
            absolute
            top
            right
            fab
            small
            @click="routeSeller()"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Become a Vendor</span>
      </v-tooltip>
    </v-footer>
  </div>
</template>

<script>
/* eslint-disable */
// @ts-ignore
import axios from 'axios'
import Web3 from 'web3'
import EscrowService from '../services/EscrowService.js'

var web3 = new Web3('http://localhost:8545')
var _escrowService = new EscrowService()

export default {
  data: () => ({
    drawer: false,
    group: null,
    currentAddress: '',
    currentNetwork: '',
    SelectedSellerAddress: '',
    sellerList: [],
    blockieOptions: {
      size: 10
    },
    navItems: [
      { title: 'Marketplace', icon: 'mdi-storefront' },
      { title: 'Manage Orders', icon: 'mdi-script-text-outline' }
    ]
  }),
  props: ['alias._sellerAddress'],
  methods: {
    openSellerShop(sellerAddr) {
      this.selectedSeller = sellerAddr
    },

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
        this.buyerAddress = currAcct
        dom.innerHTML = currAcct.substr(0, 15)
        dom2.innerHTML = currAcct
      }, 1000)
    },

    routeSeller() {
      window.location.href = '/#/register'
    }
  },

  async mounted() {
    await axios
      .post('http://localhost:3000/getSellers', {})
      .then(res => {
        this.sellerList = res.data
      })
      .catch(err => {
        console.log('Error: ', err)
        return err
      })

    this.connectToMetamask().then(acct => {
      this.currentAddress = web3.eth.accounts.givenProvider.selectedAddress
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
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
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

#appIco {
  text-align: center;
  margin-top: 10px;
  color: #1d5df9 !important;
  text-decoration: none !important;
}

#homeLink {
  text-decoration: none;
}

#displayBuyer {
  margin-top: -15px;
  margin-right: 10px;
}

#displayNetwork {
  margin-top: -15px;
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

#routeSeller {
  margin-top: -20px;
}
</style>

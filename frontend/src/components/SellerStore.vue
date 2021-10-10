<template>
<div id="storeContainer">
  <v-navigation-drawer id="navDrawerStore" app v-model="drawer"
       absolute
      temporary
    >
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
            <v-list-item-title>Manage Escrow</v-list-item-title>
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
  ><svg width="20" height="18" fill="none" style="margin-right:10px" viewBox="0 0 35 33" xmlns="http://www.w3.org/2000/svg">
<g stroke-linecap="round" stroke-linejoin="round" stroke-width=".25">
<path d="m32.958 1-13.134 9.7183 2.4424-5.7273z" fill="#e17726" stroke="#e17726"/>
<g fill="#e27625" stroke="#e27625">
<path d="m2.663 1 13.017 9.809-2.3254-5.818z"/>
<path d="m28.23 23.534-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"/>
<path d="m1.2728 23.65 2.1306 7.2823 7.4699-2.0603-3.4817-5.3386z"/>
<path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"/>
<path d="m25.15 14.515-5.1575-4.587-0.1688 8.0597 7.4049-0.3369z"/>
<path d="m10.873 28.872 4.4819-2.1639-3.8583-3.0062z"/>
<path d="m20.266 26.708 4.4689 2.1639-0.6105-5.1701z"/>
</g>
<path d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z" fill="#d5bfb2" stroke="#d5bfb2"/>
<path d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z" fill="#d5bfb2" stroke="#d5bfb2"/>
<path d="m15.108 21.784-3.7155-1.0884 2.6243-1.2051z" fill="#233447" stroke="#233447"/>
<path d="m20.513 21.784 1.0913-2.2935 2.6372 1.2051z" fill="#233447" stroke="#233447"/>
<path d="m10.8733 28.8721.6495-5.3386-4.13117.1167z" fill="#cc6228" stroke="#cc6228"/>
<path d="m24.098 23.534 0.6366 5.3386 3.4946-5.2219z" fill="#cc6228" stroke="#cc6228"/>
<path d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z" fill="#cc6228" stroke="#cc6228"/>
<path d="m11.393 20.696 2.6242-1.2051 1.0913 2.2935 0.6885-3.7966-7.405-0.3369z" fill="#cc6228" stroke="#cc6228"/>
<path d="m8.392 17.651 3.1049 6.0513-0.1039-3.0062z" fill="#e27525" stroke="#e27525"/>
<path d="m24.241 20.696-0.1169 3.0062 3.1049-6.0513z" fill="#e27525" stroke="#e27525"/>
<path d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z" fill="#e27525" stroke="#e27525"/>
<path d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z" fill="#e27525" stroke="#e27525"/>
<path d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z" fill="#f5841f" stroke="#f5841f"/>
<path d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z" fill="#f5841f" stroke="#f5841f"/>
<path d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z" fill="#c0ac9d" stroke="#c0ac9d"/>
<path d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z" fill="#161616" stroke="#161616"/>
<path d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z" fill="#763e1a" stroke="#763e1a"/>
<path d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z" fill="#763e1a" stroke="#763e1a"/>
<path d="m32.049 16.523-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-0.0519h6.1318z" fill="#f5841f" stroke="#f5841f"/>
<path d="m10.47 14.515-6.8983 2.0085-2.2994 7.1267h6.1188l4.1052 0.0519-3.1049-6.0513z" fill="#f5841f" stroke="#f5841f"/>
<path d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z" fill="#f5841f" stroke="#f5841f"/>
</g>
</svg>
<span id="updateBuyer"></span>...</v-chip>

<v-chip  
  id="displayNetwork"
  color="#a8c4ff"
  style="border-radius: 5px;"
  outlined><v-icon style="margin-right:10px">mdi-network</v-icon>
  {{currentNetwork}}
  </v-chip>
  <span id="updateBuyerFull"></span>
  
  </v-app-bar>

  <v-main>
    <v-container id="content" fluid>
          <div id="sellerInfo">
          <h4 id="storeTitle">
            <vth-blockie id="blockie" :string="this.$route.params.seller" :options="blockieOptions" />
            {{this.$route.params.seller}}
            </h4>
          </div>

            <div class="col-md-12 row mt-2">
            <v-card id="cardSmall" class="col-md-3 mx-auto">
            <div class="d-flex">
                    <div>
                    <p class="printSize">Small Print</p> 
                     <p class="printPrice" style="color: #ff558f">{{priceSmallTotal}} ETH</p>
                    <p class="printPriceUSD">${{priceSmallTotalUSD}}</p> 
                    </div>
              </div>
              </v-card>

            <v-card  id="cardMedium" class="col-md-3 mx-auto">
                <div class="d-flex">
                   <div>
           <p class="printSize">Medium Print</p> 
                     <p class="printPrice" style="color: #4d73db;">{{priceMediumTotal}} ETH</p>
                    <p class="printPriceUSD">${{priceMediumTotalUSD}}</p> 
                   </div>
              </div>
              </v-card>


            <v-card  id="cardLarge" class="col-md-3 mx-auto">
            <div class="d-flex">
            <div>
               <p class="printSize">Large Print</p> 
                     <p class="printPrice" style="color: #2fb999">{{priceLargeTotal}} ETH</p>
                    <p class="printPriceUSD">${{priceLargeTotalUSD}}</p> 
              </div>
            </div>
            </v-card>
            </div>



      <div id="divStepper" class="col-md-11">
        <v-stepper v-model="e6" vertical id="stepper" color="#1d5df9">
          <v-stepper-step :complete="e6 > 1" step="1" color="#1d5df9">
           Upload .gcode file
          </v-stepper-step>

          <v-stepper-content step="1">
           <div class="col-md-12 row">
       <vue-dropzone
          class="col-md-12 mx-auto"
          ref="myVueDropzone"
          id="myDropzone"
          :options="dropzoneOptions"
        ></vue-dropzone>
         <v-btn id="btnNext" color="#1d5df9" @click="e6 = 2">Next</v-btn>
      </div>

          </v-stepper-content>

          <v-stepper-step :complete="e6 > 2" step="2" color="#1d5df9">
           Shipping Info
          </v-stepper-step>

          <v-stepper-content step="2">
        <div id="modalContainer" class="col-md-12">
        <div class="col-md-8">
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
    >
        <div class="col-md-12 row" style="padding: 0; margin: 0">
        <v-text-field
            style="padding: 0; margin: 0"
            class="col-md-5"
            v-model="firstName"
            :rules="firstNameRules"
            label="First Name"
            color="#1d5df9"
            required
        ></v-text-field>

         <v-text-field
         style="padding: 0; margin: 0; padding-left: 20px;"
            class="col-md-5"
            v-model="lastName"
            :rules="lastNameRules"
            label="Last Name"
            color="#1d5df9"
            required
        ></v-text-field>
    </div>

         <v-text-field
         style="padding: 0; margin: 0"
            v-model="streetAddress"
            :rules="streetAddressRules"
            label="Street Address"
            color="#1d5df9"
            required
        ></v-text-field>

        <v-text-field
         style="padding: 0; margin: 0"
            v-model="town"
            :rules="townRules"
            label="Town/City"
            color="#1d5df9"
            required
        ></v-text-field>

           <v-text-field
          style="padding: 0; margin: 0"
          v-model="selectedState"
          :items="states"
          :rules="stateRules"
          label="State/Providence"
                 color="#1d5df9"
        ></v-text-field>

        <div class="row">
          <v-select
          class="col-md-6"
          v-model="selectedCountry"
          :items="countryItems"
          :rules="countryRules"
          label="Select Country"
                 color="#1d5df9"
        ></v-select>

         <v-text-field
            class="col-md-4"
            v-model="zip"
            :rules="zipRules"
            label="Zip/Postal Code"
            color="#1d5df9"
            required
            
        ></v-text-field>
        </div>
    <div id="formSubmit">
  <v-btn
      :btnDisabled="!valid"
      color="#1d5df9"
      style="color: white;"
      class="mr-4"
      @click="submitShipping"
    >Next</v-btn>

     <v-btn
      class="mr-4"
      @click="reset"
    >
      Clear Form
    </v-btn>

      </div>
        </v-form>
        </div>
        </div>
          </v-stepper-content>

          <v-stepper-step :complete="e6 > 3" step="3" color="#1d5df9">
           Overview
          </v-stepper-step>

          <v-stepper-content step="3">

             <v-alert id="topInfo" type="info" color="#1d5df9" outlined>
          Your shipping address is stored in a private, off-chain DB and is only shared with the seller
         </v-alert>


             <table>
            <tr>
            <v-card id="cardSummary" class="col-md-12">
              <h4>Order Summary</h4>
              <tr>
                <td id="tdSummaryModel">
                  <span id="spanSummary">Model: </span>
                  {{this.printName}}
                </td>
              </tr>
              <tr>
              <td v-if="buyInstance" id="tdSummary">
                <span id="spanSummary">To/From: </span>
                 <vth-blockie id="blockieBuy" :string="this.buyerAddress" :options="blockieBuyOptions" />
                {{String(this.buyerAddress).substr(0, 15)}}...
                <v-icon color="#1d5df9" id="icoBuy">mdi-arrow-right</v-icon>
                <vth-blockie id="blockieSell" :string="this.$route.params.seller" :options="blockieSellOptions" />
                {{String(this.$route.params.seller).substr(0,15)}}...
                </td> 
              </tr>

              <tr>
                 <td id="tdSummaryShipping">
                  <span id="spanSummary">Shipping To: </span>
                  {{this.shippingAddress}}
                </td>
                </tr>
              
                 <tr>
                <td id="tdSummaryPrice">
                  <span id="spanSummary">Amount:</span>
                  {{determinedPrintCost}} ETH
                </td>
                </tr>

                  <tr>
                <td id="tdSummaryPrice">
                  <span id="spanSummary">&nbsp;Stake:</span>
                   {{determinedStake}} ETH   <v-tooltip
          v-model="show"
          top
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon color="#1d5df9">
                mdi-information-outline
              </v-icon>
            </v-btn>
          </template>
          <span>Your 25% stake is returned to you after your order is finalized.
          </span>
        </v-tooltip>
                </td>
                </tr>
                  <hr>
                         <tr>
                <td id="tdSummaryPriceTotal">
                  <span id="spanSummaryTotal">&nbsp;Total:</span>
                   {{totalPrintCost}} ETH
                </td>
                </tr>
         
              </v-card>
            </tr>
          </table>

          <div class="col-md-12">
          <v-btn color="#1d5df9" id="btnBuy" @click="initEscrow" x-large>Place Order<span style="color: #a8c4ff;margin-left: 10px;">{{totalPrintCost}} ETH</span></v-btn>
          <v-btn id="btnCancel" @click="cancelEscrow" x-large>Cancel Order</v-btn>
        
          <span id="uploadResponse"></span>
          </div>


          
          </v-stepper-content>
        </v-stepper>
      </div>

    </v-container>
  </v-main>
  

  <v-footer app color="#fbfcfd">
    <!-- -->
  </v-footer>
</div>

</template>


<script>
/* eslint-disable */
// @ts-ignore
import axios from "axios"; //Linked NPM module
import Web3 from 'web3'
import vue2Dropzone from "vue2-dropzone"
import "vue2-dropzone/dist/vue2Dropzone.min.css";
import EscrowService from '../services/EscrowService.js'
import OffChainWrites from '../services/OffChainWrites.js'

var _escrowService = new EscrowService;
var _offChainWrites = new OffChainWrites;

var web3 = new Web3("http://localhost:8545");

  export default {
    data: () => ({
      drawer: false,
      group: null,
      valid: false,
      btnDisabled: true,
      e6: 1,
      status: '',
      currentNetwork: '',
      buyInstance:[],
      buyerStreetAddress: [],
      shippingAddress: [],
      buyerAddress: [],
       uploadResponse: [],
       SelectedSellerAddress: "",
       sellerPricing: [],
       priceSmallTotal: '',
       priceMediumTotal:'',
       priceLargeTotal:'',
       priceSmallTotalUSD: '',
       priceMediumTotalUSD:'',
       priceLargeTotalUSD:'',
       printName: '',
       determinedPrintCost: '',
       determinedStake: '',
       totalPrintCost: '',
       blockieOptions: {
         size: 10,
         scale: 5
       },

      blockieBuyOptions: {
        size: 10,
         scale: 5
       },
         blockieSellOptions: {
         size: 10,
         scale: 5
       },
        dropzoneOptions: {
        url: "http://localhost:3000/uploadAsync",
        thumbnailWidth: 80,
        maxFilesize: 10000,
        maxFiles: 1,
        headers: { "My-Awesome-Header": "header value" },
        dictDefaultMessage: "Drag & Drop .gcode files",
        addRemoveLinks: true,
        dictRemoveFile: "Clear File",
        acceptedFiles: '.gcode',
        timeout: 10000000,
        params: {
         //
        },
        init: function() {
            this.on("success", function(file, response) {
              var dom = document.getElementById("uploadResponse");
              var size = response.size;
              dom.innerHTML = JSON.stringify(response)

              if(size == 'small'){
                //document.getElementById("prompt").style.display = "block"
                document.getElementById("cardSmall").style.opacity = '1'
                document.getElementById("cardMedium").style.opacity = '0.3'
                document.getElementById("cardLarge").style.opacity = '0.3'
              }
              else if(size == 'medium'){
                //document.getElementById("prompt").style.display = "block"
                document.getElementById("cardSmall").style.opacity = '0.3'
                document.getElementById("cardMedium").style.opacity = '1'
                document.getElementById("cardLarge").style.opacity = '0.3'
              }
               else if(size == 'large'){
                //document.getElementById("prompt").style.display = "block"
                document.getElementById("cardSmall").style.opacity = '0.3'
                document.getElementById("cardMedium").style.opacity = '0.3'
                document.getElementById("cardLarge").style.opacity = '1'
               }
               else {
                document.getElementById("cardSmall").style.opacity = '0.3'
                document.getElementById("cardMedium").style.opacity = '0.3'
                document.getElementById("cardLarge").style.opacity = '0.3'
                window.alert("Please use Marlin flavored .gcode")
                window.location.reload();
                return false;
               }

              document.getElementById("btnNext").style.opacity = '1';
              document.getElementById("btnNext").disabled = false;
              this.uploadResponse = response
              console.log(this.uploadResponse)
            })
        }
      },

      firstName: '',
      firstNameRules: [
        v => !!v || 'Name Required',
      ],

      lastName: '',
      lastNameRules: [
        v => !!v || 'Name Required',
      ],

      streetAddress: '',
      streetAddressRules: [
        v => !!v || 'Street Address Required',
      ],

      town: '',
      townRules: [
        v => !!v || 'Town or City Required',
      ],

      selectedCountry: '',
      countryItems: ["United States", "Canada", "Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and/or Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Cook Islands", "Costa Rica", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France, Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States minor outlying islands", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City State", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zaire", "Zambia", "Zimbabwe"],
      countryRules: [
        v => !!v || 'Country Required',
      ],
  
      selectedState: '',
      states: ['AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'],
      stateRules: [
        v => !!v || 'State Required',
      ],

      zip: '',
      zipRules: [
        v => !!v || 'Zip Required',
      ],

    }),
    components: {
      vueDropzone: vue2Dropzone,
    },
    props: {

    },
     methods: {

    openSellerShop(sellerAddr){
        this.selectedSeller = sellerAddr;
    },

    async connectToMetamask() {
      if (window.ethereum) {
        await window.ethereum.send("eth_requestAccounts");
        window.web3 = new Web3(window.ethereum);
        this.isConnected == true;
        return true;
      } else {
        return false;
      }
    },

    calculatePricePerPrint() {
        console.log(this.pricingSmall)
    },

    pollAddr() {
    setInterval(function() {
        var dom = document.getElementById("updateBuyer")
        var dom2 = document.getElementById("updateBuyerFull")
        var currAcct = web3.eth.accounts.givenProvider.selectedAddress;
        this.buyerAddress = currAcct;
        dom.innerHTML = currAcct.substr(0, 15);
        dom2.innerHTML = currAcct;
         }, 1000)
      },

      async submitShipping() {
       console.log("method")
          if(this.$refs.form.validate()) {
              this.buyerStreetAddress.push(this.firstName, this.lastName,
              this.streetAddress, this.town, this.selectedState, this.selectedCountry,
              this.zip)
              var fullAddress = this.buyerStreetAddress.join(' ');
              this.shippingAddress = fullAddress;
              var dom = document.getElementById('uploadResponse').innerHTML;
              var json = JSON.parse(dom)
              var price;
            
              if(json.size == 'small'){
               price = this.priceSmallTotal;
              }
                if(json.size == 'medium'){
               price = this.priceMediumTotal;
              }
                 if(json.size == 'large'){
               price = this.priceLargeTotal;
              }
              if(json.size == 'marlin') {
                window.alert("Please upload Marlin 'flavored' .gcode")
                price = this.priceLargeTotal;
              }

              var stake = price * 0.25;
              var totalPrice = parseFloat(stake) + parseFloat(price);

              totalPrice.toFixed(6);

             _escrowService.convertToWei(totalPrice.toFixed(6)).then((data) =>{

              console.log(this.buyerAddress + "||" +
              this.$route.params.seller +  " || " + price + " || " + fullAddress + 
              " || " + json.path +  " || " + json.name );
              this.printName = json.name;

              const _buyInstance = {
                buyerWallet: this.buyerAddress,
                sellerWallet: this.$route.params.seller,
                printCost: data,
                buyerShipping: fullAddress,
                printDL: json.path,
                printName: json.name,
              }

              this.buyInstance.push(_buyInstance);
              this.determinedPrintCost = price;
              this.determinedStake = parseFloat(stake);
              this.totalPrintCost = totalPrice.toFixed(6);
              this.e6 = 3
          })
        }
      },
      reset() {
        this.$refs.form.reset()
      },
      async initEscrow() {

        var buyerAddress = this.buyInstance[0].buyerWallet
        var sellerAddress = this.buyInstance[0].sellerWallet;
        var price = this.buyInstance[0].printCost;
        var shipAddress = this.buyInstance[0].buyerShipping;
        var download = this.buyInstance[0].printDL;
        sellerAddress.toLowerCase()

        console.log( "METHOD SAVE: " + buyerAddress, sellerAddress, price, shipAddress, download)

        await _escrowService.purchaseOrder(buyerAddress, sellerAddress, price).then((data) => {
              console.log(data);
        })

        await _offChainWrites.saveNewEscrow(sellerAddress.toLowerCase(), buyerAddress, price, shipAddress, download).then((data2) => {
               console.log(data2)
          })

      },

      cancelEscrow() {
        window.location.reload();
        return false;
      },
     },

     mounted() {
      this.calculatePricePerPrint();


      document.getElementById("btnNext").disabled = true;
      document.getElementById("btnNext").style.opacity = '0.5';

      console.log(this.$route.params.seller)

       axios
        .post("http://localhost:3000/getSellerPricing", {
          sellerAddress: this.$route.params.seller
        })
        .then((res) => {
          this.sellerPricing = res.data;
          this.priceSmallTotal = res.data.ethSmall;
          this.priceMediumTotal = res.data.ethMedium;
          this.priceLargeTotal = res.data.ethLarge;

          this.priceSmallTotalUSD = res.data.small;
          this.priceMediumTotalUSD = res.data.medium;
          this.priceLargeTotalUSD = res.data.large;
        
        })
        .catch((err) => {
          console.log("Error: ", err);
          return err;
        });

        this.connectToMetamask().then((res) => {
         this.buyerAddress = web3.eth.accounts.givenProvider.selectedAddress;
           _escrowService.queryEscrows(this.buyerAddress).then((data) => {
          if(data[1] != 0){
            var btnBuy = document.getElementById("btnBuy")
            btnBuy.disabled = true;
            btnBuy.style.opacity = 0.5;
          }
        })
        });
        
        _escrowService.getNetwork().then((data) => {
          this.currentNetwork = data
        })

        this.pollAddr();
    

     },

    watch: {
      group () {
        this.drawer = true
        
      },
    },

    created() {
      

    },
  }
</script>





<style scoped>
#appBar {
    height: 50px !important;
    box-shadow: none;
    padding: 0;
    margin: 0;
    z-index: 1000;
    font-family: 'IBM Plex Sans', 'sans-serif';

    
}

#navDrawerStore {
  width: 100%;
  position: fixed;
  padding: 0;
  margin: 0;
  z-index: 2000;
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
    padding: 0;
    margin: 0;
    background-color: #fbfcfd;
    font-family: 'IBM Plex Sans', 'sans-serif';

}

#storeTitle {
    padding-top: 10px;
    margin-left: 45px;
    font-weight: 300;
}

table td {
    text-align: center;
    line-height: 40px;
}


#blockie {
  border-radius: 5px;
  margin-right: 10px;
}


#blockieBuy {
  width: 20px;
  height: 20px;
  border-radius: 2px;
    margin-top: -3px;
  margin-right: 3px;
    margin-left: 5px;
}

#blockieSell {
  width: 20px;
  height: 20px;
  border-radius: 2px;
    margin-top: -3px;
  margin-right: 3px;
  margin-left: 10px;
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
  color: #1d5df9!important;
  text-decoration: none !important;
}

#homeLink {
  text-decoration: none;
  
}

#navList {
  margin-top: 20px;
}

#cardSmall {
  height: 80px;
  padding: 0;
  margin: 0;
  padding-left: 15px;
  padding-top: 5px;
}

#cardMedium {
   height: 80px;
  padding: 0;
  margin: 0;
  padding-left: 15px;
  padding-top: 5px;
}

#cardLarge {
   height: 80px;
  padding: 0;
  margin: 0;
  padding-left: 15px;
  padding-top: 5px;
}

.printSize {
  font-weight: 400;
  font-size: 14px;
  
}

.printPrice {
  font-size: 1.4em;
  text-align: right;
    line-height: 0px;
 color: #2c3e50;
margin-right: 5px;
font-weight: 300;  font-family: 'consolas';
}

.printPriceUSD {
  font-family: 'consolas';
  font-size: 0.9em;
    opacity: 0.5;
        line-height: 8px;
 color: #2c3e50;
}

.dropzone {
  min-height: 90px !important;
  line-height: 0px;
  background-color: #fbfcfd;
}

#btnBuy {
  margin-left: -10px;
  color: white;
}
#btnCancel {
  margin-left: 10px;
}

#chipResponse {
  width: 200px;
  text-align: center;
  display: none;
}

#updateBuyerFull {
  display: none;
}

#stepper {
    box-shadow: none;
    background-color: #fbfcfd;
    margin-left: 10px;
}

#btnNext {
  margin-top: 10px;
  color: white;
}

#btnShipping {
  color: white;
  margin-right: 10px;
}

#uploadResponse {
  display: none;
}

#formSubmit {
  margin-top: 10px;
}

#icoBuy {
  margin-left: 10px;
}



#spanSummary {
  font-family: 'consolas';
  opacity: 0.5;

}

#spanSummaryTotal {
  font-family: 'consolas';
  font-size: 22px;
  font-weight: 300;

}


#tdSummary {
  text-align: left;
}

#step3 {
  border: 1px solid black;
}


#tdSummaryPrice {
  text-align: left;
}

#tdSummaryPriceTotal {
  font-family: 'consolas';
  font-size: 22px;
  font-weight: 300;

}

#tdSummaryShipping {
  text-align: left;
}

#tdSummaryModel {
  text-align: left;
}


</style>
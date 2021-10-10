<template>
  <div id="signupContainer">
    <div id="titleCard">
      <h1 id="title">Vendor Signup</h1>
    </div>

    <div class="col-md-10 mx-auto">
      <v-alert id="topInfo" type="info" color="#1d5df9" outlined>
        To become a vendor, we'll need some information about you, your printer,
        and the kind of services you want to offer.
      </v-alert>

      <h2 id="formTitles">Seller Information</h2>
      <div class="col-md-10">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="address"
            :rules="addressRules"
            label="Seller's Ethereum Address"
            color="#1d5df9"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            color="#1d5df9"
            required
          ></v-text-field>

          <v-textarea
            counter
            label="Seller Description"
            placeholder="Please give a short description about your services."
            :rules="rules"
            v-model="sellerDesc"
            required
            maxlength="500"
            rows="1"
            auto-grow
          ></v-textarea>

          <h2 id="formTitles">Printer Information</h2>

          <v-text-field
            v-model="printerModel"
            :rules="printerModelRules"
            label="Printer Model"
            color="#1d5df9"
            required
          ></v-text-field>

          <v-select
            :items="materialItems"
            v-model="selectedMaterial"
            label="Current Material Configuration"
            required
          ></v-select>
          <div id="spacer"></div>
          <v-text-field
            v-model="spoolColor"
            :rules="spoolColorRules"
            label="Current Spool Color"
            color="#1d5df9"
            required
          ></v-text-field>

          <br />
          <h4 id="formSubTitles">Printer Dimensions</h4>
          <div class="row col-md-12">
            <v-text-field
              class="col-md-2"
              v-model="dimWidth"
              :rules="dimWidthRules"
              label="Width (mm)"
              color="#1d5df9"
              required
            ></v-text-field>

            <v-text-field
              class="col-md-2"
              v-model="dimLength"
              :rules="dimLengthRules"
              label="Length (mm)"
              color="#1d5df9"
              required
              style="margin-left: 10px;"
            ></v-text-field>

            <v-text-field
              class="col-md-2"
              v-model="dimHeight"
              :rules="dimHeightRules"
              label="Height (mm)"
              color="#1d5df9"
              style="margin-left: 10px;"
              required
            ></v-text-field>
          </div>

          <h4 id="formSubTitles">
            Automation Features <span id="asterix">*</span>
          </h4>

          <v-alert id="topInfo" type="info" color="#1d5df9" outlined>
            If you decide to provide your buyers with remote printer control,
            please mark the checkbox below.
            <br />
            <br />
            A correspondance will be opened to ensure your Octoprint
            instance/API layer is behind a reverse proxy and/or has a secure
            endpoint.
            <br />
            <br />
            <b
              >For information on how to safely allow remote access to your
              printer,
              <a
                id="links"
                href="https://octoprint.org/blog/2018/09/03/safe-remote-access/"
                >please visit this link.</a
              ></b
            >
          </v-alert>

          <div class="col-md-19 row">
            <v-checkbox
              color="#1d5df9"
              v-model="checkboxEndpoint"
              :label="checkboxEndpointLabel"
            ></v-checkbox>
            <div id="spacer"></div>
            <v-checkbox
              id="checkmark2"
              color="#1d5df9"
              v-model="checkboxBedLevel"
              :label="checkboxBedLevelLabel"
            ></v-checkbox>
          </div>

          <h2 id="formTitles">Your Pricing Model</h2>

          <div class="col-md-12 row">
            <v-text-field
              class="col-md-3"
              label="Small Print"
              v-model="smallPrintPrice"
              :rules="smallPrintPriceRules"
              prefix="$"
              required
            ></v-text-field>

            <v-text-field
              class="col-md-3"
              style="margin-left: 10px;"
              label="Medium Print"
              v-model="mediumPrintPrice"
              :rules="mediumPrintPriceRules"
              prefix="$"
              required
            ></v-text-field>

            <v-text-field
              class="col-md-3"
              style="margin-left: 10px;"
              label="Large Print"
              v-model="largePrintPrice"
              :rules="largePrintPriceRules"
              prefix="$"
              required
            ></v-text-field>
          </div>

          <h4 id="formSubTitles">Shipping</h4>

          <div class="col-md-12 row">
            <v-text-field
              class="col-md-3"
              label="Small Parcel"
              v-model="smallShipPrice"
              :rules="smallShipRules"
              prefix="$"
              required
            ></v-text-field>

            <v-text-field
              class="col-md-3"
              style="margin-left: 10px;"
              label="Medium Parcel"
              v-model="mediumShipPrice"
              :rules="mediumShipRules"
              prefix="$"
              required
            ></v-text-field>

            <v-text-field
              class="col-md-3"
              style="margin-left: 10px;"
              label="Large Parcel"
              v-model="largeShipPrice"
              :rules="largeShipRules"
              prefix="$"
              required
            ></v-text-field>
          </div>

          <h4 id="formSubTitles">Commission Fee</h4>

          <v-text-field
            class="col-md-4"
            style="margin-left: 10px;"
            label="Commission Fee"
            v-model="commissionFee"
            :rules="commissionFeeRules"
            prefix="%"
            required
          ></v-text-field>

          <v-alert id="topInfo" type="info" color="#1d5df9" outlined>
            Please note that we ask vendors as well as buyers to stake 25% of
            each order's sale price, with each stake returned to its respective
            staker after finalization. Staking is implemented because it
            motivates both parties to work toward a successful and mutually
            beneficial sale.
          </v-alert>

          <div id="formSubmit">
            <v-btn
              :disabled="!valid"
              color="#1d5df9"
              style="color: white; width: 150px;"
              class="mr-4"
              x-large
              @click="registerUser"
            >
              Register
            </v-btn>

            <v-btn class="mr-4" x-large @click="reset">
              Clear Form
            </v-btn>

            <!--<v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>-->
          </div>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    valid: true,

    // user models
    address: '',
    addressRules: [
      v => !!v || 'ETH address required',
      v => /^0x[a-fA-F0-9]{40}$/.test(v) || 'Invalid ETH address detected'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
  
    sellerDesc: '',
    active: true,
    rating: 0,

    //printer models
    printerModel: '',
    printerModelRules: [v => !!v || 'Printer Model is required'],
    selectedMaterial: '',
    materialItems: [
      'PLA',
      'ABS',
      'PETG (PET PETT)',
      'TPE',
      'Nylon',
      'Polycarbonate',
      'Carbon Fiber',
      'Metal',
      'Other (Please specify in your seller description'
    ],
    spoolColor: '',
    spoolColorRules: [v => !!v || 'Please specify a color'],
    dimWidth: '',
    dimWidthRules: [
      v => !!v || 'Width in mm required',
      v => /[0-9]/.test(v) || 'Whole numbers only please'
    ],
    dimLength: '',
    dimLengthRules: [
      v => !!v || 'Length in mm required',
      v => /[0-9]/.test(v) || 'Whole numbers only please'
    ],
    dimHeight: '',
    dimHeightRules: [
      v => !!v || 'Length in mm required',
      v => /[0-9]/.test(v) || 'Whole numbers only please'
    ],
    checkboxEndpoint: false,
    checkboxEndpointLabel:
      "Im interested in exploring 3dETH's automation features",
    checkboxBedLevel: false,
    checkboxBedLevelLabel: 'Printer has automatic bed leveling capability',
    printerEndpoint: '',
    printerBearerToken: 'none',

    //pricing models
    smallPrintPrice: '',
    smallPrintPriceRules: [
      v => !!v || 'Please specify a dollar amount',
      v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Please specify a dollar amount'
    ],

    mediumPrintPrice: '',
    mediumPrintPriceRules: [
      v => !!v || 'Please specify a dollar amount',
      v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Please specify a dollar amount'
    ],

    largePrintPrice: '',
    largePrintPriceRules: [
      v => !!v || 'Please specify a dollar amount',
      v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Please specify a dollar amount'
    ],

    smallShipPrice: '',
    smallShipRules: [
      v => !!v || 'Please specify a dollar amount',
      v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Please specify a dollar amount'
    ],

    mediumShipPrice: '',
    mediumShipRules: [
      v => !!v || 'Please specify a dollar amount',
      v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Please specify a dollar amount'
    ],

    largeShipPrice: '',
    largeShipRules: [
      v => !!v || 'Please specify a dollar amount',
      v => /^[1-9]\d*(\.\d+)?$/.test(v) || 'Please specify a dollar amount'
    ],
    commissionFee: '',
    commissionFeeRules: [
      v => !!v || 'Please specify a percentage',
      v =>
        /^[0-9][0-9]?$|^100$/.test(v) ||
        'Please specify a percentage between 0 - 100'
    ]
  }),

  methods: {
    async registerUser() {
      if (this.$refs.form.validate()) {
        await this.registerNewUser()
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },

    registerNewUser() {
      axios
        .post('http://localhost:3000/register', {
          sellerAddress: this.address,
          sellerEmail: this.email,
          sellerDescription: this.sellerDesc,
          sellerRating: this.rating,
          sellerActive: this.active,
          printModel: this.printerModel,
          printerMaterial: this.selectedMaterial,
          spoolCol: this.spoolColor,
          printerWidth: this.dimWidth,
          printerLength: this.dimLength,
          printerHeight: this.dimHeight,
          autoBedLevel: this.checkboxBedLevel,
          printerEndpoint: this.checkboxEndpoint,
          printerBearerToken: this.printerBearerToken,
          pricingSmall: this.smallPrintPrice,
          pricingMedium: this.mediumPrintPrice,
          pricingLarge: this.largePrintPrice,
          shippingSmall: this.smallShipPrice,
          shippingMedium: this.mediumShipPrice,
          shippingLarge: this.largeShipPrice,
          commission: this.commissionFee
        })
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log('Error: ', err)
        })
    }
  }
}
</script>

<style lang="css" scoped>
#signupContainer {
  background-color: #fbfcfd;
  font-family: 'IBM Plex Sans', 'sans-serif';
}

#titleCard {
  width: 100%;
  height: 170px;
  background-color: #1d5df9;
}

#title {
  text-align: center;
  padding-top: 50px;
  color: #fff;
  font-size: 44px;
  font-weight: 600;
}

#formTitles {
  margin-top: 30px;
  font-size: 28px;
  font-weight: 300;
}

#formSubmit {
  margin-top: 40px;
  margin-bottom: 50px;
}

#topInfo {
  margin-top: 25px;
}

#asterix {
  color: red;
}

#links {
  color: #3fb27f;
}

#spacer {
  width: 50px;
}
</style>

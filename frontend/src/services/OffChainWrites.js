import axios from 'axios'

class OffChainWrites {
  saveNewEscrow = async function(seller, buyer, cost, shipping, dl) {
    await axios
      .post('https://3dethxyz.xyz/saveNewEscrows', {
        sellerWallet: seller,
        buyerWallet: buyer,
        printCost: cost,
        buyerShippingAddress: shipping,
        printDL: dl
      })
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.log('Error: ', err)
        return err
      })
  }
}
export default OffChainWrites

import axios from 'axios'

class OffChainQueries {
  getSellerEscrows = async function(address) {
    var data = ''
    await axios
      .post('https://3dethxyz.xyz/getSellerEscrows', {
        sellerAddress: address
      })
      .then(res => {
        data = res.data
      })
      .catch(err => {
        console.log('Error: ', err)
        return err
      })
    return data
  }

  getBuyerEscrows = async function(address) {
    var data = ''
    await axios
      .post('https://3dethxyz.xyz/getBuyerEscrows', {
        buyerAddress: address
      })
      .then(res => {
        data = res.data
      })
      .catch(err => {
        console.log('Error: ', err)
        return err
      })
    return data
  }

  async getSellers() {
    var sData
    await axios
      .post('https://3dethxyz.xyz/getSellers', {})
      .then(res => {
        res.data = JSON.stringify(sData)
        return sData
      })
      .catch(err => {
        console.log('Error: ', err, sData)
        return err
      })
  }
}
export default OffChainQueries

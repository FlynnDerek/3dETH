import Web3 from './Web3'
const ABI = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"SellerStake","type":"event"},{"inputs":[{"internalType":"address payable","name":"_buyer_address","type":"address"},{"internalType":"address payable","name":"_seller_address","type":"address"}],"name":"closeDispute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_buyer","type":"address"},{"internalType":"address payable","name":"_seller","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"createNewEscrow","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_buyer_address","type":"address"}],"name":"finalizeEscrow","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyer_address","type":"address"}],"name":"getEscrowInfo","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_buyer_address","type":"address"}],"name":"openDispute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyer_address","type":"address"},{"internalType":"address","name":"_seller_address","type":"address"}],"name":"setPrintShipped","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_buyer_address","type":"address"},{"internalType":"address payable","name":"_seller_address","type":"address"},{"internalType":"uint256","name":"_stake","type":"uint256"}],"name":"stakeSeller","outputs":[],"stateMutability":"payable","type":"function"}]
const ADDRESS = '0xE038213C982e18c9A5A68B1B597a425610638360'

class EscrowService {

    queryEscrows = async function(address) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")       
        if (!web3) {
            return undefined
        }
        const contract = await new web3.eth.Contract(ABI, ADDRESS)
        return contract.methods.getEscrowInfo(address).call();
    }

    purchaseOrder = async function(buyerAddress, sellerAddress, price) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

       const contract = new web3.eth.Contract(ABI, ADDRESS)
        
        contract.methods.createNewEscrow(buyerAddress, sellerAddress, price).send({
            from: buyerAddress, value: price, gas:3000000})
            .on('receipt', (receipt) => {
                window.alert("Tx Receipt: " + receipt.transactionHash)
                window.location.href = '/#/app/escrow'
            }
        )
    }

    stakeSeller = async function(buyerAddress, sellerAddress, stake) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

       const contract = await new web3.eth.Contract(ABI, ADDRESS)
       contract.methods.stakeSeller(buyerAddress, sellerAddress, stake).send({
        from: sellerAddress, value: stake, gas:3000000})
        .on('receipt', (receipt) => {
            window.alert("Tx Receipt: " + receipt.transactionHash)
            window.location.href = "/#/app/escrow"
        })
    }



    markShipped = async function(buyerAddress, sellerAddress) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

       const contract = await new web3.eth.Contract(ABI, ADDRESS)
       contract.methods.setPrintShipped(buyerAddress, sellerAddress).send({
        from: sellerAddress, gas:3000000})
        .on('receipt', (receipt) => {
            window.alert("Tx Receipt: " + receipt.transactionHash)
            window.location.href = "/#/app/escrow"
        })
    }

    finalizeEscrow = async function(buyerAddress) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

       const contract = await new web3.eth.Contract(ABI, ADDRESS)
       contract.methods.finalizeEscrow(buyerAddress).send({
        from: buyerAddress, gas:3000000})
        .on('receipt', (receipt) => {
            window.alert("Tx Receipt: " + receipt.transactionHash)
            window.location.href = "/#/app/escrow"
        })
    }

    openDispute = async function(buyerAddress) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

       const contract = await new web3.eth.Contract(ABI, ADDRESS)
       contract.methods.openDispute(buyerAddress).send({
        from: buyerAddress, gas:3000000})
        .on('receipt', (receipt) => {
            window.alert("Tx Receipt: " + receipt.transactionHash)
            window.location.href = "/#/app/escrow"
        })
    }

    closeDispute = async function(buyerAddress, sellerAddress) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

       var account = web3.currentProvider.selectedAddress

       const contract = await new web3.eth.Contract(ABI, ADDRESS)
       contract.methods.closeDispute(buyerAddress, sellerAddress).send({
        from: account, gas:3000000})
        .on('receipt', (receipt) => {
            window.alert("Tx Receipt: " + receipt.transactionHash)
            window.location.href = "/#/app/escrow"
        })
    }





    // UTILS
    convertToWei = async function(price) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

        if(web3){
            return web3.utils.toWei(price, 'ether')
        }
        else {
            return undefined;
        }
    }

    convertFromWei = async function(price) {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }

        if(web3){
            return web3.utils.fromWei(price, 'ether')
        }
        else {
            return undefined;
        }
    }


    getNetwork = async function() {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }
        const network = web3.currentProvider.networkVersion
        switch(network) {
            case '1':
                return 'Mainnet'
            case '2': 
                return 'Morden'
            case '3':
                return 'Ropsten'
            case '4':
                return 'Rinkeby'
            case '42':
                return 'Kovan'
            default:
                return 'Unknown'
        }
    }

    getLoggedAccount = async function() {
        const web3 = await Web3("https://ropsten.infura.io/v3/7217936b42764ec1ba1aef3f3d21e723")        
        if (!web3) {
            return undefined
        }
        const accounts = await web3.eth.getAccounts()

        return (accounts && accounts.length>0)?accounts[0]: undefined
    }
}

export default EscrowService
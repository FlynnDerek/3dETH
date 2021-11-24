// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PrintEscrow {
      
    // NewEscrow represents an escrow instance, its price and different states
    struct NewEscrow {
        address payable seller;
        uint256 price;
        bool sellerStaked;
        bool printShipped;
        bool finalized;
        bool disputed;
    }
    
    // Solidity's equivalent of a dictionary
    // We map a buyer address (key) to an escrow instance (value)
    // This saves on ethereum network fees since we dont need to loop
    // through all the instances. 
    mapping(address => NewEscrow) escrows;
    
    // events are stored to the ethereum blockchain without costing ethereum,
    // its slightly more efficient
    event NewEscrowCreated(address indexed _from, uint _value);
    event SellerStaked(address indexed _from, uint _value);
    event PrintShipped(address indexed _from);  
    event OrderFinalized(address indexed _from, uint value);
    event DisputeOpened(address indexed _from);
    event DisputeClosed(address indexed _from);
    
    //only allow buyer to call a function
    modifier onlyBuyer(address i) {
        require(msg.sender == i, "buyer only");
        _;
    }

    //only allow seller to call a function
    modifier onlySeller(address j) {
        require(msg.sender == j, "seller only");
        _;
    }
    
    // create new instance of NewEscrow with the buyer, seller and price of the item
    // also stakes the buyer
    function createNewEscrow(address payable _buyer, address payable _seller, uint256 _price) public payable {
        require( msg.value >= _price);
        require( msg.sender.balance >= _price);
        escrows[_buyer].seller = _seller;
        escrows[_buyer].price = _price;
        emit NewEscrowCreated(_buyer, _price);
    }
    
    // stake the seller and lock 25% of the escrow price into the contract
    function stakeSeller(address _buyer_address, address payable _seller_address, uint256 _stake) onlySeller(_seller_address) public payable {
        require( msg.value >= _stake);
        require( msg.sender.balance >= _stake);
        escrows[_buyer_address].sellerStaked = true;
        emit SellerStaked(_seller_address, _stake);
    }
    
    // Seller calls this function when the print model is shipped
    function setPrintShipped(address _buyer_address, address _seller_address) onlySeller(_seller_address) public {
        require(escrows[_buyer_address].sellerStaked = true, "No Stake");
        escrows[_buyer_address].printShipped = true;
        emit PrintShipped(_seller_address);
    }
    
    // Buyer finalized when they recieve the model and release the funds
    // Buyer gets their 25% stake back
    // Seller gets their 25% stake back and the purchase price
    function finalizeEscrow(address payable _buyer_address) onlyBuyer(_buyer_address) public {
        require(escrows[_buyer_address].printShipped = true, "No FE");
        escrows[_buyer_address].finalized = true;
        address payable sellerAddress = escrows[_buyer_address].seller;
        sellerAddress.transfer(escrows[_buyer_address].price);
        _buyer_address.transfer(escrows[_buyer_address].price / 4);
        emit OrderFinalized(_buyer_address, escrows[_buyer_address].price);
    }

    // Buyer can open a dispute if there is a problem
    function openDispute(address _buyer_address) onlyBuyer(_buyer_address) public {
         require(escrows[_buyer_address].sellerStaked = true, "Seller not staked");
         escrows[_buyer_address].disputed = true;
         emit DisputeOpened(_buyer_address);
    }
    
    // If a disputed escrow cant be resolved, the buyer or seller can close the dispute
    // Buyer gets their purchase price back, but loses their 25% stake
    // Seller gets their 25% stake back. 
    function closeDispute(address payable _buyer_address, address payable _seller_address) public {
        require(escrows[_buyer_address].disputed = true, "No Dispute");
        _buyer_address.transfer(escrows[_buyer_address].price);
        _seller_address.transfer(escrows[_buyer_address].price / 4);
         emit DisputeClosed(_buyer_address);
    }
    

    // Returns all information about an escrow, buyer addresses is the key 
    function getEscrowInfo(address _buyer_address) public view returns (address, uint256, bool, bool, bool, bool) {
        address _seller = escrows[_buyer_address].seller;
        uint256 _price = escrows[_buyer_address].price;
        bool _sellerStaked = escrows[_buyer_address].sellerStaked;
        bool _printShipped = escrows[_buyer_address].printShipped;
        bool _finalized = escrows[_buyer_address].finalized;
        bool _disputed = escrows[_buyer_address].disputed;
       
        return (_seller, _price, _sellerStaked, _printShipped, _finalized, _disputed);
    }
}

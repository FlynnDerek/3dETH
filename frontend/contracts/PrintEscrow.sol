// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract PrintEscrow {
      
    struct NewEscrow {
        address payable seller;
        uint256 price;
        bool sellerStaked;
        bool printShipped;
        bool finalized;
        bool disputed;
    }
    
    mapping(address => NewEscrow) escrows;
    
    event SellerStake(address indexed _from, uint _value);
        
    modifier onlyBuyer(address i) {
        require(msg.sender == i, "buyer only");
        _;
    }

    modifier onlySeller(address j) {
        require(msg.sender == j, "seller only");
        _;
    }
    
    function createNewEscrow(address payable _buyer, address payable _seller, uint256 _price) public payable {
        require( msg.value >= _price);
        require( msg.sender.balance >= _price);
        escrows[_buyer].seller = _seller;
        escrows[_buyer].price = _price;
    }
    
    function stakeSeller(address _buyer_address, address payable _seller_address, uint256 _stake) onlySeller(_seller_address)  public payable {
        require( msg.value >= _stake);
        require( msg.sender.balance >= _stake);
        escrows[_buyer_address].sellerStaked = true;
    }
    
    function setPrintShipped(address _buyer_address, address _seller_address) onlySeller(_seller_address) public {
        require(escrows[_buyer_address].sellerStaked = true, "No Stake");
        escrows[_buyer_address].printShipped = true;
    }
    
    function finalizeEscrow(address payable _buyer_address) onlyBuyer(_buyer_address) public {
        require(escrows[_buyer_address].printShipped = true, "No FE");
        escrows[_buyer_address].finalized = true;
        address payable sellerAddress = escrows[_buyer_address].seller;
        sellerAddress.transfer(escrows[_buyer_address].price);
        _buyer_address.transfer(escrows[_buyer_address].price / 4);
    }
    
    function openDispute(address _buyer_address) onlyBuyer(_buyer_address) public {
         require(escrows[_buyer_address].sellerStaked = true, "Seller not staked");
         escrows[_buyer_address].disputed = true;
    }
    
    function closeDispute(address payable _buyer_address, address payable _seller_address) public {
        require(escrows[_buyer_address].disputed = true, "No Dispute");
        _buyer_address.transfer(escrows[_buyer_address].price);
        _seller_address.transfer(escrows[_buyer_address].price / 4);
         escrows[_buyer_address].disputed = true;
    }
    
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

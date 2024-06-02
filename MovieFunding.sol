// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

//import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./MovieToken.sol";

contract MovieFunding {
    MovieToken token;
    address payable owner;
    constructor(string memory MovieName, string memory TokenSymbol) {
        token = new MovieToken(MovieName, TokenSymbol);
        owner = payable(tx.origin);
    }
    function donate() public payable {
        token.mint(msg.sender, msg.value);
    }
    function withdrawFundings() public payable onlyOwner {
        owner.transfer(address(this).balance);
    }
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    function getOwner() public view returns (address) {
        return owner;
    }

    // function withdrawFundings() public payable onlyOwner {
    //     payable(owner()).transfer(address(this).balance);
    // }
}

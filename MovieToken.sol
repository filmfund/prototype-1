// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MovieToken is ERC20, Ownable {
    constructor(
        string memory TokenName,
        string memory TokenSymbol
    ) ERC20(TokenName, TokenSymbol) {}
    function mint(address reciever, uint256 amount) public onlyOwner {
        _mint(reciever, amount);
    }
}

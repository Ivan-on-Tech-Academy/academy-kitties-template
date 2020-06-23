pragma solidity ^0.5.12;

import "./IERC721.sol";

contract Kittycontract is IERC721 {

    mapping(address => uint256) ownershipTokenCount;

    function balanceOf(address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

}
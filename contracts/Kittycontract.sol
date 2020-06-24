pragma solidity ^0.5.12;

import "./IERC721.sol";

contract Kittycontract is IERC721 {

    string public constant name = "FilipKitties";
    string public constant symbol = "FK";

    struct Kitty {
        uint256 genes;
        uint64 birthTime;
        uint32 mumId;
        uint32 dadId;
        uint16 generation;
    }

    Kitty[] kitties;

    mapping (uint256 => address) public kittyIndexToOwner;
    mapping (address => uint256) ownershipTokenCount;

    function balanceOf(address owner) external view returns (uint256 balance){
        return ownershipTokenCount[owner];
    }

}
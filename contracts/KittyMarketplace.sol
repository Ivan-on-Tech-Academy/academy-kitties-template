pragma solidity ^0.5.0;

import "./Kittycontract.sol";
import "./Ownable.sol";
import "./IKittyMarketplace.sol";

contract KittyMarketPlace is Ownable, IKittyMarketPlace {
    Kittycontract private _kittyContract;

    struct Offer {
        address payable seller;
        uint256 price;
        uint256 index;
        uint256 tokenId;
        bool active;
    }

    Offer[] offers;

    mapping(uint256 => Offer) tokenIdToOffer;

}
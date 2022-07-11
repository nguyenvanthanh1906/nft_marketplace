// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftMarket is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;

    struct NftItem {
        uint256 tokenId;
        uint256 price;
        address creator;
        bool isListed;
    }

    uint256 public listingPrice = 0.025 ether;

    Counters.Counter private _listedItems;
    Counters.Counter private _tokenIds;

    mapping(string => bool) private _usedTokenURIs; //xac định xem URI đã tồn tại chưa
    mapping(uint256 => NftItem) private _idToNftItem; //id=>nft

    mapping(address => mapping(uint256 => uint256)) private _ownedTokens; //địa chỉ => (só thứ tự => tokenId)
    mapping(uint256 => uint256) private _idToOwnedIndex; //tokenId => số thứ tự thứ bao nhiêu của 1 address

    uint256[] private _allNfts; //chua id cua tat ca token

    mapping(uint256 => uint256) private _idToNftIndex; //id=>index

    mapping(uint256 => bool) private _idToStarted; //id => is started bid
    mapping(uint256 => uint256) private _idToEndAt;
    mapping(uint256 => address) private _idToHighestBidder;
    mapping(uint256 => uint256) private _idToHighestBid;
    mapping(uint256 => address) private _idToBidOwn;

    event NftItemCreated(
        uint256 indexed tokenId,
        uint256 price,
        address creator,
        bool isListed
    );

    event NftTransactions(
        uint256 indexed tokenId,
        uint256 price,
        address from,
        address to,
        uint time
    );

    constructor() ERC721("ABC", "VTKV") {}

    function getEndAtById(uint256 tokenId) public view returns(uint256) {
        return _idToEndAt[tokenId];
    }

    function start(uint256 tokenId, uint256 time) external {
        address owner = ERC721.ownerOf(tokenId);
        bool isStarted = _idToStarted[tokenId];
        require(msg.sender == owner, "not seller");
        require(isStarted == false, "started");
        _idToStarted[tokenId] = true;
        _idToEndAt[tokenId] = time + 100;
        _idToBidOwn[tokenId] = owner;
        _transfer(owner, address(this), tokenId);
    }

    function bid(uint256 tokenId, uint256 time) external payable {
        bool isStarted = _idToStarted[tokenId];
        uint256 endAt = _idToEndAt[tokenId];
        uint256 highestBid = _idToHighestBid[tokenId];
        address highestBidder = _idToHighestBidder[tokenId];
        require(isStarted, "not started");
        require(time < endAt, "ended");
        require(msg.value > highestBid, " value < highest bid");
        if(highestBidder != address(0)) {
            payable(highestBidder).transfer(highestBid);
        }
        _idToHighestBid[tokenId] = msg.value;
        _idToHighestBidder[tokenId] = msg.sender;
    }

    function end(uint256 tokenId, uint256 time) external payable{
        address bidOwn = _idToBidOwn[tokenId];
        bool isStarted = _idToStarted[tokenId];
        uint256 endAt = _idToEndAt[tokenId];
        uint256 highestBid = _idToHighestBid[tokenId];
        address highestBidder = _idToHighestBidder[tokenId];
        require(isStarted, "not started");
        require(time >= endAt, "ended");
        _idToStarted[tokenId] = false;
        _idToEndAt[tokenId] = 0;
        if(highestBidder == address(0)) {
            _transfer(address(this), bidOwn, tokenId);
        } else {
            _transfer(address(this), highestBidder, tokenId);
        }
        payable(bidOwn).transfer(highestBid);
        _idToHighestBid[tokenId] = 0;
        _idToHighestBidder[tokenId] = address(0);
        _idToBidOwn[tokenId] = address(0);
    }

    function setListingPrice(uint256 newPrice) external onlyOwner {
        require(newPrice > 0, "Price must be at least 1 wei");
        listingPrice = newPrice;
    }

    function getNftItem(uint256 tokenId) public view returns (NftItem memory) {
        return _idToNftItem[tokenId];
    }

    function listedItemsCount() public view returns (uint256) {
        return _listedItems.current();
    }

    function tokenURIExists(string memory tokenURI) public view returns (bool) {
        return _usedTokenURIs[tokenURI] == true;
    }

    function totalSupply() public view returns (uint256) {
        return _allNfts.length;
    }

    function tokenByIndex(uint256 index) public view returns (uint256) {
        require(index < totalSupply(), "Index out of bounds");
        return _allNfts[index];
    }

    function tokenOfOwnerByIndex(address owner, uint256 index)
        public
        view
        returns (uint256)
    {
        require(index < ERC721.balanceOf(owner), "Index out of bounds");
        return _ownedTokens[owner][index];
    }

    function getAllNftsOnSale() public view returns (NftItem[] memory) {
        uint256 allItemsCounts = totalSupply();
        uint256 currentIndex = 0;
        NftItem[] memory items = new NftItem[](_listedItems.current());

        for (uint256 i = 0; i < allItemsCounts; i++) {
            uint256 tokenId = tokenByIndex(i);
            NftItem storage item = _idToNftItem[tokenId];

            if (item.isListed == true) {
                items[currentIndex] = item;
                currentIndex += 1;
            }
        }

        return items;
    }

    function getOwnedNfts() public view returns (NftItem[] memory) {
        uint256 ownedItemsCount = ERC721.balanceOf(msg.sender);
        NftItem[] memory items = new NftItem[](ownedItemsCount);

        for (uint256 i = 0; i < ownedItemsCount; i++) {
            uint256 tokenId = tokenOfOwnerByIndex(msg.sender, i);
            NftItem storage item = _idToNftItem[tokenId];
            items[i] = item;
        }

        return items;
    }

    function mintToken(string memory tokenURI, uint256 price)
        public
        payable
        returns (uint256)
    {
        require(!tokenURIExists(tokenURI), "Token URI already exists");
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _tokenIds.increment();
        _listedItems.increment();

        uint256 newTokenId = _tokenIds.current();

        _safeMint(msg.sender, newTokenId);
        _setTokenURI(newTokenId, tokenURI);
        _createNftItem(newTokenId, price);
        _usedTokenURIs[tokenURI] = true;

        return newTokenId;
    }

    function buyNft(uint256 tokenId) public payable {
        uint256 price = _idToNftItem[tokenId].price;
        address owner = ERC721.ownerOf(tokenId);

        require(msg.sender != owner, "You already own this NFT");
        require(msg.value == price, "Please submit the asking price");

        _idToNftItem[tokenId].isListed = false;
        _listedItems.decrement();

        _transfer(owner, msg.sender, tokenId);
        payable(owner).transfer(msg.value);

        emit NftTransactions(tokenId, msg.value, owner, msg.sender, block.timestamp);
    }

    function placeNftOnSale(uint256 tokenId, uint256 newPrice) public payable {
        require(
            ERC721.ownerOf(tokenId) == msg.sender,
            "You are not owner of this nft"
        );
        require(
            _idToNftItem[tokenId].isListed == false,
            "Item is already on sale"
        );
        require(
            msg.value == listingPrice,
            "Price must be equal to listing price"
        );

        _idToNftItem[tokenId].isListed = true;
        _idToNftItem[tokenId].price = newPrice;
        _listedItems.increment();
    }

    function _createNftItem(uint256 tokenId, uint256 price) private {
        require(price > 0, "Price must be at least 1 wei");

        _idToNftItem[tokenId] = NftItem(tokenId, price, msg.sender, true);

        emit NftItemCreated(tokenId, price, msg.sender, true);
        emit NftTransactions(tokenId, price, address(0), msg.sender, block.timestamp);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal virtual override {
        super._beforeTokenTransfer(from, to, tokenId);

        // minting token
        if (from == address(0)) {
            _addTokenToAllTokensEnumeration(tokenId);
        } else if (from != to) {
            _removeTokenFromOwnerEnumeration(from, tokenId);
        }

        if (to == address(0)) {
            _removeTokenFromAllTokensEnumeration(tokenId);
        } else if (to != from) {
            _addTokenToOwnerEnumeration(to, tokenId);
        }
    }

    function _addTokenToAllTokensEnumeration(uint256 tokenId) private {
        _idToNftIndex[tokenId] = _allNfts.length;
        _allNfts.push(tokenId);
    }

    function _addTokenToOwnerEnumeration(address to, uint256 tokenId) private {
        uint256 length = ERC721.balanceOf(to);
        _ownedTokens[to][length] = tokenId;
        _idToOwnedIndex[tokenId] = length;
    }

    function _removeTokenFromOwnerEnumeration(address from, uint256 tokenId)
        private
    {
        uint256 lastTokenIndex = ERC721.balanceOf(from) - 1;
        uint256 tokenIndex = _idToOwnedIndex[tokenId];

        if (tokenIndex != lastTokenIndex) {
            uint256 lastTokenId = _ownedTokens[from][lastTokenIndex];

            _ownedTokens[from][tokenIndex] = lastTokenId;
            _idToOwnedIndex[lastTokenId] = tokenIndex;
        }

        delete _idToOwnedIndex[tokenId];
        delete _ownedTokens[from][lastTokenIndex];
        //gán giá trị của nơi cần xóa bằng giá trị tại vị trí cuối cùng rồi gán vị trí cuối cùng=0, không thể xóa mapping, chỉ có thể gán=0
    }

    function _removeTokenFromAllTokensEnumeration(uint256 tokenId) private {
        uint256 lastTokenIndex = _allNfts.length - 1;
        uint256 tokenIndex = _idToNftIndex[tokenId];
        uint256 lastTokenId = _allNfts[lastTokenIndex];

        _allNfts[tokenIndex] = lastTokenId;
        _idToNftIndex[lastTokenId] = tokenIndex;

        delete _idToNftIndex[tokenId];
        _allNfts.pop();
    }
}

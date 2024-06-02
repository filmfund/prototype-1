// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

import "./MovieFunding.sol";

contract MovieFundingPlatform {
    address[] public movies;
    function createMovie(
        string memory movieName,
        string memory tokenSymbol
    ) public {
        address movie = address(new MovieFunding(movieName, tokenSymbol));
        movies.push(movie);
    }
    function getMovies() public view returns (address[] memory) {
        return movies;
    }
}

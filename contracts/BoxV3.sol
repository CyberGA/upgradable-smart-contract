// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract BoxV3 {
    uint256 public val;

    // function initialize(uint _val) external {
    //     val = _val;
    // }

    function inc() external {
        val += 1;
    }
}
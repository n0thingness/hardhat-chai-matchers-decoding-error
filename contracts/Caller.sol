// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

contract Caller {
    /// @notice Perform a call - requires CONSIGNOR_CONTROL
    /// @param target Contract to perform the call on
    /// @param data Data to perform the call with
    function call(
        address target,
        bytes calldata data
    )
        external
    {
        (bool ok, bytes memory result) = target.call(data);
        require(ok, string(result));
    }
}
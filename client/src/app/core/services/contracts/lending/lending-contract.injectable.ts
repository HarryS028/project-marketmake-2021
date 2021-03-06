
import { Inject, Injectable } from '@angular/core';
import { Contract, ethers, providers } from 'ethers';

// // --- THE CONTRACT DATA ---
import * as ContractJson from '../../../../../contracts/Lend.json';
import { MetaMaskProvider, RpcProvider } from '../../ethers/ethers.injectable';


/**
 * This is an Angular Injectable class for connecting the client to the 
 * lending Contract through the HardHat RPC localhost network. 
 * 
 */
@Injectable({ providedIn: 'root' })
export class LendingContract extends Contract {

    constructor(
        @Inject(MetaMaskProvider) rpcProvider: providers.Web3Provider
    ) {
        // --- Contract Address ---
        let lendingAddress = "0xF55BbBb34484D17aC730d91B97D97CACC42F4C9b";

        // --- METAMASK Signer ---
        let signer = rpcProvider.getSigner()

        // --- Ethers Contract Class Intialized Parameters ---
        super(lendingAddress, ContractJson.abi, signer);
    }
}
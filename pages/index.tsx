// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import Layout from "@components/Layout"; // Layout wrapper
import { CardRow } from "@components/Row";
import { whatToGet, goOnQuests, gearUp, getYourCharacter, onlyLoot } from "../utils/newLists"
import Opensea from "../img/opensea.svg";
import Twitter from "../img/twitter.svg";
import ExchangeIcon from "../img/exchangeIcon2.svg";
import Discord from "../img/discord.svg";
import Email from "../img/email.svg";
import Github from "../img/github.svg";
import { myProject } from "@utils/darkForestList";

// Types
import type { ReactElement } from "react";


export default function Home(): ReactElement {



  return (
    <Layout>
      <div className="flex flex-wrap justify-around px-2 py-10 mx-auto text-center sm:px-4 sm:py-20 bg-dfarchon  bg-opacity-50">
        <div className="w-full sm:w-1/2">



          <div className="sm:px-4">

            <h1>DF Archon</h1>
            {/* 
            <div className='flex justify-center w-full py-8 space-x-6 nftbox block'>
              <div className="nft-image">
                <img src="favicon.ico"></img>
              </div>

            </div>
            <br/> */}

            <p className="text-xl text-gray-300 sm:text-2xl">
              A development team focused on Dark Forest,
            </p>

            <p className="text-xl text-gray-300 sm:text-2xl">
              working on a more user-friendly gaming environment.
            </p>

            <p className="text-xl text-gray-300 sm:text-2xl">
              {' '}

            </p>

            {/* <div className='flex justify-center w-full py-8 space-x-6 nftbox block'>
              <div className="nft-image circle">
                <video src="/planet.webm" autoPlay muted loop />
              </div>
            </div> */}

            <div className='flex justify-center w-full py-8 space-x-6 bg-archon nftbox'>
              <div className="nft-image circle">
                <img
                  src="favicon.ico"
                  className="center-logo"
                  onClick={() => { window.open("https://gitcoin.co/grants/4263/using-zk-for-game-optimization-in-dark-forest"); }}
                />
              </div>
            </div>

            <p className="text-xl text-gray-300 sm:text-2xl">
              {' '}

            </p>



            <div>
              <div className="flex justify-center w-full py-8 space-x-6">
                {/* <a
                  href="https://www.loot.exchange/"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-600"
                  target="_blank"
                >
                  <ExchangeIcon className="w-6 h-6 mx-2 text-gray-400 fill-current hover:text-gray-200" />
                </a> */}
                {/* <a
                  href="https://opensea.io/collection/lootproject"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-gray-600"
                  target="_blank"
                >
                  <Opensea className="w-6 h-6 mx-2 hover:text-gray-200" />
                </a> */}
                <a
                  href="https://twitter.com/DfArchon"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-blue-400"
                  target="_blank"
                >
                  <Twitter className="w-6 h-6 mx-2 text-white fill-current" />
                </a>

                <a
                  href="https://discord.com/invite/vXCJKfT6a2"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-blue-400"
                  target="_blank"
                >
                  <Discord className="w-6 h-6 mx-2 text-white fill-current" />
                </a>

                <a
                  href="https://github.com/dfarchon"
                  className="self-center p-3 bg-black border border-gray-800 rounded-xl hover:bg-blue-400"
                  target="_blank"
                >
                  <Github className="w-6 h-6 mx-2 text-white fill-current" />
                </a>



              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sticky top-0 z-10 flex flex-wrap justify-center w-full py-4 mx-auto space-x-6 text-sm bg-dfarchon sm:space-x-10 sm:text-2xl font-display">
        <div>
          <a className="hover:text-gray-600" href="#start">INTRO</a>
        </div>
        {/* <div>
          <a className="hover:text-gray-600" href="#members">MEMBERS</a>
        </div> */}

        <div>
          <a className="hover:text-gray-600" href="#dfgaia">DFGAIA</a>
        </div>

       
        {/* <div>
          <a className="hover:text-gray-600" href="#chapter1">Gear Up</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter2">Character</a>
        </div>
        <div>
          <a className="hover:text-gray-600" href="#chapter3">Quests</a>
        </div> */}

      </div>

      <div id="start" className="py-10 pb-40 bg-dark sm:py-20 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3 ">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">decentralized MMOrts game, built with zk-snarks</span>
              <h1 className="mt-4 text-center capitalize"> Dark Forest </h1>
              <p className="text-xl text-gray-400 sm:text-2xl">
                Dark Forest is an MMO strategy game built with zkSNARKs on Gnosis Chain (formerly xDai). Players explore an infinite, procedurally-generated universe, conquering planets and growing a space empire.</p>
            </div>
          </div>


          <div className='flex justify-center w-full py-8 space-x-6 bg-archon nftbox'>
            <div className="nft-image circle">
              <img
                src="darkforestLogo.png"
                className="center-logo"
                onClick={() => { window.open("https://zkga.me"); }}
              />
            </div>
          </div>
          {/* {onlyLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
 */}
          {/* {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })} */}
        </div>
      </div>

      {/* <div id="members" className="py-10 pb-40 bg-dfarchon sm:py-20 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3 ">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">LOVE SU</span>
              <h1 className="mt-4 text-center capitalize"> Dark Forest </h1>
              <p className="text-xl text-gray-400 sm:text-2xl"> </p>
            </div>
          </div>


          <div className='flex justify-center w-full py-8 space-x-6 bg-archon nftbox'>
            <div className="nft-image circle">
              <img
                src=""
                className="center-logo"
                onClick={() => { window.open(""); }}
              />
            </div>
          
          </div>
          {/* {onlyLoot.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}

          {/* {whatToGet.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })} 
        </div>
      </div> */}

      <div id="dfgaia" className="py-10 pb-40 bg-dfarchon sm:py-20 ">
        <div className="container mx-auto mt-8">
         

          {myProject.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}

     
        </div>
      </div>



      {/* <div id="chapter1" className="py-10 pb-40 bg-gray-800 sm:py-20">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">Chapter 1</span>
              <h1 className="mt-4 text-center capitalize">Gear up</h1>
              <p className="text-gray-400 sm:text-2xl">Mint, claim, or trade additional items</p>
            </div>
          </div>

          {gearUp.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter2" className="py-20 bg-gray-700 ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around">
            <div className="px-4 py-8 text-center sm:px-20 rounded-2xl md:w-2/3">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">Chapter 2</span>
              <h1 className="mt-4 text-center">Get Your Character</h1>
              <p className="text-gray-400 sm:text-2xl">Who carried these Loot bags? Where did they come from? What are their stories?</p>
            </div>
          </div>


          {getYourCharacter.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}
        </div>
      </div>
      <div id="chapter3" className="py-20 text-black bg-white ">
        <div className="container mx-auto mt-8">
          <div className="flex justify-around ">
            <div className="px-20 py-8 text-center rounded">
              <span className="tracking-widest text-gray-400 uppercase sm:text-xl">Chapter 3</span>
              <h1 className="mt-4 text-center">Go on Quests</h1>
              <p className="text-gray-400 sm:text-2xl">Go on adventures and visit undiscovered corners of the Lootverse.</p>
            </div>
          </div>

          {goOnQuests.map(({ name, description, project }, i) => {
            return (
              <CardRow key={i} name={name} description={description} project={project} />
            );
          })}

        </div>
      </div> */}
    </Layout >
  );
}

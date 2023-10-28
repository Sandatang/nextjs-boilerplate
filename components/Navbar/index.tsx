import React, { useState } from "react";
import style from "./style.module.css";



function Navbar() {

  const [isWallet, setIsWallet] = useState(null);

  const connectWallet = async () => {
    const { solana } = window as any
   
    setIsWallet((await solana.connect()).publicKey.toString())
    console.log(isWallet)
  }

  return (
    <>
      <div className={style.toolbar}>
        <h4>John Mark - MERN Practitioner</h4>

        <button onClick={connectWallet} className='bg-blue-600/90 p-3 tracking-wider rounded-md hover:text-blue-600 hover:bg-blue-300'>
          { isWallet  ? isWallet : "Connect wallet"}
        </button>

      </div>

    </>
  );
}

export default Navbar;

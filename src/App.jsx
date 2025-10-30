import * as React from "react";
import {useState} from "react";
import {HeroUIProvider} from "@heroui/react";
import "./app.css";

export default function App() {
  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <HeroUIProvider>
<div className="flex h-screen w-screen">
        <aside className="w-[360px] bg-[#1E1E1E] flex flex-col justify-between pt-[25px] pb-[25px]">
          <div>
            <div className="w-[360px] text-center text-5xl pb-[25px]">APP NAME EXAMPLE</div>
            <hr className="w-[300px] mx-auto border-white pb-[25px]" />
            <button className="w-[275px] h-[60px] mx-auto flex items-center text-white hover:bg-[#464646] pl-[14px] rounded-[25px]">
              <img src="/assets/white-plus-icon-3.jpg" className="w-[42px] h-[42px]" alt="icon" /><span className="font-bold text-[32x] pl-[9px]">New chat</span>
            </button>
            <button className="w-[275px] h-[60px] mx-auto flex items-center text-white hover:bg-[#464646] pl-[14px] rounded-[25px]">
              <img src="/assets/house-64.png" className="w-[42px] h-[42px]" alt="icon" /><span className="font-bold text-[32x] pl-[9px]">All chats</span>
            </button>
            <button className="w-[275px] h-[60px] mx-auto flex items-center text-white hover:bg-[#464646] pl-[14px] rounded-[25px]">
              <img src="/assets/speech-bubble-64.png" className="w-[42px] h-[42px]" alt="icon" /><span className="font-bold text-[32x] pl-[9px]">My chats</span>
            </button>
          </div>
          <button className="w-[275px] h-[60px] mx-auto flex items-center text-white hover:bg-[#464646] pl-[14px] rounded-[25px] gap-2">
            <img src="/assets/logout-64 (1)-Photoroom.png" className="w-[42px] h-[42px]" alt="icon" /><span className="font-bold text-[32x] pl-[9px]">Log out</span>
          </button>
        </aside>

        <main className="flex flex-1 flex-col bg-[#121212]">
          <div className="flex justify-between h-[100px] px-[85px] py-[15px] bg-[#1E1E1E]">
            <div className="w-[400px] h-[70px] relative">
              <input type="text" placeholder="Search chats..." className="w-full h-full bg-[white] placeholder:text-[20px] text-gray-400 placeholder:text-gray-400 rounded-[25px] py-[15px] pl-[75px] focus:ring-[2px] focus:ring-blue-500 duration-500 ease-in-out focus:outline-none"/>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="absolute left-[15px] top-[15px] w-[40px] h-[40px] text-gray-400">
                <path strokeLinecap="round" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 3a7.5 7.5 0 006.15 13.65z" />
              </svg>
            </div>

            <div className="flex items-center text-center px-[20px] hover:bg-[#464646] rounded-[25px] w-[300px]" onClick={()=>setMenuOpen(!menuOpen)}>
              <img src="assets/user-profile-icon.png" className="rounded-full w-[50px] h-[50px]" />
              <span className="text-gray text-[28px] pl-[10px]">Username</span>
              <img src="/assets/chevron-icon.png" className="w-auto h-[14px] pl-[10px] pt-[6px]" alt="icon" />
            </div>

            {menuOpen && (
              <div className="absolute right-0 mt-[55px] w-[auto] bg-[#2e2e2e] rounded-[25px] z-100">
                <button className="block w-full text-left px-[10px] py-[10px] text-[18px] text-white hover:bg-[#3a3a3a]">Изменить никнейм</button>
                <button className="block w-full text-left px-[10px] py-[10px] text-[18px] text-white hover:bg-[#3a3a3a]">Изменить аватар</button>
              </div>
            )}
          </div>

          <section className="flex-1 overflow-y-auto p-[50px]">
            <div className="grid grid-cols-[repeat(auto-fill, minmax(300px, 1fr))] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[55px]">
              <div className="bg-gradient-to-b from-[#2B2B2B] to-[#1F1F1F] rounded-[25px] overflow-hidden hover:scale-[1.02] transition-transform">
                <img src="assets/example.png" className="w-full h-[125px] object-cover"/>
                <div className="px-[20px] py-[10px] flex flex-col h-[150px] justify-between">
                  <div>
                    <h3 className="text-white font-bold text-[28px] pb-[10px]">Example chat</h3>
                    <div className="flex items-center text-gray-400 text-[14px] gap-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px]" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM2 14s1-4 6-4 6 4 6 4H2z"/>
                      </svg>
                      <span>Nickname example</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[16px] h-[16px] ml-[15px]" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M13 7a3 3 0 10-6 0 3 3 0 006 0zM3.5 6a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
                      </svg>
                      <span>N members</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center mb-[10px]">
                    <div className="text-gray-400 text-[14px]">Last message: example</div>
                    <button className="bg-blue-500 hover:bg-blue-400 text-white font-semibold px-[15px] py-1.5 rounded-[25px] text-sm transition">
                      Join
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </HeroUIProvider>
  );
}

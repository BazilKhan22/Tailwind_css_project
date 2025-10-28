import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-amber-300 text-xl text-black/80">

      <div className="max-w-[80rem] m-auto grid grid-cols-5 p-10">

        <h1 className="text-2xl font-bold mb-6">
          <span>B</span>rand
        </h1>
<div className="flex gap-8">
        <div className="flex flex-col gap-7">
          <a href="#">Feature</a>
          <a href="#">Use cases</a>
          <a href="#">Integration</a>
          <a href="#">About us</a>
        </div>

        <div className="flex flex-col gap-7">
          <a href="#">Feature</a>
          <a href="#">Use cases</a>
          <a href="#">Integration</a>
          <a href="#">About us</a>
        </div>

        <div className="flex flex-col gap-7">
          <a href="#">Feature</a>
          <a href="#">Use cases</a>
          <a href="#">Integration</a>
          <a href="#">About us</a>
        </div>

        <div className="flex flex-col gap-7">
          <a href="#">Feature</a>
          <a href="#">Use cases</a>
          <a href="#">Integration</a>
          <a href="#">About us</a>
        </div>
        </div>
      </div>

      {/* ✅ line sahi jagah */}
      <hr className="border-t-2 border-black w-full" />

      <p className="text-center text-black/60 mt-6 pb-6">
        © 2024 Brand. All rights reserved.
      </p>

    </footer>
  )
}

export default Footer

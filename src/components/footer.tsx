"use client"
import * as React from "react"

export default function Footer() {
  return (
    <footer className="bg-border rounded-lg shadow m-4 dark:bg-gray-800 mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex items-center justify-center">
            <span className="text-sm text-gray-500 dark:text-gray-400">
                Made by KewKartik {':)'} | <a href="https://github.com/kewkartik" className="hover:underline">Github</a>
            </span>
        </div>
    </footer>
  )
}

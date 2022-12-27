// @ts-nocheck

import type { FC } from 'react'
import { ButtonProps } from './Button.types'
import clsx from 'clsx'

export const Button: FC<ButtonProps> = (props) => {
  const btn = clsx('bg-blue-100')
  const { disabled } = props
  return (
    <>
      <button
        {...props}
        className={clsx(
          'rounded-full border border-gray-400 bg-sky-200 py-1 px-3 text-sm font-medium text-gray-800 hover:bg-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 lg:py-2 lg:px-4 lg:text-base',
          disabled && 'bg-sky-200/70 opacity-70'
        )}
        style={{
          transform: 'translate3d(0, 0, 0)'
        }}>
        {props.children}
      </button>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 sm:px-8 sm:py-12 md:py-16"
        transform="">
        <div className="relative z-10 col-start-1 row-start-1 bg-gradient-to-t from-black px-4 pt-40 pb-3 sm:bg-none">
          <p className="p-[calc(100%*2.5)] text-sm font-medium text-white sm:mb-1 sm:text-gray-500">
            Entire house
          </p>
          <h2 className="text-xl font-semibold text-white sm:text-2xl sm:leading-7 sm:text-black md:text-3xl">
            Beach House in Collingwood
          </h2>
        </div>
        <div className="col-start-1 row-start-2 px-4 sm:pb-16">
          <div className="my-5 flex items-center text-sm font-medium sm:mt-2 sm:mb-4">
            <svg
              width="20"
              height="20"
              fill="currentColor"
              className="text-violet-600">
              <path d="M9.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118l-2.8-2.034c-.784-.57-.381-1.81.587-1.81H7.03a1 1 0 00.95-.69L9.05 3.69z" />
            </svg>
            <div className="ml-1 hover:bg-sky-300 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50">
              <span className="text-xl text-black">4.94</span>
              <span className="sm:hidden md:inline">(128)</span>
            </div>
            <div className="mx-2 text-base font-normal">·</div>
          </div>
          <hr className="hidden w-16 border-gray-300 sm:block" />
        </div>
        <div className="col-start-1 row-start-3 space-y-3 px-4">
          <p className="flex items-center text-sm font-medium text-black">
            <img
              src="/kevin-francis.jpg"
              alt=""
              className="mr-2 h-6 w-6 rounded-full bg-gray-100"
            />
            Hosted by Kevin Francis
          </p>
          <button
            type="button"
            className="rounded-lg bg-violet-100 px-6 py-2 text-base font-semibold text-violet-700">
            Check availability
          </button>
        </div>
        <div className="col-start-1 row-start-1 flex sm:col-start-2 sm:row-span-3">
          <div className="grid w-full grid-cols-3 grid-rows-2 gap-2">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
              <img
                src="/beach-house.jpg"
                alt=""
                className="absolute inset-0 h-full w-full bg-gray-100 object-cover sm:rounded-lg"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/beach-house-interior.jpg"
                alt=""
                className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
            <div className="relative hidden md:block">
              <img
                src="/beach-house-view.jpg"
                alt=""
                className="absolute inset-0 h-full w-full rounded-lg bg-gray-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

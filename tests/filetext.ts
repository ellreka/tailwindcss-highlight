export const filetext = `
import React from 'react'

export const Component = () => {
  return (
    <div className={clsx('p-10 pt-10 pb-10 pl-10 pr-10 px-10 py-10 -p-10', {
      'm-10 mt-10 mb-10 ml-10 mr-10 mx-10 my-10 -m-10': true
    })}>
    <div className="space-x-10 space-y-10 -space-x-10 -space-y-10"></div>
    <div className="border border-t-10 border-t border-none border-gray-100 border-opacity-0 border-solid "></div>
    <div className="divide-x-10 divide-y-10 divide-x divide-y divide-gray-100"></div>
    <div className="ring ring-0 ring-gray-100 ring-offset-gray-100"></div>
    <div className="w w- w-0 w-10 w-2.5 w-1/2 w-full min-w-0 max-w-0 max-w-screen-sm"></div>
    <div className="h h- h-0 h-10 h-2.5 h-1/2 h-full min-h-0 max-h-0"></div>
    <button className="table border-collapse border-separate">on click</button>
    </div>
  )
}
`

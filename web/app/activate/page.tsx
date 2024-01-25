import React from 'react'
import cn from 'classnames'
import Header from '../signin/_header'
import style from '../signin/page.module.css'
import ActivateForm from './activateForm'

const Activate = () => {
  return (
    <div className={cn(
      style.background,
      'flex w-full min-h-screen',
      'sm:p-4 lg:p-8',
      'gap-x-20',
      'justify-center lg:justify-start',
    )}>
      <div className={
        cn(
          'flex w-full flex-col bg-white shadow rounded-2xl shrink-0',
          'space-between',
        )
      }>
        <Header />
        <ActivateForm />
        <div className='px-8 py-6 text-sm font-normal text-gray-500'>
          © {new Date().getFullYear()} BaizeAI. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Activate

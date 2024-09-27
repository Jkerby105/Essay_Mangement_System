import React from 'react'
import { MainNavigation } from '../Components/MainNavigation'
import { Outlet } from 'react-router-dom'

export const EssayRoot = () => {
  return (
    <>
    <MainNavigation/>
    <Outlet/>
    </>
  )
}

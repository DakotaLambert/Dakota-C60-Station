import { Outlet, Route, Routes } from 'react-router-dom'
import { AllItems } from './items/AllItems'
import { HalloweenItems } from './items/HalloweenItems'
import { ChristmasItems } from './items/ChristmasItems'
import { ThanksgivingItems } from './items/ThanksgivingItems'
import { NewDecorationForm } from './forms/NewDecorationForm'
import { ItemDetails } from './items/ItemDetails'
import { NavBar } from './nav/NavBar'
import './styles.css'

export const DecorationStation = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<AllItems />} />
        <Route path=":itemId" element={<ItemDetails />} />
        <Route path="halloween" element={<HalloweenItems />} />
        <Route path="christmas" element={<ChristmasItems />} />
        <Route path="thanksgiving" element={<ThanksgivingItems />} />
        <Route path="new" element={<NewDecorationForm />} />
      </Route>
    </Routes>
  )
}

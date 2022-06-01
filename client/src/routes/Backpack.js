import { NavLink, Outlet } from "react-router-dom";
import "../css/Backpack.css"

export default function Backpack() {
  return (
    <div className='Backpack'>
      <div className='BackpackNav'>
        <NavLink
          to='all'
          data-testid='backpackAll'
          className={({ isActive }) => isActive? "current" : ""}
          >
          All
        </NavLink>
        <NavLink
          to='hats'
          data-testid='backpackHats'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Hats
        </NavLink>
        <NavLink
          to='robes'
          data-testid='backpackRobes'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Robes
        </NavLink>
        <NavLink
          to='boots'
          data-testid='backpackBoots'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Boots
        </NavLink>
        <NavLink
          to='wands'
          data-testid='backpackWands'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Wands
        </NavLink>
        <NavLink
          to='athames'
          data-testid='backpackAthames'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Athames
        </NavLink>
        <NavLink
          to='amulets'
          data-testid='backpackAmulets'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Amulets
        </NavLink>
        <NavLink
          to='rings'
          data-testid='backpackRings'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Rings
        </NavLink>
        <NavLink
          to='pets'
          data-testid='backpackPets'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Pets
        </NavLink>
        <NavLink
          to='mounts'
          data-testid='backpackMounts'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Mounts
        </NavLink>
        <NavLink
          to='decks'
          data-testid='backpackDecks'
          className={({ isActive }) => isActive? "current" : ""}
          >
          Decks
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

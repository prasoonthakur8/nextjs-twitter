import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { IoIosArrowUp, IoIosArrowDown, IoIosCheckmark } from 'react-icons/io'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function DropDown({ vibe, setVibe, themes }) {
  return (
    <Menu as="div" className="relative block text-left w-full">
      <div>
        <Menu.Button className="inline-flex w-full justify-between items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black">
          {vibe}
          <IoIosArrowUp
            className="-mr-1 ml-2 h-4 w-4 ui-open:hidden"
            aria-hidden="true"
          />
          <IoIosArrowDown
            className="-mr-1 ml-2 h-4 w-4 hidden ui-open:block"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none"
          key={vibe}
        >
          <div className="">
            {themes.map((vibeItem) => (
              <Menu.Item key={vibeItem}>
                {({ active }) => (
                  <button
                    onClick={() => setVibe(vibeItem)}
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      vibe === vibeItem ? 'bg-gray-200' : '',
                      'px-4 py-2 text-sm w-full text-left flex items-center space-x-2 justify-between',
                    )}
                  >
                    <span>{vibeItem}</span>
                    {vibe === vibeItem ? (
                      <IoIosCheckmark className="w-6 h-6 text-bold" />
                    ) : null}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
export default DropDown
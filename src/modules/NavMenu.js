import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import * as BiIcons from 'react-icons/bi';
import { useHistory, useLocation } from "react-router-dom";


//todo: should include more logic for routes

export default function NavMenu() {

  let history = useHistory()
  let location = useLocation()

  const handleForward = () => {
    if (location.pathname === '/categories') {
      history.push('/national-overview');
    } else history.push('/categories');
  };

  const handleBack = () => {
    if (location.pathname === '/national-overview') {
      history.push('/categories');
    } else history.push('/');
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      {({ open }) => (
        <>
          <div>
            <Menu.Button className="inline-flex justify-center px-4 py-2 text-sm md:text-base font-medium text-blue-300 bg-gray-700 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:text-blue-100 place-items-center">
              Options
              {open ? (
                <BiIcons.BiChevronUp className="ml-2 -mr-1" />
              ) : (
                <BiIcons.BiChevronDown className="ml-2 -mr-1" />
              )}
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            show={open}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-6 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none w-36">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={() => history.push('/')}
                    >
                      <BiIcons.BiHomeCircle className="h-4 w-4" />
                      <span>Home</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={handleForward}
                    >
                      <BiIcons.BiChevronRightSquare className="h-4 w-4" />
                      <span>Forward</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                      onClick={handleBack}
                    >
                      <BiIcons.BiChevronLeftSquare className="h-4 w-4" />
                      <span>Back</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                    >
                      <BiIcons.BiShareAlt className="h-4 w-4" />
                      <span>Share</span>
                    </button>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm space-x-2 focus:outline-none`}
                    >
                      <BiIcons.BiHelpCircle className="h-4 w-4" />
                      <span>About</span>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
  );
}
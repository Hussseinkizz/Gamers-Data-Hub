import PropTypes from 'prop-types';
import * as BiIcons from 'react-icons/bi';
import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';


/*
 !  Alert: each item should call an action, changing the render in data presentation.
 */

/**
 ** 📋 component summary
 * 🤔 Known issues -> Z-index of drop down!
 * @param {*} { items }
 * @return {*} 
 */

const DropDown = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(items[0]);

  return (
    <Listbox value={selectedItem} onChange={setSelectedItem}>
      {({ open }) => (
        <>
          <Listbox.Button className="inline-flex justify-center px-4 py-2 text-sm md:text-base font-medium text-blue-900 bg-gray-300 rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 hover:text-blue-500 place-items-center ">
            {/* DROP DOWN LABEL / TITLE / BUTTON */}
            <span>{selectedItem.name}</span>
            {open ? (
              <BiIcons.BiCaretUp className="ml-2 -mr-1" />
            ) : (
              <BiIcons.BiCaretDown className="ml-2 -mr-1" />
            )}
          </Listbox.Button>
          {/* TRANSITION WRAPPER FOR SMOOTH TRANSITION */}
          <Transition
            show={open}
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            {/* DROP DOWN MENU / ITEMS */}
            <Listbox.Options className="2xl:mt-1 bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              {items.map((item) => (
                <div className="px-1 py-1">
                  <Listbox.Option key={item.id} value={item} as={Fragment}>
                    {({ active, selected }) => (
                      <li
                        className={`${
                          active ? 'bg-gray-100 text-blue-900' : 'text-gray-500'
                        } group flex rounded-md items-center w-full px-2 py-2 space-x-2 truncate relative`}
                      >
                        {selected ? (
                          <BiIcons.BiCheckboxChecked className="h-4 w-4" />
                        ) : (
                          <BiIcons.BiCheckbox className="h-4 w-4" />
                        )}
                        {item.name}
                      </li>
                    )}
                  </Listbox.Option>
                </div>
              ))}
            </Listbox.Options>
          </Transition>
        </>
      )}
    </Listbox>
  );
}

// 🔒 constraining props 
DropDown.defaultProps = {
  items: [
  { id: 1, name: 'item 1' },
  { id: 2, name: 'item 2' },
  { id: 3, name: 'item 3' },
  ]
}

DropDown.propTypes = {
  items: PropTypes.array.isRequired
}

export default DropDown
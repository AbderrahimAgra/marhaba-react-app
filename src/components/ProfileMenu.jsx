import React from 'react';

function ProfileMenu() {
  return (
    <div
      className="z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
      id="user-dropdown"
      // style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(0px, 417px);"
      data-popper-reference-hidden=""
      data-popper-escaped=""
      data-popper-placement="bottom"
    >
      <div className="py-3 px-4">
        <span className="block text-sm text-gray-900 dark:text-white">
          Bonnie Green
        </span>
        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
          name@flowbite.com
        </span>
      </div>
      <ul className="py-1" aria-labelledby="user-menu-button">
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Dashboard
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Earnings
          </a>
        </li>
        <li>
          <a
            href="#"
            className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
          >
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
}
export default ProfileMenu;

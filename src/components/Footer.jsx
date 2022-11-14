import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="p-5">
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link to="/" className="hover:underline">
          Marhaba™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
}
export default Footer;

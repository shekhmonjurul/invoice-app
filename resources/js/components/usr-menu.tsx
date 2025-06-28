import React from "react";
import { FaHome, FaUser, FaBoxOpen, FaFileInvoice } from "react-icons/fa";

function Usr_Menu( ) {
        return (
            <>
                <nav className='ml-10 mt-6 mb-6'>
                    <ul className={`flex h-full flex-1 flex-row gap-4`}>
                        <li className="hover:text-gray-700 ">
                            <a href="/dashboard">
                                Dashboard
                            </a>
                        </li>
                        <li className="hover:text-gray-700">
                            <a href="/customer">
                                Add Customers  </a>
                        </li>
                        <li className="hover:text-gray-700">
                            <a href="/item">
                                Add Iteam
                            </a>
                        </li>

                    </ul>
                </nav>
            </>
        )
}
export default Usr_Menu;
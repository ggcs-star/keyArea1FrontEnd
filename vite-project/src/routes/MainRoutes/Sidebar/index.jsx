import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import PropertyDetails from './components/PropertyDetails';
import { Container } from '../../../components/Layout';
import SidebarComponent from './components/SidebarComponent';
import BudgetwiseDetailBreadcrumb from './components/BudgetwiseDetailBreadcrumb';

const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+61", country: "Australia" },
    { code: "+971", country: "United Arab Emirates" },
];

const Sidebar = () => {
    const [isdOpen, setIsdOpen] = useState(false);
    const [isdCode, setIsdCode] = useState('+91');

    useEffect(() => {
        const closeDropdown = () => setIsdOpen(false);
        document.body.addEventListener('click', closeDropdown);
        return () => document.body.removeEventListener('click', closeDropdown);
    }, []);

    const handleInputInteraction = (e, action) => {
        const parent = e.target.closest('.fluid-label-input');
        if (action === 'focus') {
            parent.classList.add('valid');
        } else if (action === 'blur') {
            if (e.target.value === '') {
                parent.classList.remove('valid');
            }
        }
    };

    return (
        <Container>
            <div className='page-container'>
                <BudgetwiseDetailBreadcrumb />
                <div className="sidebar-layout flex w-full h-screen">
                    <main className="sidebar-content flex-1">
                        <div className="content-scrollable">
                            <PropertyDetails />
                        </div>
                    </main>
                    <div className="w-[400px] flex-shrink-0">
                        <SidebarComponent />
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Sidebar 
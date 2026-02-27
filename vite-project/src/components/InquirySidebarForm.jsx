import React, { useState, useEffect } from 'react';
import construction from '../assets/invest/construction.svg'
import legal from '../assets/invest/legal.svg'
import relationshipmanager from '../assets/invest/relationship-manager.svg'
import sale from '../assets/invest/sale.svg'
import tax from '../assets/invest/tax.svg'
import portfolio from '../assets/invest/portfolio.svg'
import innerhand from '../assets/inner-hand.webp'



const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+61", country: "Australia" },
    { code: "+971", country: "United Arab Emirates" },
];

const InquirySidebarForm = () => {
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
        <form>
            <ul className="form-list">
                <li>
                    <div className="fluid-label-input">
                        <input className="fluid-input" type="text" name="fname2" id="fname2" onFocus={(e) => handleInputInteraction(e, 'focus')} onBlur={(e) => handleInputInteraction(e, 'blur')} />
                        <label className="fluid-lbl" htmlFor="fname2">Enter Your Name</label>
                    </div>
                </li>
                <li>
                    <div className="fluid-label-input">
                        <input className="fluid-input" type="email" name="user_name2" id="user_name2" onFocus={(e) => handleInputInteraction(e, 'focus')} onBlur={(e) => handleInputInteraction(e, 'blur')} />
                        <label className="fluid-lbl" htmlFor="user_name2">Enter your Email ID</label>
                    </div>
                </li>
                <li>
                    <div className="fluid-label-input">
                        <div className="contact-no">
                            <span className="isd-code" onClick={(e) => { e.stopPropagation(); setIsdOpen(!isdOpen); }}>{isdCode}</span>
                            {isdOpen && (
                                <ul className="isd-list">
                                    {countryCodes.map(country => (
                                        <li key={country.code} onClick={() => { setIsdCode(country.code); setIsdOpen(false); }}>{country.code} {country.country}</li>
                                    ))}
                                </ul>
                            )}
                            <input type="number" className="mobile-no fluid-input" name="mobile2" id="mobile2" onFocus={(e) => handleInputInteraction(e, 'focus')} onBlur={(e) => handleInputInteraction(e, 'blur')} />
                        </div>
                        <label className="fluid-lbl" htmlFor="mobile2" style={{ left: '55px' }}>Enter Mobile Number</label>
                    </div>
                </li>
                <li>
                    <div className="select_config">
                        <p>Looking for</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="new_check_box"><input type="checkbox" id="looking_for_8" defaultChecked /><label htmlFor="looking_for_8">Flats</label></div>
                            <div className="new_check_box"><input type="checkbox" id="looking_for_9" /><label htmlFor="looking_for_9">House</label></div>
                            <div className="new_check_box"><input type="checkbox" id="looking_for_11" /><label htmlFor="looking_for_11">Builder Floors</label></div>
                            <div className="new_check_box"><input type="checkbox" id="looking_for_25" /><label htmlFor="looking_for_25">Residential Plots</label></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="select_config">
                        <p>Preferred Bedrooms</p>
                        <div className="grid grid-cols-3 gap-2">
                            <div className="new_check_box"><input type="checkbox" id="pref_bhk_2" /><label htmlFor="pref_bhk_2">2 BHK</label></div>
                            <div className="new_check_box"><input type="checkbox" id="pref_bhk_2.5" /><label htmlFor="pref_bhk_2.5">2.5 BHK</label></div>
                            <div className="new_check_box"><input type="checkbox" id="pref_bhk_3" /><label htmlFor="pref_bhk_3">3 BHK</label></div>
                            <div className="new_check_box"><input type="checkbox" id="pref_bhk_3.5" /><label htmlFor="pref_bhk_3.5">3.5 BHK</label></div>
                            <div className="new_check_box"><input type="checkbox" id="pref_bhk_4" /><label htmlFor="pref_bhk_4">4 BHK</label></div>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="trms_b">
                        <input type="checkbox" id="forward_status" defaultChecked />
                        <label htmlFor="forward_status">I agree to be contacted thru call, WhatsApp, sms & e-mail by KeyArea1 and other advertisers for similar properties.</label>
                    </div>
                </li>
            </ul>
            <button type="submit" className="btn-request-call">Connect Now</button>

            <div className="flex flex-row justify-between items-start mt-6">
                <div>
                    <p className="text-lg font-semibold mb-2">Why Invest through Key Area 1?</p>
                    <ul className="why-invest-list space-y-2">
                        <li className="flex items-center gap-3">
                            <img src={relationshipmanager} alt="Dedicated Relationship Manager" className="w-5 h-5" />
                            <span>Dedicated Relationship Manager for Lifetime</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={legal} alt="Legal Support" className="w-5 h-5" />
                            <span>Legal Protection & Litigation Support</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={tax} alt="Taxation Compliance" className="w-5 h-5" />
                            <span>Taxation & Compliance</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={construction} alt="Construction Updates" className="w-5 h-5" />
                            <span>Construction & Pricing Update</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={sale} alt="Resale Assistance" className="w-5 h-5" />
                            <span>Resale & Rental Assistance</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <img src={portfolio} alt="Portfolio Tracking" className="w-5 h-5" />
                            <span>RE Portfolio Tracking</span>
                        </li>
                    </ul>
                </div>

                {/* Image on the right side */}
                <img
                    src={innerhand}
                    alt="Why Invest"
                    className="w-8 h-auto object-contain"
                />
            </div>


        </form>
    );
};

export default InquirySidebarForm; 
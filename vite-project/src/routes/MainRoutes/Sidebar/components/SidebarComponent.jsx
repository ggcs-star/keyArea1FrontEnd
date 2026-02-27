import React from 'react'
import { useState, useEffect } from 'react';

const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "United States" },
    { code: "+44", country: "United Kingdom" },
    { code: "+61", country: "Australia" },
    { code: "+971", country: "United Arab Emirates" },
];

const SidebarComponent = () => {

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
    <aside className="sidebar-sticky">
        <section className="pd-inquiry">
            <h2 className="st-heading">M3M Antalya Hills <span>Get Best Offer on this Project</span></h2>
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
                            <label className="fluid-lbl" htmlFor="mobile2" style={{left:'55px'}}>Enter Mobile Number</label>
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
                            <label htmlFor="forward_status">I agree to be contacted thru call, WhatsApp, sms & e-mail by RealEstateIndia and other advertisers for similar properties.</label>
                        </div>
                    </li>
                </ul>
                <button type="submit" className="btn-request-call">Connect Now</button>
            </form>
        </section>
        </aside>
  )
}

export default SidebarComponent
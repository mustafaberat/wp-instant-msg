"use client";
import React, { useState } from "react";

const Main: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [countryCode, setCountryCode] = useState("+90"); // Default country code (TR)

  // Function to handle phone number input change
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Filter out anything that is not a digit
    setPhoneNumber(e.target.value.replace(/\D/g, ""));
  };

  // Function to handle country code change
  const handleCountryCodeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountryCode(e.target.value);
  };

  // Function to handle Send button click
  const handleSend = () => {
    // Combine country code with the phone number
    const fullPhoneNumber = `${countryCode}${phoneNumber}`;
    console.log(fullPhoneNumber);

    if (fullPhoneNumber) {
      // Open WhatsApp in a new tab with the full phone number
      window.open(`http://wa.me/${fullPhoneNumber}`, "_blank");
    } else {
      console.error("Phone number is empty or invalid.");
    }
  };

  return (
    <div className="main">
      <div className="container">
        <div className="country-code-selector">
          <select
            className="country-code-dropdown"
            value={countryCode}
            onChange={handleCountryCodeChange}
          >
            <option value="+90">🇹🇷 +90</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
            <option value="+7">🇷🇺 +7</option>
            <option value="+33">🇫🇷 +33</option>
            <option value="+49">🇩🇪 +49</option>
            <option value="+39">🇮🇹 +39</option>
            <option value="+34">🇪🇸 +34</option>
            <option value="+61">🇦🇺 +61</option>
            <option value="+81">🇯🇵 +81</option>
            <option value="+55">🇧🇷 +55</option>
            <option value="+91">🇮🇳 +91</option>
            <option value="+86">🇨🇳 +86</option>
            <option value="+27">🇿🇦 +27</option>
            <option value="+82">🇰🇷 +82</option>
            <option value="+64">🇳🇿 +64</option>
            <option value="+48">🇵🇱 +48</option>
            <option value="+45">🇩🇰 +45</option>
            <option value="+31">🇳🇱 +31</option>
            <option value="+420">🇨🇿 +420</option>
            <option value="+41">🇨🇭 +41</option>
            <option value="+43">🇦🇹 +43</option>
            <option value="+351">🇵🇹 +351</option>
          </select>
          <input
            type="text"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            className="phone-input"
            placeholder="Enter phone number"
          />
        </div>
        <button
          className="send-button"
          onClick={handleSend}
          type="button" // Ensure the button type is "button"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Main;

import React from 'react'

const Footer = () => {
  return (
    <div className="text-center  grid grid-cols-1 md:grid-cols-4 gap-y-10 md:px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-xs text-gray-800">
            <h5  className="font-bold uppercase">About</h5>
            <p>How AirBnb Works!</p>
            <p>NewsRoom</p>
            <p>Investors</p>
            <p>AirBnb Plus</p>
            <p>AirBnb Luxe</p>
           
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5  className="font-bold uppercase">Community</h5>
            <p>Disaster Relief</p>
            <p>Combat Discrimination</p>
          
          
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5  className="font-bold uppercase">Hosting</h5>
            <p>AirBnb your Home!</p>
            <p>AirCover for hosts</p>
            <p>Explore Hosting resources</p>
            <p>Visit our Community</p>
            <p>How to host responsibly</p>
            <p></p>
        </div>
        <div className="space-y-4 text-xs text-gray-800">
            <h5  className="font-bold uppercase">Support</h5>
            <p>Help Centre</p>
            <p>Air Cover </p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our Covid Response</p>
            <p> Report a neighborhood concern </p>
        </div>
    </div>
  )
}

export default Footer;
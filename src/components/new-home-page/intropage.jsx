import React, { useState } from 'react';


const BackgroundImagePage = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
      setIsActive(!isActive);
    };
    return (
        <div className="relative max-w-7xl mx-auto rounded-lg  w-full mt-12 h-96 bg-cover bg-center" style={{ backgroundImage: 'url(https://images.pexels.com/photos/824197/pexels-photo-824197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }}>
            <div className="absolute inset-0 bg-black rounded-lg opacity-50"></div> {/* Optional overlay for better contrast */}
            <div className="relative z-10 flex items-center rounded-lg justify-between h-full">
                <div className="bg-white transform transition-transform duration-200 hover:scale-105 cursor-pointer p-4 rounded-lg shadow-lg text-center w-96  mx-auto -mb-28 h-56">
                    <img  alt="Campus" className="w-16 h-16 mx-auto mb-2" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAHL0lEQVR4nO1b6XMURRQf/eIn/Rcsv+gH/SbZ2YSQzWY3gSgQAlKFB5qd2eyZhCSksFQQqkQ5CgikiiIYRSmOhMNQCggWKeRyM0fPDleEXEq4JEGxCJtgyPGsNxiKTTKb7YENZsir+tVmm+5+7/fr7tfdww7DTNiTMwuvzrXkkS0WF1kZBY6sSOKUNMbsZnHJGzM/Ow1ztjdEIafqPKT4yFXG7Ma65GW535yHYGtrFPKVZkj2kZuM2Y196gXIk1a9UX4W5tddjMLb31+AFL/SzpjdLHnytuR8cjUloIhDkewjQeZpWAKsS17GmN6WwrOTOOk11q28HgVO2axhSHmSW3wV2zBmMYef1GUXkM7ZJeTWw8gtlu8ihpZjXaefHGHMYlZOHuhSVOhR4wPWZTnSz5jFWI7ETX4Q2IYZz8a6SCrrUjwaOAJLVoWpgG0etHeRVGY8GctJM6cGSGTJauU2Yt5CuWd2KblHg3llpGewPfZl5ZUZzHgxC0eWVlYq1NNeD9gX9smMF2Nd8rJYAlw9GYbaHYpGbNsWBcQDYbgbji3AuDovsDoC/C2G4ZOVCtg8BJwFEtgCImQEJXAGZJhepEBov4kF+EtUYU4pAUdQgsziELy5VITcCgVy1hCYujAEGYUC2LwyHKgJm1OAsuWKNtpTF9XDB4cboq6/3rPNMKtcAUdRPdi8BH4/ZjIBmo+GtdHNKg5BXt2vw+7/iEBTC0z/XIKMAhEWr1bMJcDWr8PgCEgw4wt5RPKDeP9QAziL6yHDR8wlwPK1YbAFBZhbpcYUIF9pgqySEEx2E7gtm0iAtRWKlvHnbFRiCuAWGjUBknkC3eH/gQBJnJKcxJFVFl5eTwVOEh4W4MCuMGQWyJD9UT34L7boCjCv+gw4CuthdunwJYB90saBsSMHQ+QncdIrVhfpSgsIAzh6NJjskbSgBwncElWw+4iW5ed+pUKwZTh5XmyEaYvqwRGQYeuW6K0Q+8I+aePA2FlejiS5xZepBWA5qSrNL9zDKUkLm1+MEgCxZ1sY7H4ZMhfUw6xyAtyJC+BraAGP2gTv7D2nbY/2oKCdFSJk+DaIfRqJJc0v9LIuUkVFPoU79TzLkS4M9nEJgNhUqUC6j4C9QNAOQ4P1HUWCdkbILSFw+eTIJ0GjAuCuglws7wovxC1AMkcWTPaIESMOYwmAkA+Gwb2YQGo+AbuXwBQPgewCApWbw1GZ/3EJoO0qXjHC8mJRnPThGZYjVzAZJUKAQeA0x9HuqI/vNvgoAuAxm+Xla8htVPoWjmRZ3XKnUWfxCkB7HX4UARDJbvm21SU5RxWA5UmdPSgMGHHi8Atg5cn9pzkJAPbtDAiGBEgPCgOsm9SNsvaVF1mOdD+coOIFJky7R4LIjhroqa5OCO7sqIF0j6QlNmoRikNg4eRui1t4SX/03co+lpP7k3lyjxZWnvRm+YSEkR8E+kBfRmJEbshRV4ApHvXHuUubwLv+CjVcq9tgWkBKuADoA30ZiRG5IUd9AfzhXd7yy1D65Q0o3fwHFYIVVyF7DARAH+iLNj7khNyQo64AFo7YU71qSwqv9Nv8ah8N0nxqX5ZPHIMlIAL6oo0POSE3lpfTYyZCliN5JRta7ly62Qc0kJu6YWaRnHAB0Af6oo0POSG3mOSHCiA1RWDd7ksPgN/1ysdaAJrYDAuw8+iNqK0Ev+uVj7UANLFNCHDT4AzY9XN7lJq7j7WDXjnNDLi7sxrIpn1Qu/agBvwby2hmAE1shgVovdELJ851wvFzndonftcrj1eAIxv2wzS/AE6fCM7AfTh8ImT7RKjb8EPcAtDEZliAS495F9i66rB2lB3ppplRJGj/tn3loSe/C3y4ruGfP1uvAw0alCuQU6h/EFIr9/13jtc/rzsXhCA9X4LTlbW6/aAP9EUbH3KKW4Ala9R+2itr23EVcgr1D0K+shN4Ixv10oKPxfxlJ2MIIGq+aONDThRLoDnS1nEPaEAau3SXQNfOGkh1y1GPwXRvlcUhrW63TlJEH+iLNj7kZCgHtLb3aocJ/Hx4TQ0tj5UDrn+7B2weKf4HKh5JazNaDog3NsNJsPFaD7hWqFpQ+HnxWg/olccSoG3LXrB743+ig3WxTSwBaGIzLMB3JzuiAqs91QF65WMtAE1sT/wk2JYAAcbVUbhtQoC9EzPAPrEExPGXAy49prtAInJAQu4CKR6lMCWo/DalINyfXqz20cBWhM/dCMwv+WUY5i0Iaf+xkeKOD1gX24zUF/pAX7TxISfkhhz1R5+X+977Kfr1FRq8VY1vfZ0fETM2noXpFWfiAtbV6wd9GI0PuVl40htr+kOsn7CYASP+Cp11EdbqJrhG4GkAcrXysuWBABYX+TSn6tzAkx6dsQJyRc7MaC8wmhXINepXZ1ZOLkz/+HTX0FdYzQrkauHlggcCTCtseo51kaJhLzGbFMgVOTMTxjD/AtiAdJLComvmAAAAAElFTkSuQmCC"></img>
                    {/* <img src="path/to/campus-vector.png" /> */}
                    <h2 className="text-xl font-bold mb-2">Made for Campus</h2>
                    <p className="text-sm mb-4">
                        Exclusively crafted for our college community, fostering a secure and trusted marketplace within campus boundaries.
                    </p>
                </div>
                <div className="bg-white transform transition-transform duration-200 hover:scale-105 p-4 z-20 rounded-lg h-56 shadow-lg w-96 text-center mx-auto">
                    <h1 className="text-3xl font-bold mb-4">Welcome to College Mart</h1>
                    <p className="text-sm mb-4">Your go-to open marketplace exclusively for college students! Here at College Mart, we understand the unique needs and budgets of students.</p>
                    <button className="bg-cyan-700 text-white px-4 py-2 rounded hover:bg-cyan-800">Discover More</button>
                </div>
                <div className="bg-white transform transition-transform duration-200 hover:scale-105 cursor-pointer p-4 rounded-lg shadow-lg text-center w-96  mx-auto h-56 -mb-28">
                    <img src="reshake.svg" alt="Campus" className="w-16 h-16 mx-auto mb-2" />
                    <h2 className="text-xl font-bold mb-2">Direct Peer-to-Peer Transactions</h2>
                    <p className="text-sm mb-4">
                        Facilitating seamless, fee-free transactions between buyers and sellers within our college community
                    </p>
                </div>
            </div>
            <div
        className={`bg-red-400  text-white mx-auto w-full cursor-pointer max-w-44 px-4 py-2 justify-center flex align-middle rounded my-3 hover:bg-[#925FE2] transition-all duration-300 ease-in-out ${
          isActive ? 'transform scale-110 bg-purple-600' : ''
        }`}
        
        onClick={handleClick}
      >
        
        Sell Your Products
      </div>
            
        </div>
    );
};

export default BackgroundImagePage;

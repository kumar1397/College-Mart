import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [password, setPassword] = useState(""); // For password verification
  const [sortCriteria, setSortCriteria] = useState(""); // Sorting dropdown
  const navigate = useNavigate();
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  // Dummy products in case no products are found
  const dummyProducts = [
    {
      id: 1,
      name: "Instant",
      description: "White and black polaroid one step 2 instant camera.",
      price: "10",
      image: "https://unsplash.com/photos/white-and-black-polaroid-one-step-2-instant-camera-on-white-board-KsLPTsYaqIQ",
    },
    {
      id: 2,
      name: "Nike Air 2",
      description: "Red Nike Sneaker.",
      price: "15",
      image: "https://unsplash.com/photos/unpaired-red-nike-sneaker-164_6wVEHfI",
    },
    {
      id: 3,
      name: "Apple Watch 3",
      description: "Round white watch with white band.",
      price: "20",
      image: "https://unsplash.com/photos/round-white-watch-with-white-band-2cFZ_FB08UM",
    },
    {
      id: 4,
      name: "Ban Wayfarer Sunglass",
      description: "Black ray ban wayfarer sunglasses.",
      price: "25",
      image: "https://unsplash.com/photos/shallow-focus-photo-of-black-ray-ban-wayfarer-sunglasses-K62u25Jk6vo",
    },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");

        // Build query parameters for API call
        const queryParams = new URLSearchParams();
        if (searchTerm) queryParams.append('search', searchTerm);
        if (sortCriteria === 'sold') {
          queryParams.append('sold', 'true'); 
        } else if (sortCriteria === 'unsold') {
          queryParams.append('unsold', 'true');
        } else if (sortCriteria) {
          queryParams.append('sort', sortCriteria);
        }
        
        const query = queryParams.toString();

        const profileResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/home/profile`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const productsResponse = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/home/profile/products?${query}`, // Updated API endpoint with query parameters
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );        
        console.log(productsResponse.data);
        setProfile(profileResponse.data);
        setProducts(productsResponse.data.products || dummyProducts);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };
    fetchProfile();
  }, [searchTerm, sortCriteria]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setProfile({
        ...profile,
        user: { ...profile.user, phone: value }
      });
    } else {
      setProfile({
        ...profile,
        [name]: value
      });
    }
  };    

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setProfile({ ...profile, avatar: e.target.files[0] });
    }
  };

  const handleEditClick = () => {
    if (!isEditing) {
      setIsEditing(true);
      setIsChangingPassword(false);
    } else {
      setIsEditing(false);
    }
  };

  const handleChangePasswordClick = () => {
    if (!isChangingPassword) {
      setIsChangingPassword(true);
      setIsEditing(false);
    } else {
      setIsChangingPassword(false);
      setIsEditing(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("password", password); // Final verification password
      if (profile.avatar) formData.append("avatar", profile.avatar);
      formData.append("phone", profile.user?.phone || "");
      formData.append("bio", profile.bio || "");
      formData.append("hall_of_residence", profile.hall_of_residence || "");
      formData.append("room_number", profile.room_number || "");

      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/home/profile`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfile(response.data.profile);
      toast.success("Profile updated successfully", {
        position: "top-center"
      });
    } catch (err) {
      toast.error("Wrong Password or Server Error !!", {
        position: "top-center"
      });
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortCriteria(e.target.value);
    // Implement sorting functionality based on sortCriteria
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      console.log("1");
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/home/profile/update-password`,
        {
          oldPassword,
          newPassword,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log("2");
      if (response.data.success) {
        toast.success('Password updated successfully', {
          position: "top-center"
        });
        setIsChangingPassword(false);
        setOldPassword('');
        setNewPassword('');
        setIsEditing(true);
      } else {
        toast.error('Failed to update password', {
          position: "top-center"
        });
      }
    } catch (err) {
      console.error('Error in handlePasswordChange:', err);
      toast.error("Password update failed: " + (err.response?.data?.message || err.message), {
        position: "top-center"
      });
    }
  };
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col sm:flex-row h-screen">
      <ToastContainer />
      {/* Left Edit Section */}
      <div className="w-full sm:w-1/4 bg-[#ADD8E6] p-6 flex flex-col items-center">
        {/* Profile Image */}
        <div className="relative mb-4">
          <div className="rounded-full w-40 h-40 overflow-hidden border-4 border-white shadow-md">
            {profile.avatar && typeof profile.avatar === "string" ? (
              <img
                src={profile.avatar}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : profile.avatar && typeof profile.avatar !== "string" ? (
              <img
                src={URL.createObjectURL(profile.avatar)}
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span>No Avatar</span>
              </div>
            )}
          </div>
          {isEditing && (
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              title="Click to change avatar"
            />
          )}
        </div>

        {/* User Info */}
        {!isEditing && (
          <div className="text-center mb-4">
            <h2 className="text-xl font-bold text-black">
              {profile.user && profile.user.name}
            </h2>
            <div className="flex items-center justify-center mb-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-700 mr-2"
                size="sm"
              />
              <h3 className="text-md">{profile.user && profile.user.email}</h3>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-700 mr-2"
                size="sm"
              />
              <h3 className="text-md">
                {profile.user && profile.user.phone
                  ? profile.user.phone
                  : "+91 XXXXXXXXXX"}
              </h3>
            </div>

            <div className="flex items-center justify-center mb-4">
              <h3 className="text-md">
                {profile.bio || ""}
              </h3>
            </div>
          </div>
        )}

        {/* Edit and Change Password Buttons */}
        {!isChangingPassword && (
          <button
            onClick={handleEditClick}
            className="bg-blue-600 text-white px-4 py-2 rounded mb-4 w-full"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        )}

        {!isEditing && (
          <button
            onClick={handleChangePasswordClick}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 w-full"
          >
            {isChangingPassword ? "Cancel" : "Change Password"}
          </button>
        )}

        {/* Edit Form */}
        {isEditing && (
          <form onSubmit={handleSubmit} className="w-full">
            {/* <div className="mb-3">
              <label className="block text-gray-700">Email:</label>
              <input
                type="email"
                name="email"
                value={profile.user?.email || ""}
                onChange={handleChange}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
              />
            </div> */}
            <div className="mb-3">
              <label className="block text-gray-700">Phone Number:</label>
              <input
                type="text"
                name="phone"
                value={profile.user?.phone || ""}
                onChange={handleChange}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Bio:</label>
              <textarea
                name="bio"
                value={profile.bio || ""}
                onChange={handleChange}
                className="input-field w-full bg-gray-200 h-24 rounded-lg px-3"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Hall of Residence:</label>
              <input
                type="text"
                name="hall_of_residence"
                value={profile.hall_of_residence || ""}
                onChange={handleChange}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">Room Number:</label>
              <input
                type="text"
                name="room_number"
                value={profile.room_number || ""} 
                onChange={handleChange}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">
                Verify Password:
              </label>
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Update Profile
            </button>
          </form>
        )}

        {/* Change Password Form */}
        {isChangingPassword && (
          <form onSubmit={handlePasswordChange} className="w-full">
            <div className="mb-3">
              <label className="block text-gray-700">Old Password:</label>
              <input
                type="password"
                name="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-gray-700">New Password:</label>
              <input
                type="password"
                name="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input-field w-full bg-gray-200 rounded-lg px-3"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              Update Password
            </button>
          </form>
        )}

        {!isEditing && !isChangingPassword && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 mt-4 rounded w-full"
          >
            Logout
          </button>
        )}
      </div>

      {/* Right Products Section */}
      <div className="w-full sm:w-3/4 p-6">
        {/* Search Bar */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Search by productId or keyword"
            value={searchTerm}
            onChange={handleSearch}
            className="input-field w-full bg-gray-200 h-12 rounded-lg px-3"
          />
        </div>

        {/* Horizontal Line */}
        <hr className="mb-6 border-gray-400" />

        {/* Sorting Dropdown */}
        <div className="mb-6 flex justify-end">
          <label htmlFor="sort" className="block text-gray-700 mb-2 mr-2">
            Sort By:
          </label>
          <select
            id="sort"
            value={sortCriteria}
            onChange={handleSortChange}
            className="input-field bg-gray-200 h-6 w-40 rounded-lg px-3"
          >
            <option value="">ALL</option>
            <option value="sold">SOLD</option>
            <option value="unsold">UNSOLD</option>
            <option value="date">DATE</option>
            <option value="price">PRICE</option>
            {/* <option value="ratings">RATINGS</option> */}
          </select>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {Array.isArray(products) && products.length > 0
            ? products
                .filter((product) =>
                  product.name?.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((product) => (
                  <div
                    key={product._id} // Use _id as key instead of product.id
                    className="card bg-white shadow-lg p-4 transform transition-transform hover:scale-105 hover:shadow-xl hover:z-10"
                  >
                    <img
                      src={product.imgUrl[0]?.url || "https://via.placeholder.com/150"} // Use product image or placeholder
                      alt={product.name}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <h3 className="text-lg font-bold">{product.name}</h3>
                    <p>{product.description}</p>
                    <p className="text-gray-500">Price: ${product.price}</p>
                  </div>
                ))
            : dummyProducts.map((product) => (
                <div
                  key={product.id}
                  className="card bg-white shadow-lg p-4 transform transition-transform hover:scale-105 hover:shadow-xl hover:z-10"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold">{product.name}</h3>
                  <p>{product.description}</p>
                  <p className="text-gray-500">Price: ${product.price}</p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;

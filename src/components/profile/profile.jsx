import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("https://college-mart.onrender.com/home/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(response.data);
        console.log("Fetched profile data:", response.data); // Log the fetched profile data
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch profile data.");
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setProfile({ ...profile, avatar: e.target.files[0] });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      if (profile.avatar) formData.append("avatar", profile.avatar);
      formData.append("bio", profile.bio || "");
      formData.append("hall_of_residence", profile.hall_of_residence || "");
      formData.append("room_number", profile.room_number || "");

      const response = await axios.post(
        "https://college-mart.onrender.com/home/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setProfile(response.data.profile); // Update profile state with response data
      console.log("Updated profile data:", response.data.profile); // Log the updated profile data
      alert("Profile updated successfully");
    } catch (err) {
      setError("Failed to update profile.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="flex flex-col justify-start items-center h-screen">
      <form onSubmit={handleSubmit}>
        <div className="h-fit rounded-lg shadow-lg p-8 my-3 mx-auto bg-[#ADD8E6] max-w-[1200px] w-[90%] sm:w-[90%] sm:flex sm:justify-between">
          <div className="w-full sm:w-[30%] flex justify-center items-center rounded-full">
            {profile.avatar && typeof profile.avatar === "string" ? (
              <img src={profile.avatar} alt="Avatar" className="avatar-image" />
            ) : profile.avatar && typeof profile.avatar !== "string" ? (
              <img
                src={URL.createObjectURL(profile.avatar)}
                alt="Avatar"
                className="avatar-image"
              />
            ) : null}
            <input
              type="file"
              id="avatar"
              name="avatar"
              onChange={handleFileChange}
              className="input-field"
            />
          </div>
          <div className="w-full mt-1 p-4 rounded-lg relative">
            <h1 className="text-3xl font-bold mb-2 text-black">
              {profile.user && profile.user.name}
            </h1>
            <div className="flex items-center mb-2">
              <FontAwesomeIcon
                icon={faPhone}
                className="text-gray-700 mr=2"
                size="sm"
              />
              <h1 className="text-sm">{profile.phone}</h1>
            </div>
            <div className="flex items-center">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-gray-700 mr=2"
                size="sm"
              />
              <h1 className="text-sm">{profile.user && profile.user.email}</h1>
            </div>
            <div className="mt-4">
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700"
              >
                Bio:
              </label>
              <input
                type="text"
                id="bio"
                name="bio"
                value={profile.bio || ""}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="hall_of_residence"
                className="block text-sm font-medium text-gray-700"
              >
                Hall of Residence:
              </label>
              <input
                type="text"
                id="hall_of_residence"
                name="hall_of_residence"
                value={profile.hall_of_residence || ""}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="room_number"
                className="block text-sm font-medium text-gray-700"
              >
                Room Number:
              </label>
              <input
                type="text"
                id="room_number"
                name="room_number"
                value={profile.room_number || ""}
                onChange={handleChange}
                className="input-field"
              />
            </div>
            <button type="submit" className="btn-primary mt-4">
              Update Profile
            </button>
          </div>
        </div>
      </form>
      <button onClick={handleLogout} className="btn-secondary mt-4">
        Logout
      </button>
    </div>
  );
};

export default Profile;

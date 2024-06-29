import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    buydate: '',
    price: '',
    tag: '',
  });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('description', formData.description);
    data.append('buydate', formData.buydate);
    data.append('price', formData.price);
    data.append('tag', formData.tag);
    data.append('filename', file);

    try {
      const response = await axios.post('http://localhost:4000/upload/fileupload', data, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input type="text" name="description" value={formData.description} onChange={handleChange} placeholder="Description" />
      <input type="date" name="buydate" value={formData.buydate} onChange={handleChange} placeholder="Buy Date" />
      <input type="number" name="price" value={formData.price} onChange={handleChange} placeholder="Price" />
      <input type="text" name="tag" value={formData.tag} onChange={handleChange} placeholder="Tag" />
      <input type="file" name="filename" onChange={handleFileChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default FileUploadForm;

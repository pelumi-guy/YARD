import React, { useState } from 'react';

const RoomType = ({ onChange }) => {
    const [roomName, setRoomName] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [description, setDescription] = useState('');

    const handleImageChange = (event) => {
        // Handle image change logic
    };

    const handleChange = () => {
        // Pass the room type data to the parent component
        onChange({ roomName, price, discount, description });
    };

    return (
        <div className=" mt-5">
            <h4 className="mb-4" style={{ color: 'black' }}>
                Room Type
            </h4>
            <div className="form-group mt-3">
                <label htmlFor="roomname_field">Room Name</label>
                <input
                    type="name"
                    id="roomname_field"
                    className="form-control"
                    name="roomName"
                    placeholder="Room Name"
                    value={roomName}
                    onChange={(e) => setRoomName(e.target.value)}
                    onBlur={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="price_field">Price</label>
                <input
                    type="number"
                    id="price_field"
                    className="form-control"
                    name="price"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    onBlur={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="discount_field">Discount</label>
                <input
                    type="number"
                    id="discount_field"
                    className="form-control"
                    name="discount"
                    placeholder="Discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                    onBlur={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="imageUpload_field">
                    Choose an image to upload
                </label>
                <input
                    type="file"
                    className="form-control"
                    id="imageUpload_field"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>
            <div className="mb-1">
                <label htmlFor="description_field" className="form-label">
                    Description
                </label>
                <textarea
                    className="form-control"
                    id="description_field"
                    rows="6"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={handleChange}
                />
            </div>
        </div>
    );
};

export default RoomType;

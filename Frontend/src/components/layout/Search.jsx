import React, { useState } from 'react';
import { useNavigate } from 'react-router';


const Search = () => {
    const navigate = useNavigate();

    const [keyword, setKeyword] = useState('');

    const searchHandler = () => {
        // console.log("Searching...");

        if (keyword) {
            navigate(`/search/${keyword}`);
        }

    };

    return (
        <form
            onSubmit={searchHandler}
        >
            <div className="input-group">
                <input
                    type="text"
                    id="search_field"
                    className="form-control"
                    placeholder="Enter Hotel Name ..."
                    onChange={(e) => setKeyword(e.target.value)}
                />
                <div className="input-group-append py-0">
                    <button id="search_btn" className="btn btn-primary border">
                        <i className="fa fa-search my-0" aria-hidden="true"></i>
                        {/* <i className="fa-regular fa-magnifying-glass text-danger"></i> */}
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Search
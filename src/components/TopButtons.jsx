import React from "react";

function TopButtons({ setQuery }) {
    const cities = [
        {
            id: 1,
            title: "Berlin",
        },
        {
            id: 2,
            title: "Edinburgh",
        },
        {
            id: 3,
            title: "Paris",
        },
        {
            id: 4,
            title: "Stockholm",
        },
        {
            id: 5,
            title: "Helsinki",
        },
    ];

    return (
        <div className="flex items-center justify-around my-6">
            {cities.map((city) => (
                <button
                    key={city.id}
                    className="text-white text-lg font-medium"
                    onClick={() => setQuery({ q: city.title })}
                >
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons;

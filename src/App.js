import React, { useState, useEffect } from "react";
import './App.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import Coder from './Coder';

const App = () => {
    const [location, setLocation] = useState("Wroclaw");
    const [data, setData] = useState();
    const [user, setUser] = useState({});
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `https://api.github.com/search/users?q=location:${location}&per_page=99&page=${page}`,
            );
            const responseJson = await response.json();
            setData(responseJson);
        };

        fetchData();
    }, []);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(`Changed location to ${location}`)
    }


    const fetchUser = async (id, index) => {
        const response = await fetch(
            `https://api.github.com/users/${id}?access_token=a4f359c6bae38b0d4de0be60aba753a68a09581f`
        );
        const user = await response.json();
        setUser(user);
    };
    const clear = () => {
        setUser({});
    };

    const showMore = () => {
        // fetchData(page => page + 1);
        setPage(page + 1);
        if (page > 9) {
            console.log('has more false');
            setHasMore(false);
        }
    };

    console.log(data)
    return (
        <div className="main">
            <header className="header">
                <svg
                    className="logo"
                    alt="logo"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 100"
                    version="1.1">
                    <g className="group" transform="scale(.1,.1)">
                        <path
                            className="out"
                            strokeWidth="20"
                            fill="none"
                            strokeLinecap="round"
                            d="M0,0,l500,288.6751,l0,577.3503,l-300,173.2051,l-200,-115.4701,l-200,115.4701,l-300,-173.2051,l0,-577.3503z"
                        />
                        <path
                            className="in"
                            strokeWidth="25"
                            fill="none"
                            strokeLinecap="round"
                            d="M0,115.4701,l100,57.735,l0,461.8802,l100,57.735,l0,-461.8802,l200,115.4701,l0,461.8802,l-200,115.4701,l-200,-115.4701,l-200,115.4701,l-200,-115.4701,l0,-461.8802,l200,-115.4701,l0,461.8802,l100,-57.735,l0,-461.8802z"
                        />
                    </g>
                </svg>
            </header>
            <form onSubmit={handleSubmit}>
                <label>
                    City <input
                        type="text"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                    />
                </label>
                <input type="submit" value="Go" />
            </form>

            <div className="coders">
                <InfiniteScroll
                    dataLength={data}
                    next={showMore}
                    hasMore={hasMore}
                    loader={null}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <div className="list">
                        {data && data.items.length > 0 &&
                            data.items.map((coder, i) => (
                                <span
                                    key={coder.id}
                                    onMouseOver={() => fetchUser(coder.login)}
                                    onMouseLeave={clear}>
                                    <Coder coder={coder} user={user} i={i} />
                                </span>
                            ))}
                    </div>
                </InfiniteScroll>
            </div>
        </div>
    );
};

export default App;


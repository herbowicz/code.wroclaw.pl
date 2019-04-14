import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Coder from './Coder';
import './Coders.css';

class Coders extends Component {
    state = {
        location: 'Vienna',
        coders: [],
        page: 1,
        isLoading: false,
        user: {},
        hasMore: true
    };

    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate() {
        this.fetchData();
    }

    fetchData = async page => {
        this.setState({ isLoading: true });

        const response = await fetch(
            `https://api.github.com/search/users?q=location:${
            this.state.location
            }?&per_page=99&page=${page}`
        );
        const coders = await response.json();
        this.setState({
            coders: this.state.coders.concat(coders.items)
        });
        this.setState({ isLoading: false });
    };

    fetchUser = async (id, index) => {
        const response = await fetch(
            `https://api.github.com/users/${id}?access_token=a4f359c6bae38b0d4de0be60aba753a68a09581f`
        );
        const user = await response.json();
        this.setState({ user });
    };

    clear = () => {
        this.setState({ user: {} });
    };

    showMore = () => {
        this.fetchData(this.state.page + 1);
        this.setState({ page: this.state.page + 1 });
        if (this.state.page > 9) {
            console.log('has more false');
            this.setState({ hasMore: false });
        }
    };

    changeLocation = location => {
        this.setState({ location });
        console.log('show lo', this.state.location);
    };

    render() {
        const { coders, user, isLoading } = this.state;
        return (
            <div>
                <button onClick={() => this.changeLocation('Dublin')}>
                    Change city
                </button>

                <InfiniteScroll
                    dataLength={coders}
                    next={this.showMore}
                    hasMore={this.state.hasMore}
                    loader={null}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }>
                    <div className="list">
                        {coders &&
                            coders.map((coder, i) => (
                                <span
                                    key={coder.id}
                                    onMouseOver={() =>
                                        this.fetchUser(coder.login)
                                    }
                                    onMouseLeave={this.clear}>
                                    <Coder coder={coder} user={user} i={i} />
                                </span>
                            ))}
                    </div>
                </InfiniteScroll>
            </div>
        );
    }
}

export default Coders;

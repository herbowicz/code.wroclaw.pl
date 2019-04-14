import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Coder from './Coder';
import './Coders.css';

class Coders extends Component {
    state = {
        coders: [],
        page: 1,
        isLoading: false,
        user: {},
        hasMore: true
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async page => {
        this.setState({ isLoading: true });

        const response = await fetch(
            `https://api.github.com/search/users?q=location:${
            this.props.location
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



    render() {
        const { coders, user, isLoading } = this.state;
        return (
            <div>


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

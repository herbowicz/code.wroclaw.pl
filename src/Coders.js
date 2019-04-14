import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Coder from './Coder';
import './Coders.css';

class Coders extends Component {
    state = {
        // coders: [],
        page: 1,
        isLoading: false,
        user: {},
        hasMore: true
    };

    // componentDidMount() {
    //     this.fetchData();
    // }

    // fetchData = async page => {
    //     this.setState({ isLoading: true });

    //     const response = await fetch(
    //         `https://api.github.com/search/users?q=location:${this.props.location}&per_page=99&page=${page}`
    //     );
    //     const coders = await response.json();
    //     console.log('coders: ', coders, this.props.location);
    //     this.setState({
    //         coders: this.state.coders.concat(coders.items)
    //     });
    //     this.setState({ isLoading: false });
    // };

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
        console.log('incoders', this.props.coders)
        return (
            
        );
    }
}

export default Coders;

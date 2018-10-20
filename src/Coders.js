import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Coder from './Coder'
import './Coders.css'

class Coders extends Component {
    
    state = {
        coders: [],
        page: 1,
        isLoading: false,
        user: {}
    }

    componentDidMount() {
        this.fetchData()
    }

    fetchData = async (page) => {
        this.setState({ isLoading: true })

        const response = await fetch(`https://api.github.com/search/users?q=location:Wroclaw+location:Wrocław?&per_page=80&page=${page}`)
        const coders = await response.json()
        this.setState({
            coders: this.state.coders.concat(coders.items)
        })
        this.setState({ isLoading: false })
    }

    fetchUser = async (id, index) => {
        const response = await fetch(`https://api.github.com/users/${id}?access_token=a4f359c6bae38b0d4de0be60aba753a68a09581f`)
        const user = await response.json()
        this.setState({ user })
    }

    clear = () => {
        this.setState({ user: {} })
    }

    showMore = () => {
        this.fetchData(this.state.page + 1)
        this.setState({page: this.state.page + 1})
    }

    render() {
        const { coders, user, isLoading } = this.state;
        return (              
                    
            <InfiniteScroll
                dataLength={coders}
                next={this.showMore}
                hasMore={true}
                loader={null}
            >
                <div className="list" >
                    {coders && coders.map((coder, i) =>
                        <span key={coder.id} onMouseOver={() => this.fetchUser(coder.login)} onMouseLeave={this.clear}>
                            <Coder coder={coder} user={user} i={i}/>
                        </span>)}
                </div>
                <div>
                    {isLoading && "Loading..."}
                    <button onClick={this.showMore}>Show more coders</button>
                </div>
            </InfiniteScroll>

        )
    }
}

export default Coders;

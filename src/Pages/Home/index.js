import React, { Component } from 'react';

import { Row, Col } from 'antd';
import InfiniteScroll from 'react-infinite-scroll-component';

import Search from '../../Components/Search';
import Filters from '../../Components/Filters';
import ImageCard from '../../Components/ImageCard';
import Loader from '../../Components/Loader';

import {
  Wrapper, SearchWrapper,
} from './styles';

import { FetchPhotos, FetchSearchPhotos } from '../../Api';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      lists: [],
      total: 0,
      loading: true,
      filter: {
        query: '',
        page: 1,
        per_page: 25,
        orientation: 'landscape',
      },
    };
  }

  componentDidMount() {
    this.handleFetchPhotos('NO_SEARCH_FILTER');
  }

  handleFetchPhotos = (action) => {
    const { filter } = this.state;

    this.setState({
      loading: true,
    });

    const params = { ...filter };
    if (filter.query === '') {
      delete params.query;
    }
    if (filter.per_page === '') {
      delete params.per_page;
    }

    let api = null;
    if (action === 'NO_SEARCH_FILTER') {
      api = FetchPhotos(params);
    } else {
      api = FetchSearchPhotos(params);
    }
    api.then((response) => {
      const { data, status, headers } = response;
      if (status === 200) {
        if (action === 'NO_SEARCH_FILTER') {
          this.setState((previousState) => ({
            total: Number(headers['x-total']),
            lists: previousState.lists.concat(data),
            loading: false,
          }));
        } else {
          this.setState((previousState) => ({
            total: data.total,
            lists: previousState.lists.concat(data.results),
            loading: false,
          }));
        }
      }
    })
      .catch(() => {
        this.setState({
          loading: false,
        });
      });
  }

  handleLoadMoreList = () => {
    const { filter } = this.state;
    this.setState((previousState) => ({
      ...previousState,
      filter: {
        ...previousState.filter,
        page: previousState.filter.page + 1,
      },
    }), () => {
      this.handleFetchPhotos(filter.query !== '' ? 'WITH_SEARCH_FILTER' : 'NO_SEARCH_FILTER');
    });
  }

  handleSearchChange = (e) => {
    const { value } = e.target;
    this.setState((previousState) => ({
      ...previousState,
      filter: {
        ...previousState.filter,
        query: value,
      },
    }));
  }

  handleFilterChange = (name, value) => {
    this.setState((previousState) => ({
      ...previousState,
      filter: {
        ...previousState.filter,
        [name]: value,
      },
    }));
  }

  handleFilterSubmit = (e) => {
    e.preventDefault();

    const { filter } = this.state;
    this.setState({
      total: 0,
      lists: [],
      loading: false,
      page: 1,
    }, () => {
      this.handleFetchPhotos(filter.query !== '' ? 'WITH_SEARCH_FILTER' : 'NO_SEARCH_FILTER');
    });
  }

  render() {
    const {
      lists, filter, total, loading,
    } = this.state;
    return (
      <>
        <Row>
          <Col xs={24}>
            <SearchWrapper>
              <Search onSearchChange={this.handleSearchChange} query={filter.query} />
              <Filters
                onFilterChange={this.handleFilterChange}
                onFilterSubmit={this.handleFilterSubmit}
                loading={loading}
                filter={filter}
              />
            </SearchWrapper>
          </Col>
        </Row>
        <Wrapper>
          <Row gutter={16}>
            <InfiniteScroll
              dataLength={lists.length}
              next={this.handleLoadMoreList}
              hasMore={total !== lists.length}
              loader={<Loader />}
              scrollThreshold={0.30}
            >
              {
                lists.map((item) => (
                  <Col lg={6} md={12} sm={24} xs={24} key={item.id}>
                    <ImageCard srcImage={item.urls.small} />
                  </Col>
                ))
              }
            </InfiniteScroll>
          </Row>
          {
            loading && lists.length === 0
              ? (
                <Row gutter={16}>
                  <Col xs={24}>
                    <Loader />
                  </Col>
                </Row>
              )
              : null
          }
        </Wrapper>
      </>
    );
  }
}

export default Home;

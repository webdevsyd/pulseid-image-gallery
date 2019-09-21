import React, { useState, useEffect } from 'react';

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

const Home = () => {
  const [data, setData] = useState({
    lists: [],
    total: 0,
    loading: true,
    filter: {
      query: '',
      page: 1,
      per_page: 25,
      orientation: 'landscape',
    },
  });
  const [userAction, setUserAction] = useState('INITIAL_LOAD');

  const handleFetchPhotos = () => {
    const { filter } = data;
    const params = { ...filter };
    if (filter.query === '') {
      delete params.query;
    }
    if (filter.per_page === '') {
      delete params.per_page;
    }

    let api = null;
    if (typeof params.query === 'undefined' || params.query === '') {
      api = FetchPhotos(params);
    } else {
      api = FetchSearchPhotos(params);
    }
    api.then((response) => {
      const { data: responseData, status, headers } = response;
      if (status === 200) {
        if (typeof params.query === 'undefined' || params.query === '') {
          setData({
            ...data,
            total: Number(headers['x-total']),
            lists: data.lists.concat(responseData),
            loading: false,
            filter: {
              ...filter,
              page: filter.page + 1,
            },
          });
        } else {
          setData({
            ...data,
            total: responseData.total,
            lists: data.lists.concat(responseData.results),
            loading: false,
            filter: {
              ...filter,
              page: filter.page + 1,
            },
          });
        }
      }
      if (userAction !== '') {
        setUserAction('');
      }
    })
      .catch(() => {
        setData({
          ...data,
          loading: false,
        });
        if (userAction !== '') {
          setUserAction('');
        }
      });
  };

  const handleSearchChange = (e) => {
    setData({
      ...data,
      filter: {
        ...data.filter,
        query: e.target.value,
      },
    });
  };

  const handleLoadMoreList = () => {
    setData({
      ...data,
      loading: true,
    });
    setUserAction('LOAD_MORE');
  };

  const handleFilterChange = (name, value) => {
    setData({
      ...data,
      filter: {
        ...data.filter,
        [name]: value,
      },
    });
  };

  const handleFilterSubmit = (e) => {
    e.preventDefault();
    setData({
      ...data,
      loading: true,
      lists: [],
      total: 0,
      filter: {
        ...data.filter,
        page: 1,
      },
    });
    setUserAction('FILTER_SUBMIT');
  };

  useEffect(() => {
    const { lists, loading } = data;
    if (userAction === 'INITIAL_LOAD') {
      if (lists.length === 0) {
        handleFetchPhotos();
      }
    } else if (userAction === 'LOAD_MORE') {
      if (lists.length > 0 && loading) {
        handleFetchPhotos();
      }
    } else if (userAction === 'FILTER_SUBMIT') {
      if (lists.length === 0) {
        handleFetchPhotos();
      }
    }
  }, [data, userAction]);

  const {
    filter, lists, total, loading,
  } = data;
  return (
    <>
      <Row>
        <Col xs={24}>
          <SearchWrapper onSubmit={handleFilterSubmit}>
            <Search onSearchChange={handleSearchChange} query={filter.query} />
            <Filters
              onFilterChange={handleFilterChange}
              onFilterSubmit={handleFilterSubmit}
              loading={loading}
              filter={filter}
            />
          </SearchWrapper>
        </Col>
      </Row>
      <Wrapper>
        <Row gutter={16}>
          {
            lists.length > 0
              ? (
                <InfiniteScroll
                  dataLength={lists.length}
                  next={handleLoadMoreList}
                  hasMore={total !== lists.length}
                  // loader={<Loader />}
                  scrollThreshold={0.90}
                >
                  {
                    lists.map((item) => (
                      <Col lg={6} md={12} sm={24} xs={24} key={item.id} data-testid="image_list">
                        <ImageCard srcImage={item.urls.small} />
                      </Col>
                    ))
                  }
                </InfiniteScroll>
              )
              : null
          }
        </Row>
        {
          loading
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
};

export default Home;

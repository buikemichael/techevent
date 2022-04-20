import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Event from '../components/Event';
import { getEvents } from '../utilities/event/eventSlice';

const EventsPage = () => {
  const dispatch = useDispatch();
  const [isVirtual, setIsVirtual] = useState('');
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const { events, loading, error } = useSelector((state) => state.event);


  const getEventData = useCallback(() => {
    dispatch(
      getEvents({
        category,
        isVirtual,
        search,
      })
    );
  }, [dispatch, isVirtual, search, category]);

  useEffect(() => {
    getEventData();
  }, [getEventData]);

  const Events = () => {
    return (
      <div className='container'>
        {loading &&
          <div className='alert alert-secondary text-center'>Loading events...</div>}
        {error &&
          <div className='alert alert-danger text-center'>Error getting data from server.</div>}
        {!loading && !events?.length &&
          <div className='text-center'>No Event found</div>
        }
        {!loading && events?.length &&
          <div className='row'>
            {events?.map((event) => (
              <div className='col-md-4' key={event?._id}>
                <Event eventData={event} />
              </div>
            ))}
          </div>
        }
      </div>)
  }
  return (
    <div className=''>
      <Header>
        <div className='hero'>
          TECH EVENT UK
        </div>
        <div className="container main-searchbar-area">
          <form className="searchbar-wrapper" >
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="searchbar-input-group">
                      <input type="text" placeholder="Event Title or Location..." onChange={e => setSearch(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="searchbar-input-group">
                      <div className="custom-select filter-options">
                        <select onChange={e => setCategory(e.target.value)}>
                          <option value="all">All Category</option>
                          <option value="ai">AI</option>
                          <option value="web3">WEB 3</option>
                          <option value="nft">NFT</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="searchbar-input-group">
                      <div className="custom-select filter-options">
                        <select onChange={e => setIsVirtual(e.target.value)}>
                          <option value='all'>Virtual / Live Event</option>
                          <option value='true'>Virtual Event</option>
                          <option value='false'>Live Event</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Header>
      <EventsWrapper>
        <Events />
      </EventsWrapper>
    </div>
  );
}

const Header = styled.div`
  .hero{
    height: 300px;
    background: rgb(195,33,76);
    background: linear-gradient(138deg, rgba(195,33,76,1) 36%, rgba(233,155,176,1) 94%);
    display: flex;
    justify-content: center;
    align-items: center;
    color:#fff;
    font-size: 45px;
  }
  .main-searchbar-area{
    margin-top: -75px;
    background: #fff;
    -webkit-box-shadow: 0 10px 25px rgb(0 0 0 / 4%);
    box-shadow: 0 10px 25px rgb(0 0 0 / 4%);
    border-radius: 5px;
    padding: 50px 40px;
  }
  @media only screen and (max-width: 991px){
  .searchbar-input-group {
      margin-bottom: 20px;
  }}
  input{
    height: 50px;
    border-radius: 100px;
    position: relative;
    border: 1px solid #ce1446;
    padding: 14px 20px;
    display: block;
    width: 100%;
    background: #fff;
  }
  input[type=submit] {
    height: 50px;
    font-weight: 600;
    font-size: 17px;
    color: #fff;
    background: #ce1446;
    border: none;
    border-radius: 100px;
    -webkit-transition: all .35s;
    transition: all .35s;
  }
  select{
    background-color: #fff;
    padding: 14px 21px;
    cursor: pointer;
    user-select: none;
    border-radius: 100px;
    position: relative;
    font-weight: 500;
    font-size: 15px;
    color: #2d373c;
    border: 1px solid #ce1446;
    color: #2d373c;
    display: block;
    width: 100%;
    background: #fff;
    -webkit-appearance: none;
    appearance: none;
  }
  .custom-select{
    position: relative;
  }
  .custom-select::after {
    content: "▼";
    font-size: 1rem;
    top: 12px;
    right: 15px;
    position: absolute;
    color:#000
  }
`;

const EventsWrapper = styled.div``;
export default EventsPage;
